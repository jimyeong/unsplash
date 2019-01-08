import React from 'react';
import MainVisual from '../component/main-visual/MainVisual';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="pg__wrapper home">
                <MainVisual photo={this.props.photo}/>
            </div>
        )
    }
}


export default Home;