import React from 'react';
import IsSelectedItem from './inner/IsSelectedItem';
import './isSelected.scss';
import _ from 'lodash';

class IsSelected extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    _renderData = () => {
        const renderData = _.map(this.props.datas,(data, i) => {
            return  <IsSelectedItem {...data} key={i}/>
        });
        return renderData
    };

    render(){
        return(
            <div className="more">
                <div className="screen">screen</div>
                <div className="more__panel">
                    <div className="container">
                        {this._renderData()}
                    </div>
                </div>
            </div>
        )
    }
}


export default IsSelected;