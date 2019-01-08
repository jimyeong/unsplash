import React from 'react';

class IsSelectedItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="more__inner">
                <div className="more__column__thumb clearfix">
                    <div className="more__column__inner more__column__inner-left">
                        <div className="more__column__thumb">
                            <img src={this.props.user.profile_image.small} alt={this.props.user.first_name} className="thumb__author__img"/>
                            <span className="thumb__author-name">{this.props.user.first_name}</span>
                        </div>
                        <span className="more__column__desc">
                            <span className="more__column__tit">{this.props.user.first_name}</span>
                            <span className="more__column__tit">{this.props.user.first_name}</span>
                        </span>
                    </div>
                    <div className="more__column__inner more__column__inner-right">
                    </div>
                </div>
            </div>
        )
    }
}


export default IsSelectedItem;