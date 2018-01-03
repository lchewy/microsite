import React, {Component} from 'react';
// import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default class Nav extends Component{
    render(){
        return(
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand " to="/" className="brand"><img src="../public/game.png"/> Football & Stuff</Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                <li><Link to="/#profile">Profile</Link></li>
                <li><Link to="/#vids">Videos</Link></li>
                {/*<li><a href="#contact">Contact</a></li>*/}
                <li><Link to='/signup' >Sign Up</Link></li>
                </ul>
            </div>
            </div>
        </nav>
        )
    }
}


             