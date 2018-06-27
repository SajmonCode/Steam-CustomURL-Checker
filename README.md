# Steam CustomURL Checker

Steam CustomURL Checker will allow the user to input words into the console to check for synonyms. It will then check and validate the word and synonyms for usage on Steam. It will print the words it found and the words that are available for use.

### Installation

Install the following NodeJS packages.

```sh
$ npm install yargs
$ npm install thesaurus-com
$ npm install steamapi
```

Register and setup STEAM Api key.
- https://steamcommunity.com/dev/apikey

```javascript
const steam = new SteamAPI('XXXXXXXXXXXXXXXX');
```

### Usage & Example

```sh
$ node app.js -w 'your word'
```

```sh
C:\Users\Example\Desktop\Steam ID Checker>node app.js -w hate

[List of words & synonyms]
- abhorrence     - abomination
- anathema       - animosity
- animus         - antagonism
- antipathy      - aversion
- black beast    - bother
- bugbear        - bête noire
- detestation    - disgust
- enmity         - execration
- frost          - grievance
- gripe          - hatred
- horror         - hostility
- ill will       - irritant
- loathing       - malevolence
- malignity      - mislike
- nasty look     - no love lost
- nuisance       - objection
- odium          - pain
- rancor         - rankling
- repugnance     - repulsion
- resentment     - revenge
- revulsion      - scorn
- spite          - trouble
- venom          - hate

[ Available Words ]
- no love lost
- mislike
- rankling
```
