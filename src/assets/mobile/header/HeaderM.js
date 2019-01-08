import React from 'react';
import Member from './inner/Member';
import './headerM.scss';

class HeaderM extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="header-m">
                <Member/>
            </div>
        )
    }
}


export default HeaderM;