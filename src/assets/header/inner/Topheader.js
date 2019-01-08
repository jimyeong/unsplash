import React from 'react';
import {Link,NavLink,Route,BrowserRouter} from 'react-router-dom';
import Logo1 from '../../img/logo1';

class Topheader extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isToggleOn:false
        }
    }
    handleClick = () =>{
        this.setState({
            isToggleOn:!this.state.isToggleOn
        })
    };
    toggleNav(){
            return(
                <ul className="header__link-list">
                    <li className="header__link-item">
                        <NavLink to="/about" className="header__inner-btn">About</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/wall-paper" className="header__inner-btn">Wall paper</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/community" className="header__inner-btn">Community</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/store" className="header__inner-btn">Store</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/history" className="header__inner-btn">History</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/about" className="header__inner-btn">About</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/made-with-unsplash" className="header__inner-btn">Made with unsplash</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/tag-photo" className="header__inner-btn">Tag photo</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/api-develop" className="header__inner-btn">Api developer</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/hiring" className="header__inner-btn">Hiring</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/license" className="header__inner-btn">License</NavLink>
                    </li>
                    <li className="header__link-item">
                        <NavLink to="/help" className="header__inner-btn">Help</NavLink>
                    </li>
                    <li className="header__link-item header__sns-link">
                        <a href="https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral" className="header__sns-item">
                            <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </a>
                        <a href="https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral" className="header__sns-item">
                            <svg aria-hidden="true" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>
                        </a>
                        <a href="https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral" className="header__sns-item">
                            <svg aria-hidden="true" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                        </a>
                        <a href="https://twitter.com/unsplash?utm_source=unsplash&utm_medium=referral" className="header__sns-item">
                            <svg aria-hidden="true" data-prefix="fab" data-icon="snapchat-square" className="svg-inline--fa fa-snapchat-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6.5 314.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C159.1 100 206.7 96 220.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"></path></svg>
                        </a>
                    </li>
                </ul>
            )

    }

    render(){
        return(
            <div className="top-header">
                <div className="top-header--left">
                    <h1 className="logo">
                        <NavLink to="/" className="logo__link">
                            <img src={Logo1} alt="logo"/>
                            <p className="logo__tit">
                                <span className="logo__tit--bold">unsplash</span>
                                <span className="logo__tit--light">Photo for every one</span>
                            </p>
                        </NavLink>
                    </h1>
                    <div className="header__search">
                            <span className="header__icon icon-find">
                                <svg aria-hidden="true" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                            </span>
                        <input type="text" className="header__input" placeholder="Search free high resolution photos"/>
                    </div>
                </div>
                <nav className="nav top-header--right">
                    <ul className="nav__list clearfix">
                        <li className="nav__item"><NavLink to="/collections" className="nav__link">collections</NavLink></li>
                        <li className="nav__item"><NavLink to="/explores" className="nav__link">explores</NavLink></li>
                    </ul>
                    <div className="header__box type-unique">
                                <span className="header__icon icon-ellipsis" onClick={this.handleClick}>
                                    <svg aria-hidden="true" data-prefix="fas" data-icon="ellipsis-h" className="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                                </span>
                        {this.state.isToggleOn && this.toggleNav()}
                    </div>
                    <NavLink to="/explores" className="nav__link nav__link--border">Submit photo</NavLink>
                    <div className="header__member">
                        <NavLink to="/login" className="nav__link">Login</NavLink>
                        <NavLink to="/join" className="nav__link nav__link--green">Join free</NavLink>
                    </div>
                </nav>
            </div>
        )
    }
} 


export default Topheader;