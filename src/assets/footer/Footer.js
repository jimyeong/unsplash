import React from 'react';
import InnerFooter from './inner/InnerFooter';
import './footer.scss';

class Footer extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="footer">
                <div className="container">
                    <InnerFooter/>
                </div>
            </div>
        )
    }
}


export default Footer;