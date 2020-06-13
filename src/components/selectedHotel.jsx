import React, { Component } from 'react'
import axios from 'axios';
import Styles from './../styles/selectedHotel.css'
import Sizing from './../styles/sizeStyle.css'
import priceCalc from '../util'

export default class selectedHotel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentHotelId: '',
            currentHotelObj: {},
            temp: '>>>'
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
        const sliderImagestyle = {
            height: "300px",

        };


        const sliderCaroselStyle = {
            width: "100%"
        };

        const sliderContainerStyle = {
            width: "100%"
        };
        return (
            <div>
                <div class="hotelNameDiv">
                    {this.state.currentHotelObj.name}
                </div>
                <br />

                <table>
                    <tr>
                        <td className="tleft">
                            {/* Left side start */}
                            {/* //Slider - start */}
                            <div style={sliderContainerStyle}>

                                <div id="myCarousel" class="carousel slide" data-ride="carousel" style={sliderCaroselStyle} >

                                    <ol class="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                        <li data-target="#myCarousel" data-slide-to="3"></li>
                                    </ol>


                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <img src={this.state.currentHotelObj.imageURL_main} alt="Image Not Found" style={sliderImagestyle} />
                                        </div>

                                        <div class="item">
                                            <img src={this.state.currentHotelObj.imageURL_1} alt="Image Not Found" style={sliderImagestyle} />
                                        </div>

                                        <div class="item">
                                            <img src={this.state.currentHotelObj.imageURL_2} alt="Image Not Found" style={sliderImagestyle} />
                                        </div>

                                        <div class="item">
                                            <img src={this.state.currentHotelObj.imageURL_3} alt="Image Not Found" style={sliderImagestyle} />
                                        </div>
                                    </div>

                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            {/* Slider - End */}
                            {/* Left side end */}
                        </td>
                        <td className="tright">
                            {/* Right side start */}
                            <tr>
                                <div className="sizing">
                                    Location:{' ' + this.state.currentHotelObj.location}
                                </div>
                            </tr>
                            <tr>
                                <div className="sizing">
                                    Price Per Room:{' ' + this.state.currentHotelObj.price}
                                </div>
                            </tr>
                            <tr>
                                <div className="sizing">
                                    Special Discounted Price Per Room:{' ' + priceCalc(this.state.currentHotelObj.price)}
                                </div>
                            </tr>
                            <tr>
                                <div className="sizing">
                                    Rating:{' ' + this.state.currentHotelObj.rating}
                                </div>
                            </tr>
                            <tr>
                                <div className="sizing">
                                    Available Room Count:{' ' + this.state.currentHotelObj.availableCount}
                                </div>
                            </tr>
                            <tr>
                                <div className="sizing">
                                    Description:{' ' + this.state.currentHotelObj.description}
                                </div>
                            </tr>
                            <tr>
                                <div className="sizing">
                                    Facilities:<br />
                                    <ul>
                                        {
                                            this.state.currentHotelObj.facilities ? this.state.currentHotelObj.facilities.map((value, index) => <li key={index}>{value}</li>) : ''
                                        }
                                    </ul>
                                </div>
                            </tr>
                            <tr>
                                <div className="sizing">
                                    <button type="button" class=" sizing btn btn-primary">Reserve {this.state.temp}</button>
                                </div>
                            </tr>
                            {/* Right side end */}
                        </td>
                    </tr>
                    <tr>
                    </tr>
                </table>

            </div>
        )
    }
}
