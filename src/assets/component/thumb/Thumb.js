import React from 'react';
import ThumbItem from './inner/ThumbItem';
import _ from 'lodash';
import Masonry from 'react-masonry-component';


import './thumb.scss';

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' };

class Thumb extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    _renderPics = () =>{
        const thumbItem = _.map(this.props.photos,(photo, i) =>{
            return <ThumbItem {...photo} key={i} selected={this.props.selected}/>
        });
        return thumbItem
    };

    render(){
        return(
            <div className="thumb">
                <Masonry
                    className={'thumb__list'}
                    options={masonryOptions}
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {this._renderPics()}
                </Masonry>
            </div>
        )
    }
}


export default Thumb;