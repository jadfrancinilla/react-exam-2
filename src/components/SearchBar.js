import React from 'react';

const COUNTRIES = [
    {value: '', display: 'Select a country', default: true},
    {value: 'au', display: 'Australia'}, 
    {value: 'ca', display: 'Canada'}, 
    {value: 'cn', display: 'China'},
    {value: 'de', display: 'Germany'},
    {value: 'fr', display: 'France'},
    {value: 'jp', display: 'Japan'},
    {value: 'nz', display: 'New Zealand'},
    {value: 'ph', display: 'Philippines'},
    {value: 'ru', display: 'Russia'},
    {value: 'us', display: 'United States'}
];
const NEWS_TYPE = [
    {
        value: 'top-headlines',
        display: 'Top Headlines'
    },
    {
        value: 'everything',
        display: 'Everything'
    }
];

class SearchBar extends React.Component{
    newsOptions = [];
    countryOptions = [];

    state = {
        country: '',
        newsType: 'top-headlines',
        term: ''
    }

    constructor(props){
        super(props);

        //Initialize option elements for country
        this.countryOptions = COUNTRIES.map(country => {
            return <option value={country.value} disabled={country.default} key={`country_${country.value}`}>{country.display}</option>
        });

        //Initialize option elements for news type
        this.newsOptions = NEWS_TYPE.map(newsType => {
            return <option value={newsType.value} key={`news_type_${newsType.value}`}>{newsType.display}</option>
        });
    }

    onSearch = (event) => {
        event.preventDefault();
        this.props.searchNews(this.state);
    }

    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.onSearch}>
                    <div className="field">
                        <div className="three fields">
                            <div className="four wide field">
                                <select  value={this.state.country} onChange={(event) => { this.setState({country: event.target.value}) }}>
                                    {this.countryOptions}
                                </select>
                            </div>
                            <div className="four wide field">
                                <select value={this.state.newsType} onChange={(event) => { this.setState({newsType: event.target.value}) }}>
                                    {this.newsOptions}
                                </select>
                            </div>
                            <div className="eight wide field ui icon input">
                                <input type="text" placeholder="Search article..." value={this.state.term} onChange={(event) => { this.setState({term: event.target.value}) }} /> 
                                <i className="search icon"></i>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;