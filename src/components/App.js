import React from 'react';
import SearchBar from './SearchBar';
import NewsApi from '../api/newsApi';
import ResultStats from './ResultStats';
import NewsList from './NewsList';
import Spinner from './Spinner';

class App extends React.Component {
    state = {news: [], isLoading: false};

    searchNews = async (query) => {
        this.setState({isLoading: true});

        const params = {
            q: query.term
        };

        //newsType === 'Everything' does not support the 'country' param.
        if(query.newsType === 'top-headlines' && query.country !== ''){
            params.country = query.country;
        }

        const result = await NewsApi.get(`${query.newsType}`, {
            params
        });

        this.setState({news: result.data.articles, isLoading: false});
    }
    
    renderSpinner(){
        if(this.state.isLoading){
            return (
                <div>
                    <Spinner />
                </div>
            );
        }
        
        return;
    }

    render(){
        return(
            <div className="ui container">
                {this.renderSpinner()}
                <div className="ui basic segment">
                    <h2 className="ui center aligned header">Jim Adrian Francinilla News App</h2>
                </div>
                <SearchBar searchNews={this.searchNews} />
                <ResultStats resultCount={this.state.news.length} />
                <NewsList newsItems={this.state.news} />
            </div>
        );
    }
}

export default App;