import React, { Component } from 'react'
import axios from 'axios';
import PreviewHotel from './previewHotel.jsx';

export default class searchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: '',
            resultList: []
        }
    }

    componentDidMount() {

        // console.log(new URLSearchParams(this.props.location.search).get("location"));
        let url = 'http://localhost:5000/hotels';
        let loc = new URLSearchParams(this.props.location.search).get("location");
        if (loc) {
            url = url + '?location=' + loc;
        }
        axios.get(url)
            .then(resultList => {
                this.setState({ resultList: resultList.data })
                // console.log("In search result component--");
                // console.log(this.state.resultList);
                // console.log("In search result component-=-");
            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <div>
                Search Results Components

                {this.state.resultList.map((hotel, index) => <PreviewHotel hotel={hotel} key={index} />)}

            </div>
        )
    }
}
