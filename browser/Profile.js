import React, {Component} from 'react';

export default class Profile extends Component{
    render(){
        return(
            <div className="container profile" id="profile"> 
                <div className="row">
                    <div className="col-md-6">
                        <h4>Our Profile...</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat velit scelerisque in dictum non consectetur. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. In est ante in nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Orci porta non pulvinar neque laoreet suspendisse interdum. Tortor dignissim convallis aenean et tortor at. Nulla porttitor massa id neque aliquam vestibulum morbi. Elementum tempus egestas sed sed. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sed sed risus pretium quam vulputate dignissim suspendisse in est. Eu nisl nunc mi ipsum faucibus vitae aliquet.</p>
                        <p>Faucibus et molestie ac feugiat sed lectus vestibulum. Posuere ac ut consequat semper viverra nam libero justo laoreet. Mauris vitae ultricies leo integer. Sit amet purus gravida quis blandit. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Neque vitae tempus quam pellentesque nec. In dictum non consectetur a erat nam. Adipiscing tristique risus nec feugiat in fermentum posuere. Augue interdum velit euismod in pellentesque. Libero nunc consequat interdum varius sit amet mattis vulputate. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Tellus orci ac auctor augue mauris augue neque.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://www.protuffdecals.com/images/productimages/2015111285755230navy-football-helmet.png" className="img-responsive"  />
                    </div>
                </div>
            </div>
        )
    }
}