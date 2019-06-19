// //! first way to import thing as simple files
// import str from './models/Search'

// //! second way import thing as aliases
// // import {Add as a , Multiply as m, Substract as s, Divide as d, ID} from './views/searchView'

// //! Third way alias the Path
// import * as searchView  from './views/searchView'

// console.log(`Using the Imported functions ${searchView.Add(searchView.ID, 2)}`)

import axios from 'axios'
// todo  Forkify Start Up
let apiKey, URL, query, proxy;



async function getResults(query) {
    proxy = 'https://cors-anywhere.herokuapp.com/';
    apiKey = 'da30482b2b44851038c25d64c6b944cc';
    URL = `${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${query}`;
    const res = await axios(`${URL}`);
    console.log(res);
    
}

getResults('pizza');