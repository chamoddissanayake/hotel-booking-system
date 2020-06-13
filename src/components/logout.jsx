import React, { Component } from 'react'

export default class logout extends Component {

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
        localStorage.removeItem("loggedInUser");
        window.location.href = "/";
    }

    render() {
        return (
            <div>
                Logging out. Please wait ....
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}
