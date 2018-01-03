import React, {Component} from 'react';
import Nav from './Nav';


export default class Form extends Component{

    constructor(){
        super();
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            zip: 0,
            st: 'AL',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        })

    }

    handleBlur(evt){
        if(evt.target.name === 'firstName' && /^[A-Za-z]+$/.test(evt.target.value)){
            this.setState({firstName: evt.target.value});
        }
        else if(evt.target.name === 'lastName' && /^[A-Za-z'\-]+$/.test(evt.target.value)){
            this.setState({lastName: evt.target.value});
        }
        else if(evt.target.name === 'email' && /\S+@\S+\.\S+/.test(evt.target.value)){
            this.setState({email: evt.target.value});
        }
        else if(evt.target.name === 'zip' && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(evt.target.value)){
            this.setState({zip: evt.target.value});
        }
        else if(evt.target.value === ''){
            console.log('enter something');
        }
        else{
            alert(evt.target.name+'\'s input is incorrect');
        }
    }

    handleSubmit(evt){
        evt.preventDefault();
    }

    render(){
        // console.log('firstname ', this.state.firstName, 'lastName ', this.state.lastName, 'email ', this.state.email, 'zip ', this.state.zip, 'state ', this.state.st)
        return(
            <div>
            <Nav/>
            <br/>
            <br/>
            <br/>
            <br/>
            <form>
                <br/>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onBlur={this.handleBlur} size="11" onBlur={this.handleBlur} required/>
                </div>
                <br/>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onBlur={this.handleBlur} size="11" required/>
                </div>
                <br/>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" onBlur={this.handleBlur} size="35" required/>
                </div>
                <br/>
                <div>
                    <label>Zip Code: </label>
                    <input type="number" name="zip" onBlur={this.handleBlur} size="5" required/>
                </div>
                <br/>
                <label>State: </label>
                <select name="st" value={this.state.st} onChange={this.handleChange}>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>				

            </form>
            </div>
        )
    }
}