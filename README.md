[![VoiceArt](voice-art.png)](https://github.com/966647/voice-art)

Overview
-------
 Voice Art is a tool consisting of several components.
 
 - ItemRenderer is a module that transforms question items JSON content into HTML data. In addition, it performs simple grading in case the item is automatically gradable.
 - VoiceController is an extensible tool that allows working with tasks (including those generated by ItemRenderer) using voice commands. It provides speech recognition and user action emulation service. Also, the Voice Controller provides flexibility in user scenarios.

VoiceART is provided both on a commercial and free basis. 
The free version allows to you to use the key opportunities of the tool. The purchased version includes

 - all the functionality of the free version;
 - the server-based enhanced speech recognition;
 - customer support.
 
 For the detailed information refer to the License section.

Installation
-------
Install the voice-art module as dependency in your project via npm:
```sh
npm install git+https://github.com/966647/voice-art.git
```
or download voice-art lib files from [github](https://github.com/966647/voice-art)

Usage
-------
####  Connecting:

```javascript
var VoiceArt = require('voice-art');//require module VoiceArt which contain the needed components
var ItemRenderer = VoiceArt.ItemRenderer;
var VoiceController = VoiceArt.VoiceController;
var VoiceCommander = VoiceArt.VoiceCommander;
```
or
```html
<script src='{path to lib directory}/common.js'></script>
<script src='{path to lib directory}/item-renderer.js'></script>
<script src='{path to lib directory}/voice-controller.js'></script>

<script>
    //global var VoiceArt
    var ItemRenderer = VoiceArt.ItemRenderer;
    var VoiceController = VoiceArt.VoiceController;
    var VoiceCommander = VoiceArt.VoiceCommander;
</script>
```


#### Using ItemRenderer and VoiceController together

```javascript
    var item = new ItemRenderer(containerElement, config); //init new task item according to the configuration
    var voiceController = new VoiceController(containerElement, settings); //init VoiceController which parse item html and create voice controller for it
```
The **context** property must be the same

####  Using VoiceController only (common scenario)

In this case, the default interaction scenario is used, with no non-standard behaviors, events, etc.

js:
```javascript
    var voiceController = new VoiceController(container, {
      context: "common"
    });
```
Add to the task layout the following classes so that the Voice Controller can parse the field types successfully:

Class | Element | Description
--- | --- | ---
vart-title | element with item label or description | A class containing the item description text.
vart-field | field wrapper element | A class used as a field wrapper element which can contain an optional label or description.
vart-field-title | field label element | A class that contains field labels or descriptions.
vart-mc | field wrapper element | A class for Multiple Choice (MC) tasks processing (specifies the MC field type).
vart-mc-checkbox | field wrapper element | A class for Multiple Choice tasks processing It specifies the MC field checkbox subtype.
vart-mc-radio | field wrapper element | A class for Multiple Choice tasks processing. It specifies the MC field radio subtype.
vart-choice | choice input element of mc | A class for Multiple Choice tasks processing, it specifies the choice option in the Multiple Choice field type.
vart-dropdown | field wrapper element | A class for the Select tasks procesing that specifies the dropdown field type.
vart-essay | field wrapper element | A class for the essay tasks processing that specifies the corresponding field type.

For the 'mc' field type, add the "alternatives" attribute to each choice element as follows:
```html
<div class="vart-choice" aria-label="Bill Clinton" alternatives="Bill, Clinton">
    <label>
        <input type="checkbox" value="a"/>Bill Clinton
    </label>
</div>
```
The specified words will be recognized as alternative answers.

So, the VC parses html according to these instructions and provides the voice control.

#### Using VoiceController only (custom scenario)

js:
```javascript
    var voiceController = new VoiceController(container, {
      scenario: ScenarioClass
    });
```
Where 'ScenarioClass' is an es6 class (or constructor function) with custom scenario

Example
-------
The following code sample illustrates working with Item Renderer and Voice Controller. It gets the JSON for the Multiple Choice task, renders HTML data and makes it possible for the user to answer the task with voice commands.

html head:
```html
<script src='{path to lib directory}/jquery.js'></script>
<script src='{path to lib directory}/common.js'></script>
<script src='{path to lib directory}/item-renderer.js'></script>
<script src='{path to lib directory}/voice-controller.js'></script>
```
html body:
```html
<div id="control_panel"></div>
<div id="item_container"></div>
```
js:
```javascript
var ItemRenderer = VoiceArt.ItemRenderer;
var VoiceController = VoiceArt.VoiceController;
var VoiceCommander = VoiceArt.VoiceCommander;

var container = document.getElementById('item_container');
$.getJSON('samples/demo-pack/mc-checkbox.json', function(config){
    var item = new ItemRenderer(container, config);
    var voiceController = new VoiceController(container, {
      panelContainer: document.getElementById("control_panel"),
      controllerSettings: {mode: 1},
      maxNoSpeechErrors: 3,
      context: "cg"
    });
});

```



License
-------

Competentum Group's VoiceART License

Competentum Group licenses VoiceART under the [GNU Public License version 3](https://www.gnu.org/licenses/gpl-3.0.html). VoiceART Enterprise is licensed under a commercial 
Competentum Group license.

We encourage VoiceART users to learn about the license by [reading the license](https://www.gnu.org/licenses/gpl-3.0.html) and [frequently asked questions](https://www.gnu.org/licenses/gpl-faq.html) provided by the Free Software Foundation.

VoiceART is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 VoiceART is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with VoiceART.  If not, see <http://www.gnu.org/licenses/>.