const dsvToJson = require('..');

let moviesOptions = {
  delimiter: ',',
  fileName: 'movies.dsv'
}

dsvToJson(moviesOptions)
  .then( (data) => {
    console.log(data);
  } )
  .catch( (err) => {
    console.log(err);
  });
