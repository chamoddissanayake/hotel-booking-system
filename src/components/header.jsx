import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import utils from './../utils';
import sizing from './../styles/sizeStyle.css'


export default class header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: ''
        }
    }


    componentDidMount() {
        var temploggedInUser = localStorage.getItem("loggedInUser");
        if (temploggedInUser !== null) {
            this.setState({
                loggedInUser: temploggedInUser
            });
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="largeCompanyHeading navbar-brand" href="/">Booking.com</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        </ul>

                        <Link to="/register">
                            <button type="button" className="sizing btn btn-warning">SignUp</button>
                        </Link>
                        {utils.isEmpty(this.state.loggedInUser) && <span>
                            <Link to="/login">
                                <button type="button" className="sizing btn btn-info">Login</button>
                            </Link>
                        </span>}
                        {!utils.isEmpty(this.state.loggedInUser) && <span>
                            <Link to="/logout">
                                <button type="button" className="sizing btn btn-danger">Logout</button>
                            </Link>
                        </span>}
                    </div>
                </nav>
                <div>
                    {!utils.isEmpty(this.state.loggedInUser) && <span>
                        Hi, {this.state.loggedInUser}
                    </span>}
                </div>
            </div>
        )
    }
}
