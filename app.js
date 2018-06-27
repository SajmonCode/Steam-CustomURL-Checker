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

let fetchedWords = tcom.search(argv.word);
fetchedWords.synonyms.push(argv.word);

function checkWords(words) {
  const longestWordLength = Math.max(...(fetchedWords.synonyms.map(el => el.length)));
  let stringOfWords = '\n' + "\x1b[36m" + '[List of words & synonyms]' + "\x1b[0m";
  for (let i = 0; i < words.length; i++) {
    if (i % 2 == 0) {
      stringOfWords += '\n'
    } else {
      let spacing = (15 - words[i].length);
      stringOfWords += '- ' + words[i] + ' '.repeat(spacing);
    }
  }
  console.log(stringOfWords + '\n\n' + "\x1b[32m" + '[ Available Words ]' + "\x1b[0m");
  for (let i = 0; i < words.length; i++) {
    steam.resolve(`https://steamcommunity.com/id/${words[i]}`).then(id => {
      if (id === undefined) {
        console.log('- ' + words[i]);
      }
    });
  }
}

checkWords(fetchedWords.synonyms);
