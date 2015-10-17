#!/usr/local/bin/node

var yaml = require('js-yaml');
var fs   = require('fs');
var request = require('request');

var argv = require('yargs').argv;

var call = argv._ + '';

/**
 * Possible API RPC
 *
 * - images
 * - regions
 * - sizes
 */

// Get document, or throw exception on error
try {
  var vars = yaml.safeLoad(fs.readFileSync('vars.yml', 'utf8'));
} catch (e) {
  console.log(e);
  return;
}

var do_client_id = vars.do_client_id;
var do_api_key = vars.do_api_key;

request(
  'https://api.digitalocean.com/v1/'+call+'/?client_id='+ do_client_id +'&api_key='+ do_api_key,
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(JSON.parse(body)) // Show the HTML for the Google homepage.
    }
  });
