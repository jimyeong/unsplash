import React, { Component } from 'react';
import Header from './assets/header/Header';
import MainHeader from './assets/header/inner/Mainheader';
import HeaderM from './assets/mobile/header/HeaderM';
import Nav from './assets/mobile/header/inner/Nav';
import Home from './assets/page/Home';
import Thumb from './assets/component/thumb/Thumb';
import IsSelected from './assets/is-selected/IsSelected';
import Footer from './assets/footer/Footer';

import {Link,NavLink,Route,BrowserRouter} from 'react-router-dom';

const API ="https://api.unsplash.com/photos/?client_id=";
const ACCESS_KEY = '57efe3990235cfb37315596fa4d1de1c32173100d16f3642df68a54b03d1ff0a';






class App extends Component {

    state ={
        selected: false
    };
    componentDidMount() {
        this._getArray();
    }

    componentWillMount() {

    }
    _callApi = () =>{
        return fetch(API+ACCESS_KEY)
            .then(res => res.json())
            .catch(err => {
                console.log(err)
            })
    };
    _getArray = async () =>{
        const Movies = await this._callApi();
        this.setState({
            movies : Movies
        });
    };
    _showSelected = (e) => {
        e.preventDefault();
        console.log('hi it work');
        this.setState({
            selected : !this.state.selected
        })
    };
    render() {
        const {selected} = this.state ;
    return (
      <div className={`App ${selected ? 'is-selected' : '' }`}>
          <Nav/>
        <div className="main">
          <div className="header-wrap">
            <Header/>
            <HeaderM/>
            <MainHeader/>
          </div>
            <Route exact path="/" render ={()=><Home photo={this.state.movies}/>}/>
            <Route exact path="/" render={()=><Thumb photos={this.state.movies} selected={this._showSelected.bind(this)}/>}/>
            <Route exact path="/" render={() =><IsSelected datas={this.state.movies}/> }/>
        </div>
          <Footer/>

      </div>
    );
  }
}

export default App;
