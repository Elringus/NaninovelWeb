﻿# Naninovel Scripts

Naninovel scripts are text documents (`.txt` extension) where you control what happens on scenes. You can open and edit them with a text editor of your choice, like Notepad, Word or Sublime.

Each line in a naninovel script represents a statement, which can be an command, generic text, label, comment or a define statement. Type of the statement is determined by the literal that is placed at the start of the line:

Literal | Statement Type 
:---: | --- 
@ | [Command](#command-lines)
# | [Label](#label-lines)
; | [Comment](#comment-lines)
> | [Define](#define-lines)

When none of the above literals are present at the start of the line, it's considered a [generic text](#generic-text-lines) statement.

## Command Lines

Line is considered a command statement if it starts with a `@` literal. Command represents a single operation, that controls what happens on the scene; eg, it can be used to change a background, move a character or load another naninovel script.

### Command Identifier

Right after the command literal a command identifier is expected. This could either be name of the C# class that implements the command or the command's tag (if it's applied via `CommandAlias` attribute). 

For example, a [`@save`](/api/#save) command (used to auto-save the game) is implemented via the `AutoSave` C# class. The implementing class also has a `[CommandAlias("save")]` attribute applied, so you can use both `@save` and `@AutoSave` statements in the script to invoke this command. 

Command identifiers are case-insensitive; all the following statements are valid and will invoke the same `AutoSave` command:

```
@save
@Save
@AutoSave
@autosave
``` 

### Command Parameters

Most of the commands have a number of parameters that define the effect of the command. Parameter is a key-value expression defined after the command literal separated by a column (`:`). Parameter identifier (key) could be either name of the corresponding parameter field of the command implementation class or the parameter's alias (if defined via `CommandParameter` attribute).
```
@commandId paramId:paramValue 
```

Consider a [`@hideChars`](/api/#hidechars) command, which is used to hide all visible characters on the scene. It could be used as follows:

```
@hideChars
```
You can use a `time` *Single* parameter here to control for how long the characters will fade-out before becoming completely hidden (removed from scene):

```
@hideChars time:5.5
```

This will make the characters to fade-out for 5.5 seconds, before completely removing them from scene.

You can also use a `wait` *Boolean* parameter to specify, whether next command should be executed immediately after or wait for the completion of the current command:

```
@hideChars time:5.5 wait:false
@hideText
```
This will hide the text printer right after characters will begin to fade-out. If `wait` would be `true` or not specified, the printer would be hidden only when the `@hideChars` complete the execution.

### Parameter Value Types

Depending on the command parameter, it could expect one of the following value types: 

Type | Description
--- | ---
String | A simple string value, eg: `LoremIpsum`. Don't forget to wrap the string in double quotes in case it contain spaces, eg: `"Lorem ipsum dolor sit amet."`.
Integer | A number which is not a fraction; a whole number, eg: `1`, `150`, `-25`.
Decimal | A decimal number with fraction delimited by a dot, eg: `1.0`, `12.08`, `-0.005`.
Boolean | Can have one of two possible values: `true` or `false` (case-insensitive).
Named<> | A name string associated with a value of one of the above types. The name part is delimited by a dot. Eg for *Named&lt;Integer&gt;*: `foo.8`, `bar.-20`.
List<>| A comma-separated list of values of one of the above types. Eg for *List&lt;String&gt;*: `foo,bar,"Lorem ipsum."`, for *List&lt;Decimal&gt;*: `12,-8,0.105,2`

### Nameless Parameters

Most of the commands have a nameless parameter. A parameter is considered nameless when it could be used without specifying its name. 

For example, a [`@bgm`](/api/#bgm) command expects a nameless parameter specifying the name of the music track to play:

```
@bgm PianoTheme
```
"PianoTheme" here is the value of the "BgmPath" *String* parameter.

There could be only one nameless parameter per command and it should always be specified before any other parameters.

### Optional and Required Parameters

Most of the command parameters are *optional*. It means they either have a predefined value or just doesn't require any value in order for the command to be executed. For example, when a [`@resetText`](/api/#resettext) command used without specifying any parameters it will reset text of an active printer, but you can also set a specific printer name like this: `@resetText pinter:Dialogue`.

Some parameters however are *required* in order for the command to execute and should always be specified.

### Commands API Reference

For the list of all the currently available commands with a summary, parameters and usage examples see [commands API reference](/api/). 

## Generic Text Lines

To make writing scripts with large amounts of text more comfortable generic text lines are used. Line is considered a generic text statement if doesn't start with any of the predefined statement literals:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

A character name can be specified at the start of a generic text line separated by a column (`:`) to associate printed text with the character:

```
Felix: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

Any number of commands can be inlined to generic text statements using square brackets (`[`,`]`):

```
Felix: Lorem ipsum[char Felix.Happy pos:0.75 wait:false] dolor sit amet, consectetur adipiscing elit.[i] Aenean tempus eleifend ante, ac molestie metus condimentum quis.[i][br 2] Morbi nunc magna, consequat posuere consectetur in, dapibus consectetur lorem. Duis consectetur semper augue nec pharetra.[skipInput]
```

Under the hood, generic text statements are parsed into individual commands; text is printed with [`@print`](/api/#print) command.

## Label Lines

Labels are used as "anchors" when navigating the naninovel scripts with [`@goto`](/api/#goto) commands. To define a label, use a `#` literal at the start of the line followed with label name:

```
# Epilogue
```

You can then use a [`@goto`](/api/#goto) command to "jump" to that line:

```
@goto ScriptName.Epilogue
```

In case you're using [`@goto`](/api/#goto) command from within the same script where the label is defined, you can omit the script name:

```
@goto .Epilogue
```


## Comment Lines

When line starts with a semicolon literal (`;`) it's considered a comment statement. Comment lines are completely ignored by the engine when scripts are parsed. You can use comment lines to add notes or annotations for yourself or other team members who work with naninovel scripts.

```
; The following command will auto-save the game.
@save
```

## Define Lines

When working with naninovel scripts, you'll notice that some statements are frequently repeated. It could be a character name, which you have to type multiple times before generic text lines or some parameter value, which you frequently use throughout single script document. 

To simplify things a bit, script defines feature was implemented. You can define an arbitrary expression by associating it with a short name and then use this short name throughout the naninovel script. When the script is parsed, those short names will be replaced with the defined expression.

To define an expression, use `>` literal followed with the short name which will be used to reference the expression; then specify the defined expression. 

The following will define `Felix` character name as an `f` short name and `#ff0000,bold` text style as a `red` short name:

```
>f Felix
>red #ff0000,bold
```

You can then use the short names preceded by `$` literal to reference the defined expressions:

```
@char $f.Happy
He was as happy as a [style $red]clam[style default].
```

However, you'll probably mostly use this feature to reference associated character names in general text lines. To further simplify the process, `$` literal can be omitted in such cases:

```
@char $f.Happy
f: I'm as happy as a [style $red]clam[style default]!
```

## Conditional Execution

While the script are executed in a linear fashion by default, you can introduce branching using `if` parameters supported by all the commands.

```
; If `level` value is a number and is greater than 9000, add the choice.
@choice "It's over 9000!" if:level>9000

; If `dead` variable is a bool and equal to `false`, execute the print command.
@print text:"I'm still alive." if:!dead

; If `glitch` is a bool and equals `true` or random function in 1 to 10 range 
; returns 5 or more, execute `@fx` command.
@fx GlitchCamera if:"glitch || Random(1, 10) >= 5"

; If `score` value is in 7 to 13 range or `lucky` variable is a bool and equals 
; `true`, load `LuckyEnd` script.
@goto LuckyEnd if:"(score >= 7 && score <= 13) || lucky"

; You can also use conditionals in the inlined commands.
Lorem sit amet. [style bold if:score>=10]Consectetur elit.[style default]

; When using double quotes inside the expression itself, 
; don't forget to double-escape them.
@print {remark} if:remark=="Saying \\"Stop the car\\" was a mistake."
```

It's also possible to specify multi-line conditional blocks with [`@if`](/api/#if), [`@else`](/api/#else), [`@elseif`](/api/#elseif) and [`@endif`](/api/#endif) commands.

```
@if score>10
	Good job, you've passed the test!
	@bgm Victory
	@fx Fireworks
@elseif attempts>100
	You're hopeless... Need help?
	@choice "Yeah, please!" goto:.GetHelp
	@choice "I'll keep trying." goto:.BeginTest
	@stop
@else
	You've failed. Try again!
	@goto .BeginTest
@endif
```

Note that tabs here are completely optional and used just for better readability.

For more information on the conditional expression format and available operators see the [script expressions](/guide/script-expressions.md) guide.

## Scripts Debug

When working with large naninovel scripts, it could become tedious to always play them from start in order to check how things work in particular parts of the script. 

Using [development console](/guide/development-console.md) you can instantly "rewind" currently active script to an arbitrary line:

```
rewind 12
```

— will start playing current script from the 12th line; you can rewind forward and backward in the same way. To open the console while game is running, make sure the console is enabled in the engine configuration and press `~` key.

In case you need to constantly move forward-backward for a few lines (e.g. to test an animation or visual effect), consider using debug window. Type `debug` in the development console and press `Enter` to show the window.

![Scripts Debug](https://i.gyazo.com/36b46d2c84fd58d33942ed2fd5c5fe64.png)

Currently played script name, line number and command (inline) index are displayed in the title of the window. You can re-position the window by dragging it by the title. "Previous" and "Next" buttons allows to "jump" the script execution one line back and forward. "Stop" button will halt script execution; when script player is stopped "Play" button will resume the execution. You can close the debug window by pressing the "Close" button.