# dsv-to-json
Delimiter-separated values to JSON

Get a JSON object by providing a file and its delimiter.

File to be parsed

```
title, genre, year
The Pursuit Of Happiness, Drama, 2006
The Expendables, Action, 2010
The Godfather, Drama, 1972
```


How to parse
``` javascript
const dsvToJson = require('dsv-to-json');

let moviesOptions = {
  delimiter: ',',
  fileName: 'movies.dsv'
}

dsvToJson(moviesOptions)
  .then( (data) => {
    console.log(data); // outputs a javascript object
  } )
  .catch( (err) => {
    console.log(err);
  });

```
