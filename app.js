/** Required packages */
const yargs = require('yargs');
const axios = require('axios');
const SteamAPI = require('steamapi');

/** APIs and their keys
 * https://steamcommunity.com/dev/apikey
 * https://www.wordsapi.com/
 */
const steam = new SteamAPI('XXXXXXXXXXX');
const wordsApiKey = 'XXXXXXXXX';

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

/** Retrieve word from user input, search for synonyms,
 *  and call checkWords() to retrieve words and synonyms that are available for usage. */
function getSynonyms(word) {
  let encodedAddress = encodeURIComponent(word);
  let url = `https://wordsapiv1.p.mashape.com/words/${encodedAddress}/synonyms`;

  axios
    .get(url, {
      headers: {
        'X-Mashape-Key': wordsApiKey
      }
    })
    .then(res => {
      if (res.data.status === 400) throw new Error('Your request is invalid.');
      else {
        let words = res.data.synonyms;
        words.push(word);
        checkWords(words);
      }
    })
    .catch(err => {
      console.log(err.message);
    });
}

function checkWords(words) {
  console.log(words);
  console.log('\n Available Words:');
  words.forEach(element => {
    steam.resolve(`https://steamcommunity.com/id/${element}`).then(id => {
      if (id === undefined) {
        console.log('- ' + element);
      }
    });
  });
}

getSynonyms(argv.word);
