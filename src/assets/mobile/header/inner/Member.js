import React from 'react';
import {Link,NavLink,Route,BrowserRouter} from 'react-router-dom';
class Member extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="member">
                <form action="/login/member.php" method="POST">
                    <div className="member__box">
                        <button className="member__btn member__btn--white btn">Login</button>
                    </div>
                </form>
                <form action="/login/join.php" method="POST">
                    <div className="member__box">
                        <button className="member__btn member__btn--green btn">Join free</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Member;