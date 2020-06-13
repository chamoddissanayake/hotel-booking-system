import React, { Component } from 'react'

export default class utils extends Component {

    static isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
