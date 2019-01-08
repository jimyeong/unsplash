import React from 'react';
import {NavLink,Link , Route} from 'react-router-dom';

class InnerFooter extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="footer__inner">
                Download free(<NavLink className="footer__link" to="/about">do whatever you want</NavLink>)
                high-resolution photos.
                <NavLink className="footer__link" to="/about">Learn more</NavLink>
            </div>
        )
    }
}


export default InnerFooter;