import React from 'react';
import './NewsItem.css'; 

class NewsItem extends React.Component {
    constructor(props){
        super(props);

        //Check if news actually has urlToImage.
        const hasImage = this.props.newsDetails.urlToImage !== '' && this.props.newsDetails.urlToImage !== null;

        this.state = {display: hasImage ? 'block' : 'none'};

        this.imageRef = React.createRef();
    }        

    componentDidMount(){
        //If news has urlToImage but failed to load for whatever reason, hide image block.
        this.imageRef.current.addEventListener('error', this.hideImage);
    }

    hideImage = () => {
        this.setState({display: 'none'});
    }

    render(){
        return (
            <div className="item news-item">
                <div className="ui image news-image" style={{"display": this.state.display}}>
                    <img ref={this.imageRef} src={this.props.newsDetails.urlToImage} alt="news"></img>
                </div>

                <div className="content news-content">
                    <div className="header"><a href={this.props.newsDetails.url} target="_blank" rel="noopener noreferrer">{this.props.newsDetails.title}</a></div>
                    <div className="description">
                        <p>{this.props.newsDetails.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;