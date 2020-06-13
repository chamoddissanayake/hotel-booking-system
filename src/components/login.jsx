import React, { Component } from 'react'
import axios from 'axios';

export default class login extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:5000/users/validateUser', user)
            .then(res => {
                console.log(res.data);
                console.log(res.data.username);

                if (res.data) {
                    // alert('user found');

                    localStorage.setItem("loggedInUser", res.data.username);
                    window.location.href = "/";

                } else {
                    alert('user not found ');
                }
            }).catch(error => {
                alert('System Error occured');
            });

    }

    render() {
        return (
            <div>
                <h2>
                    <center>Login</center>
                </h2>

                <form onSubmit={this.onSubmit}>

                    <div class="form-group">
                        <label for="inputUsername">Username: </label>
                        <input class="form-control" type="text" required onChange={this.onChangeUsername} />
                    </div>

                    <div class="form-group">
                        <label for="inputPassword">Password</label>
                        <input type="password" class="form-control" id="inputPassword" required onChange={this.onChangePassword} />
                    </div>

                    <button type="submit" class="btn btn-primary">Login</button>

                </form>

            </div>
        )
    }
}
