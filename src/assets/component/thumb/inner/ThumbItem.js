import React from 'react';
import {NavLink, Link, Route} from 'react-router-dom';

class ThumbItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        console.log(this.props);
        return(
            <div className="thumb__item">
                <NavLink to="/photo" className="thumb__item-link" onClick={this.props.selected}>
                    <div className="thumb__inner">
                        <img src={this.props.urls.small} alt="sd"/>
                        <div className="thumb__screen">
                            <div className="thumb__column thumb__top clearfix">
                                <button className="thumb__btn thumb__likes btn">
                                <span className="thumb__svg">
                                    <svg aria-hidden="true" data-prefix="far" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                                    </svg>
                                </span>
                                    {this.props.likes}
                                </button>
                                <button className="thumb__btn thumb__collect btn">
                                <span className="thumb__svg">
                                <svg aria-hidden="true" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </span>
                                    collect
                                </button>
                            </div>
                            <div className="thumb__column thumb__bottom clearfix">
                                <div className="thumb__box thumb__author">
                                    <img src={this.props.user.profile_image.small} alt={this.props.user.first_name} className="thumb__author__img"/>
                                    <span className="thumb__author-name">{this.props.user.first_name}</span>
                                </div>
                                <div className="thumb__box thumb__download">
                                    <svg aria-hidden="true" data-prefix="fas" data-icon="download" class="svg-inline--fa fa-download fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </NavLink>
            </div>
        )
    }
}


export default ThumbItem;