// export const Add = (a,b) => a + b;
// export const Multiply = (a,b) => a * b;
// export const Divide = (a,b) => a / b;
// export const Substract = (a,b) => a - b;

/**
 * 1:
f2f_url: "http://food2fork.com/view/46956"
image_url: "http://static.food2fork.com/fruitpizza9a19.jpg"
publisher: "The Pioneer Woman"
publisher_url: "http://thepioneerwoman.com"
recipe_id: "46956"
social_rank: 100
source_url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/"
title: "Deep Dish Fruit Pizza"
 */
import { elements } from './base'
export const ID = 23;


export const getInput = () => elements.inputSearch.value;

export const clearInput = () => elements.inputSearch.value = '';

export const clearResult = () => {
    elements.searchResultList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}
const limitRecipeTitle = (title, limit = 17) =>  {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if( acc + cur.length <= limit){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0)
        return `${newTitle.join(' ')} ...`;
    } 
    return title;
}

export const renderRecipe = recipe => {
    const markup = `<li>
                        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                            <figure class="results__fig">
                                <img src="${recipe.image_url}" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                                <p class="results__author">${recipe.publisher}</p>
                            </div>
                        </a>
                    </li>`;
    elements.searchResultList.insertAdjacentHTML( 'beforeend', markup )
}

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto="${type === 'prev' ? page - 1 : page + 1}">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>`


const renderButtons =  (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if(page === 1 && pages > 1){
        //Only button to go next page
        button = createButton(page, 'next')
    } else if (page < pages) {
        // only button to go previous page
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}`
    }else if (page === pages && pages > 1) {
        // two buttons one to go next one to go previous page
        button = createButton(page, 'prev')
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button)
}  

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render results of currente page
    const start = resPerPage * (page - 1);
    const end = (resPerPage * page) - 1;
    recipes.slice(start, end).forEach(renderRecipe);
    // render pagination
    renderButtons(page, recipes.length, resPerPage)
}

