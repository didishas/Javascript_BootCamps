//! first way to import thing as simple files
import str from './models/Search'

//! second way import thing as aliases
// import {Add as a , Multiply as m, Substract as s, Divide as d, ID} from './views/searchView'

//! Third way alias the Path
import * as searchView  from './views/searchView'

console.log(`Using the Imported functions ${searchView.Add(searchView.ID, 2)}`)