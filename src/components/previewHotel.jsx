import React, { Component } from 'react'

export default class extends Component {

    constructor(props) {

        super(props);

        this.state = {
            currentHotel: {}
        }
    }

    componentDidMount() {

        // console.log(this.props.hotel);
        this.setState({
            currentHotel: this.props.hotel
        }, () => {
            console.log(this.state.currentHotel);
        });


    }

    render() {

        return (
            <div>

                {this.state.currentHotel._id}                   <br />
                {this.state.currentHotel.availableCount}        <br />
                {this.state.currentHotel.description}           <br />
                {this.state.currentHotel.imageURL_1}            <br />
                {this.state.currentHotel.imageURL_2}            <br />
                {this.state.currentHotel.imageURL_3}            <br />
                {this.state.currentHotel.imageURL_main}         <br />
                {this.state.currentHotel.location}              <br />
                {this.state.currentHotel.name}                  <br />
                {this.state.currentHotel.price}                 <br />
                {this.state.currentHotel.rating}                <br />
                <ul>
                    {
                        this.state.currentHotel.facilities ? this.state.currentHotel.facilities.map((value, index) => <li key={index}>{value}</li>) : ''
                    }
                </ul>                                <br />

            </div>
        )
    }
}