import React from 'react';
import {Link,NavLink,Route,BrowserRouter} from 'react-router-dom';

class Mainheader extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <div className="main-header">
                <div className="nav-bar__item nav-bar__item--unique">
                    <NavLink exact to="/" activeClassName="is-active" className="nav-bar__link">Editorial</NavLink>
                </div>
                <ul className="nav-bar clearfix">
                    <li className="nav-bar__item">
                        <NavLink to="/wallpapaer" activeClassName="is-active" className="nav-bar__link">Wallpapers</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/texture-pattern" activeClassName="is-active" className="nav-bar__link">Textures & Patterns</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/nature" activeClassName="is-active" className="nav-bar__link">Nature</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/current-events" activeClassName="is-active" className="nav-bar__link">Current Events</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/architecture" activeClassName="is-active" className="nav-bar__link">Architecture</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/business-work" activeClassName="is-active" className="nav-bar__link">Business & Work</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/animals" activeClassName="is-active" className="nav-bar__link">Animals</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/travel" activeClassName="is-active" className="nav-bar__link">Travel</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/fashion" activeClassName="is-active" className="nav-bar__link">Fashion</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/food-drink" activeClassName="is-active" className="nav-bar__link">Food & Drink</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/spirituality" activeClassName="is-active" className="nav-bar__link">Spirituality</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/experimental" activeClassName="is-active" className="nav-bar__link">Experimental</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/people" activeClassName="is-active" className="nav-bar__link">People</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/health" activeClassName="is-active" className="nav-bar__link">Health</NavLink>
                    </li>
                    <li className="nav-bar__item">
                        <NavLink to="/arts-culture" activeClassName="is-active" className="nav-bar__link">Arts & Culture</NavLink>
                    </li>
                </ul>
            </div>
    )
    }
}


export default Mainheader;