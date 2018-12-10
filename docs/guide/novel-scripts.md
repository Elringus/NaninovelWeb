# Novel scripts

Novel scripts are text documents (`.txt` extension) where you control what happens on scenes. You can open and edit them with a text editor of your choice, like Notepad, Word or Sublime.

Each line in a novel script represents a statement, which can be an action, generic text, label, comment or a define statement. Type of the statement is determined by the literal that is placed at the start of the line:

Literal | Statement Type 
:---: | --- 
@ | [Action](#action-lines)
# | [Label](#label-lines)
; | [Comment](#comment-lines)
> | [Define](#define-lines)

When none of the above literals are present at the start of the line, it's considered a [generic text](#generic-text-lines) statement.

## Action lines

Line is considered an action statement if it starts with a `@` literal. Action represents a single operation, that controls what happens on the scene; eg, it can be used to change a background, move a character or load another novel script.

### Action identifier

Right after the action literal an action identifier is expected. This could either be the name of the C# class that implements the action or the action's tag (if it's applied via `NovelActionTag` attribute). 

For example, a [`@save`](/api/#save) action (used to auto-save the game) is implemented via the `AutoSave` C# class. The implementing class also has a `[NovelActionTag("save")]` attribute applied, so you can use both `@save` and `@AutoSave` statements in the script to invoke this action. 

Action identifiers are case-insensitive; all the following statements are valid and will invoke the same `AutoSave` action:

```
@save
@Save
@AutoSave
@autosave
``` 

### Action parameters

Most of the actions have a number of parameters that define the effect of the action. Parameter is a key-value expression that is defined after the action literal separated by a column (`:`). Parameter identifier (key) could be either name of the corresponding parameter field of the action implementation class or the parameter's tag (if defined via `NovelActionParameter` attribute).
```
@actionId paramId:paramValue 
```

Consider a [`@hideChars`](/api/#hidechars) action, which is used to hide all visible characters on the scene. It could be used as follows:

```
@hideChars
```
You can use a `time` *Single* parameter here to control for how long the characters will fade-out before becoming completely hidden (removed from scene):

```
@hideChars time:5
```

This will make the characters to fade-out for 5 seconds, before completely removing them from scene.

You can also use a `wait` *Boolean* parameter to specify, whether next action should be executed immediately after or wait for the completion of the current action:

```
@hideChars time:5 wait:false
@hideText
```
This will hide the text printer right after characters will begin to fade-out. If `wait` would be `true` or not specified, the printer would be hidden only when the `@hideChars` complete the execution.

### Parameter value types

Depending on the action parameter, it could expect one of the following value types: 

Type | Examples
--- | ---
String | `LoremIpsum`, `"Lorem ipsum"`
Int32 | `1`, `150`, `-25`
Single | `5`, `12.8`, `-0.005`
Boolean | `true`, `false`
[] | Depends on array type, eg for String[] `foo,bar,lorem,ipsum`, for Single[]: `12,-8,0.105,2`
Pair<> | Depends on pair types, eg for Pair<String,Single> `foo.8`, `bar.-2.01`, `lorem.-15.75`, `ipsum.5`

### Nameless parameters

Most of the actions have a nameless parameter. A parameter is considered nameless when it could be used without specifying its name. 

For example, a [`@bgm`](/api/#bgm) action expects a nameless parameter specifying the name of the music track to play:

```
@bgm PianoTheme
```
"PianoTheme" here is the value of the "BgmPath" *String* parameter.

There could be only one nameless parameter per action and it should always be specified before any other parameters.

### Optional and required parameters

Most of the action parameters are *optional*. It means they either have a predefined value or just doesn't require any value in order for the action to be executed. For example, when a [`@resetText`](/api/#resettext) action used without specifying any parameters it will reset text of an active printer, but you can also set a specific printer name like this: `@resetText pinter:Dialogue`.

Some parameters however are *required* in order for the action to execute and should always be specified.

### Actions API reference

For the list of all the currently available actions with a summary, parameters and usage examples see [novel script actions API reference](/api/). 

## Generic text lines

To make writing scripts with large amounts of text more comfortable generic text lines are used. Line is considered a generic text statement if doesn't start with any of the predefined statement literals:

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

A character name can be specified at the start of a generic text line separated by a column (`:`) to associate printed text with the character:

```
Felix: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
```

Any number of actions can be inlined to generic text statements using square brackets (`[`,`]`):

```
Felix: Lorem ipsum[char Felix.Happy pos:0.75 wait:false] dolor sit amet, consectetur adipiscing elit.[i] Aenean tempus eleifend ante, ac molestie metus condimentum quis.[i][br 2] Morbi nunc magna, consequat posuere consectetur in, dapibus consectetur lorem. Duis consectetur semper augue nec pharetra.[skipInput]
```

Under the hood, generic text statements are parsed into individual actions; text is printed with [`@print`](/api/#print) action.

## Label lines

Labels are used as "anchors" when navigating the novel scripts with [`@goto`](/api/#goto) actions. To define a label, use a `#` literal at the start of the line followed with label name:

```
# Epilogue
```

You can then use a [`@goto`](/api/#goto) action to "jump" to that line:

```
@goto ScriptName.Epilogue
```

In case you're using [`@goto`](/api/#goto) action from withing the same script where the label is defined, you can omit the script name:

```
@goto .Epilogue
```


## Comment lines

When line starts with a semicolon literal (`;`) it's considered a comment statement. Comment lines are completely ignored by the engine when scripts are parsed. You can use comment lines to add notes or annotations for yourself or other team members who works with novel scripts.

```
; The following action will auto-save the game.
@save
```

## Define lines

When working with novel scripts, you'll notice that some statements are frequently repeated. It could be a character name, which you have to type multiple times before generic text lines or some parameter value, which you frequently use throughout single novel script document. 

To simplify things a bit, script defines feature was implemented. You can define an arbitrary expression by associating it with a short name and then use this short name throughout the novel script. When the script is parsed, those short names will be replaced with the defined expression.

To define an expression, use `>` literal followed with the short name which will be used to reference the expression; then specify the defined expression. 

The following will define `Felix` character name as an `f` short name and `#ff0000,bold` text style as a `red` short name:

```
>f Felix
>red #ff0000,bold
```

You can then use the short names proceeded by `$` literal to reference the defined expressions:

```
@char $f.Happy
He was as happy as a [style $red]clam[style default].
```

However, you'll likely use this feature to reference associated character names when typing general text lines most of the time. To further simplify the process, `$` literal is not required in cases like that:

```
@char $f.Happy
f: I'm happy as a [style $red]clam[style default]!
```
