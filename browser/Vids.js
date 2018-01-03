import React, {Component} from 'react';

export default class Vids extends Component{
    render(){
        return(
            <div className="container text-center" id="vids"> 
                <h2>Videos</h2>
                <div className="row">
                <div className="col-sm-6">
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/Dc92PqvRtu8" frameBorder="0" allowFullScreen></iframe>
                </div>
                
                <div className="col-sm-6">
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/ijLj-A4TdGY" frameBorder="0" allowFullScreen></iframe>
                </div>    
                
                <div className="col-sm-6">
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/b_RtkI6EUvY" frameBorder="0" allowFullScreen></iframe>
                </div>
                
                <div className="col-sm-6">
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/TTq01Q-zAQM" frameBorder="0" allowFullScreen></iframe>
                </div>
                    
                </div>
            </div>
        )
    }
}