import React, { Component } from 'react'
import axios from 'axios';
import Styles from './../styles/selectedHotel.css'

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

                {/* //Slider - start */}
                <div class="container" style={sliderContainerStyle}>

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






                {this.state.currentHotelObj._id}<br />
                {this.state.currentHotelObj.availableCount} <br />
                {this.state.currentHotelObj.description}<br />
                {/* {this.state.currentHotelObj.imageURL_1}<br />
                {this.state.currentHotelObj.imageURL_2}<br />
                {this.state.currentHotelObj.imageURL_3}<br />
                {this.state.currentHotelObj.imageURL_main}<br /> */}
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
