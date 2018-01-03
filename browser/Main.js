import React, {Component} from 'react';
// import Link from 'react-router-dom';
import Nav from './Nav';
import Hero from './Hero';
import Profile from './Profile';
import Vids from './Vids';
import Footer from './Footer';

export default class Main extends Component{

    render(){
        return(
            <div>
                <Nav />
                <Hero />
                <Profile />
                <Vids />
                <Footer />
            </div>
        )
    }
}