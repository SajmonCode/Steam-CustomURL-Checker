# Steam CustomURL Checker

Steam CustomURL Checker will allow the user to input words into the console to check for synonyms. It will then check and validate the word and synonyms for usage on Steam. It will print the words it found and the words that are available for use.

### Installation

Install the following NodeJS packages.

```sh
$ npm install yargs
$ npm install axios
$ npm install steamapi
```

Register and setup these API-keys.
- https://steamcommunity.com/dev/apikey
- https://www.wordsapi.com/

```javascript
const steam = new SteamAPI('XXXXXXXXXXXXXXXX');
const wordsApiKey = 'XXXXXXXXXXXXXXXX';
```

How to use the console program.
```sh
$ node app.js -w 'your word'
```

/README.md>
