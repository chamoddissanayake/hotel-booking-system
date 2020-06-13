import React, { Component } from 'react'
import axios from 'axios';

export default class selectedHotel extends Component {

    constructor(props) {
        super(props);

        // this.onChangeSearchKeyword = this.onChangeSearchKeyword.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            currentHotelId: '',
            currentHotelObj: {}
        }
    }

    componentDidMount() {

        console.log(this.props.match.params.hotelId);
        this.setState({
            currentHotelId: this.props.match.params.hotelId
        }, () => {

            axios.get('http://localhost:5000/hotels/' + this.state.currentHotelId)
                .then(response => {
                    if (response.data) {
                        // this.setState({
                        //     users: response.data.map(user => user.username),
                        //     username: response.data[0].username
                        // })
                        console.log(response.data)
                        var tempArr = response.data;

                        this.setState({
                            currentHotelObj: tempArr[0]
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                })


        });

    }

    render() {
        return (
            <div>
                Selected Hotel Component<br />
                {this.state.currentHotelObj.name} <br />
                {this.state.currentHotelObj._id}<br />
                {this.state.currentHotelObj.availableCount} <br />
                {this.state.currentHotelObj.description}<br />
                {this.state.currentHotelObj.imageURL_1}<br />
                {this.state.currentHotelObj.imageURL_2}<br />
                {this.state.currentHotelObj.imageURL_3}<br />
                {this.state.currentHotelObj.imageURL_main}<br />
                {this.state.currentHotelObj.location}<br />
                {this.state.currentHotelObj.price}<br />

                <ul>
                    {
                        this.state.currentHotelObj.facilities ? this.state.currentHotelObj.facilities.map((value, index) => <li key={index}>{value}</li>) : ''
                    }
                </ul>


            </div>
        )
    }
}
