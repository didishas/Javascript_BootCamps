import Search from './models/Search';
import * as SearchViews from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base'


/** Gobal State of App
 * todo Search Object
 * todo Current recipe object
 * todo Shopping List object
 * todo Liked recipes
 */
 
const state = {};

const controlSearch = async () => {
    
    // todo 1. Get query from the view
    
    const query = SearchViews.getInput();
    console.log(query);
    console.log(SearchViews.ID);
    
    if (query) {
        // todo 2. New Search Object and add to the State
        state.search = new Search(query);
        
        // todo 3. Prepare Ui for result
        SearchViews.clearInput();
        SearchViews.clearResult();
        renderLoader(elements.searchRes)
        
        
        // todo 4. Search for recipe
        await state.search.getResults();

        // todo 5. Render result on UI
        //* console.log(state.search.result)
        clearLoader();
        SearchViews.renderResults(state.search.result);
    }
    
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})


elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    // console.log(e.target);
    console.log(btn);
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        SearchViews.clearResult();
        SearchViews.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }

})

