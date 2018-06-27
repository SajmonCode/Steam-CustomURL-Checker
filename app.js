/** Required packages */
const yargs = require('yargs');
const tcom = require('thesaurus-com');
const SteamAPI = require('steamapi');

/** API -- https://steamcommunity.com/dev/apikey */
const steam = new SteamAPI('6689E7A1AB36A5D15E2A59E25C2EF4D9');

/** Yargs configuration */
const argv = yargs
  .options({
    w: {
      demand: true,
      alias: 'word',
      describe: 'Word to fetch synonyms for',
      string: true
    }
  })
  .help()
  .alias('help', 'h').argv;

const fetchedWords = tcom.search(argv.word);

function checkWords(words) {
  console.log(words);
  console.log('\n Available Words: ');
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    steam.resolve(`https://steamcommunity.com/id/${word}`).then(id => {
      if (id === undefined) {
        console.log('- ' + word);
      }
    });
  }
}

checkWords(fetchedWords.synonyms);
