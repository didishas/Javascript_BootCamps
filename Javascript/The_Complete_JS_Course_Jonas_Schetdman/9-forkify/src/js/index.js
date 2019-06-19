import Search from './models/Search';

//#region All 3 way to import modules
// //! first way to import thing as simple files
// import str from './models/Search'

// //! second way import thing as aliases
// // import {Add as a , Multiply as m, Substract as s, Divide as d, ID} from './views/searchView'

// //! Third way alias the Path
// import * as searchView  from './views/searchView'

// console.log(`Using the Imported functions ${searchView.Add(searchView.ID, 2)}`)
//#endregion

//#region TESTING API
// todo done for testing API
// import axios from 'axios'
// // todo  Forkify Start Up
// let apiKey, URL, query, proxy;



// async function getResults(query) {
//     proxy = 'https://cors-anywhere.herokuapp.com/';
//     apiKey = 'da30482b2b44851038c25d64c6b944cc';
//     URL = `${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${query}`;
//     try {
//         const res = await axios(`${URL}`);
//         const recipes = res.data.recipes;
//         console.log(res);
//     } catch (error) {
//         alert(error)
//     }
    
// }

// getResults('pizza');
//#endregion


/** Gobal State of App
 * todo Search Object
 * todo Current recipe object
 * todo Shopping List object
 * todo Liked recipes
 */
 

const search = new Search('pizza');

search.getResults();


