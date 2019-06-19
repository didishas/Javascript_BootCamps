import axios from 'axios';

export default class Search {

    constructor(query) {
        this.query = query;        
    }

    async getResults() {
        console.log('Starting');
        
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const apiKey = 'da30482b2b44851038c25d64c6b944cc';
        const URL = `${proxy}https://www.food2fork.com/api/search?key=${apiKey}&q=${this.query}`;
        try {
            const res = await axios(`${URL}`);
            this.result = res.data.recipes;
            console.log(res);
        } catch (error) {
            alert(error)
        }
        
    }
}