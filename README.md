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
C:\Users\Example\Desktop\Steam ID Checker>node app.js -w love
[List of words & synonyms]
- adulation      - affection      - allegiance
- amity          - amorousness    - amour
- appreciation   - ardency        - ardor
- attachment     - case           - cherishing
- crush          - delight        - devotedness
- devotion       - emotion        - enchantment
- enjoyment      - fervor         - fidelity
- flame          - fondness       - friendship
- hankering      - idolatry       - inclination
- infatuation    - involvement    - like
- lust           - mad for        - partiality
- passion        - piety          - rapture
- regard         - relish         - respect
- sentiment      - soft spot      - taste
- tenderness     - weakness       - worship
- yearning       - zeal           - love

[ Available Words ]
- adulation
- devotedness
```
