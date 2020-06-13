import React, { Component } from 'react'
import axios from 'axios';
import sizing from './../styles/sizeStyle.css'
import regStyle from './../styles/registerStyle.css'

export default class register extends Component {


    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.onMaleChecked = this.onMaleChecked.bind(this);
        this.onFemaleChecked = this.onFemaleChecked.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            email: '',
            address: '',
            gender: 'M',
            password: '',
            repassword: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password !== this.state.repassword) {
            alert('Passwords are not equal');
        } else {

            const user = {
                username: this.state.username,
                email: this.state.email,
                address: this.state.address,
                gender: this.state.gender,
                password: this.state.password,
            }

            axios.post('http://localhost:5000/users/', user)
                .then(res => {
                    if (res.data) {
                        alert('Registered Successfully and now login');
                        window.location.href = "/login";
                    } else {
                        alert('Error occured ');
                    }
                }).catch(error => {
                    alert('System Error occured');
                });
        }
        console.log(this.state);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }


    onChangeRePassword(e) {
        this.setState({
            repassword: e.target.value
        })
    }

    onMaleChecked(e) {
        this.setState({
            gender: 'M'
        })
    }
    onFemaleChecked(e) {
        this.setState({
            gender: 'F'
        })
    }


    render() {
        return (
            <div>
                <h2>
                    <center>Register new User</center>
                </h2>

                <form onSubmit={this.onSubmit}>

                    <div class="sizing form-group">
                        <label className="sizing" for="inputUsername">Username: </label>
                        <input className="sizing form-control" type="text" required onChange={this.onChangeUsername} />
                    </div>

                    <div class="sizing form-group">
                        <label className="sizing" for="inputEmail">Email address: </label>
                        <input type="email" className="sizing form-control" id="inputEmail" aria-describedby="emailHelp" required onChange={this.onChangeEmail} />
                    </div>

                    <div class="sizing form-group">
                        <label className="sizing" for="inputAddress">Address: </label>
                        <input className="sizing form-control" type="text" required onChange={this.onChangeAddress} />
                    </div>


                    <div className="sizing radiostyle form-check">
                        <label className="sizing" for="inputGender">Gender: </label>
                        <div>
                            <input className="sizing form-check-input" type="radio" name="genderRadios" id="genderRadioM" checked onChange={this.onMaleChecked} />
                            <label className="radiostyle form-check-label" for="genderRadiosM"> Male </label>
                        </div>
                        <div>
                            <input className="sizing form-check-input" type="radio" name="genderRadios" id="genderRadiosF" onChange={this.onFemaleChecked} />
                            <label className="radiostyle sizing form-check-label" for="genderRadiosM"> Female </label>
                        </div>

                    </div>


                    <div class="sizing form-group">
                        <label className="sizing" for="inputPassword">Password</label>
                        <input type="password" class="sizing form-control" id="inputPassword" required onChange={this.onChangePassword} />
                    </div>

                    <div class="form-group">
                        <label className="sizing" for="inputRePassword">Re Enter Password</label>
                        <input type="password" class="sizing form-control" id="inputRePassword" required onChange={this.onChangeRePassword} />
                    </div>

                    <div class="sizing  form-check">
                        <input type="checkbox" class="sizing form-check-input" id="agree" required />
                        <label class="sizing radiostyle form-check-label" for="agree">Agree terms and conditions</label>
                    </div>
                    <button type="submit" class="sizing btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}
