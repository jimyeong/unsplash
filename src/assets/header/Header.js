import React from 'react';
import Topheader from './inner/Topheader';
import './header.css';

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return(
            <header className="header">
                <Topheader/>
            </header>
        )
    }
}


export default Header;