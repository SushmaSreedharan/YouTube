import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY ='AIzaSyDFJTiO3naCIOz5Af3LGsQtsCI5Dfyt8qo';

YTSearch(
    {key:API_KEY, term:'surfboards'}, function(data){
        console.log(data);
    }
    )

const App = function(){
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));