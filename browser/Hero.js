import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Hero extends Component{
    render(){
        return(
    <div>
        {/*<div className="overlay"></div>*/}
        
            <button type="button" className="btn btn-default herobtn"><Link to="/signup">Sign Up</Link></button>
         
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox ">
                <div className="item active">
                    <img className="hero" src="http://www.buffalobills.com/assets/img/wallpaper/night-field-bg-1920.jpg" />

                </div>
                <div className="item">
                    <img className="hero" src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1441225739/COLLEGEFOOTBALL0915-AnnArborMI.jpg?itok=NgrMJicA" />
                  
                </div>
                <div className="item">
                    <img className="hero" src="http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1441225739/COLLEGEFOOTBALL0915-TuscaloosaAL.jpg?itok=HTi3Xc3l" />
    
                </div>
            </div>
        </div>
    </div>
        )
    }
}


                    // <div className="carousel-caption">
                    //     <button type="button" className="btn btn-default"><a href="#">Sign Up</a></button>
                    // </div>