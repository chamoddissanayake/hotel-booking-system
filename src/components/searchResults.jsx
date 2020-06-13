import React, { Component } from 'react'
import axios from 'axios';
import PreviewHotel from './previewHotel.jsx';

export default class searchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: '',
            resultList: [],
            isloading: true
        }
    }

    componentDidMount() {
        this.setState({
            isloading: true
        });

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
                this.setState({
                    isloading: false
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    isloading: false
                });
            })


    }


    render() {
        return (
            <div>
                Search Results Components


                {(!this.state.isloading) ?
                    ((this.state.resultList.length > 0) ? <div>{this.state.resultList.length + " "} results found</div> : <div>Sorry! not found</div>)
                    : <div> Loading</div>
                }

                {this.state.resultList.map((hotel, index) => <PreviewHotel hotel={hotel} key={index} />)}

            </div>
        )
    }
}
