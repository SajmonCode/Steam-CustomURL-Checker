/** Required packages */
const yargs = require('yargs');
const tcom = require('thesaurus-com');
const SteamAPI = require('steamapi');

/** API -- https://steamcommunity.com/dev/apikey */
const steam = new SteamAPI('xxxxxxxxxxxxxxxxxxxx');

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
fetchedWords.synonyms.push(argv.word);

function checkWords(words) {
  let stringOfWords = '\n' + "\x1b[36m" + '[List of words & synonyms]' + "\x1b[0m";
  for (let i = 0; i < words.length; i++) {
    if (i % 2 == 0) {
      stringOfWords += '\n'
    }
    let spacing = 15 - words[i].length;
    stringOfWords += '- ' + words[i] + ' '.repeat(spacing);
  }
  console.log(stringOfWords);
  console.log('\n' + "\x1b[32m" + '[ Available Words ]' + "\x1b[0m");
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
