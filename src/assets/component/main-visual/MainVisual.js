import React from 'react';
import {Link,NavLink,Route,BrowserRouter} from 'react-router-dom';
import './mainvisual.scss';
import SearchBar from '../../tools/searchBar/SearchBar';

class MainVisual extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <div className="main-visual">
                <div className="main-visual__box">
                    <h1 className="main-visual__tit">
                        unsplash
                    </h1>
                    <p className="main-visual__txt1">
                        Beautiful, free photos.
                    </p>
                    <p className="main-visual__txt1">
                        Gifted by the world’s most generous community of photographers.
                        <span></span>
                    </p>
                    <div className="visual-search">
                        <SearchBar/>
                    </div>
                    <div className="search__related">
                        <span className="search__related__tit">Trending searches:</span>
                        <NavLink to="/search/photo/business" className="search__related__link">business</NavLink>,
                        <NavLink to="/search/photo/computer" className="search__related__link">computer</NavLink>,
                        <NavLink to="/search/photo/nature" className="search__related__link">nature</NavLink>,
                        <NavLink to="/search/photo/nature" className="search__related__link">love</NavLink>,
                        <NavLink to="/search/photo/nature" className="search__related__link">house</NavLink>
                    </div>
                </div>
                <div className="license">
                    <div className="license__left license__box">
                        <NavLink to="/photo/:photo" className="license__link">Photo of the Day</NavLink> by
                        <NavLink to="/photo/:search" className="license__link"> Andreas Next VoyagePL</NavLink>
                    </div>
                    <div className="license__center license__box">
                        <span >Read more about the </span>
                        <NavLink to="/photo/license" className="license__link">Unsplash License</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}


export default MainVisual;