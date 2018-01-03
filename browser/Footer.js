import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer className="container-fluid text-center">
                <div className="row">
                <div className="col-sm-12" id="contact">
                    <h3>Contact / Connect</h3>
                    <a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook"></a>
                    <a href="https://github.com/" target="_blank" className="fa fa-github"></a>
                    <a href="https://www.linkedin.com/" target="_blank" className="fa fa-linkedin"></a>
                    <a href="https://www.google.com/" target="_blank" className="fa fa-google"></a>
                    <a href="https://www.youtube.com/" target="_blank" className="fa fa-youtube"></a>
                    <a href="https://twitter.com/" target="_blank" className="fa fa-twitter"></a>
                </div>
                </div>
            </footer>            
        )
    }
}