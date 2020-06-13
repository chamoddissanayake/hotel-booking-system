import React, { Component } from 'react'
import Styles from "./../styles/previewHotelsStyle.css"

export default class extends Component {

    constructor(props) {

        super(props);

        this.state = {
            currentHotel: {},
            next: '>>>'
        }
        this.selectHotel = this.selectHotel.bind(this);
    }

    componentDidMount() {

        // console.log(this.props.hotel);
        this.setState({
            currentHotel: this.props.hotel
        }, () => {
            console.log(this.state.currentHotel);
        });

    }
    selectHotel(e) {
        console.log(this.state.currentHotel._id);
        window.location = '/select/' + this.state.currentHotel._id
    }

    render() {

        return (
            <div>
                <div className="previewItemContainer">


                    <table>
                        <tr>
                            <td className="sizing tdleft">
                                {/* Left side start */}
                                <img src={this.state.currentHotel.imageURL_main} alt="Image Not Found" width="300" />
                                {/* Left side end */}
                            </td>
                            <td className="sizing tdcenter">
                                {/* Right  side start */}
                                <tr>
                                    <div className="sizing lblName">
                                        {this.state.currentHotel.name}
                                    </div>
                                </tr>
                                <tr>
                                    <div className="sizing lblLocation">
                                        Location: {this.state.currentHotel.location}
                                    </div>
                                </tr>
                                <tr>
                                    <div className="sizing lblPrice">
                                        Price Per Room: {this.state.currentHotel.price}
                                    </div>
                                </tr>
                                <tr>
                                    <div className="sizing lblRating">
                                        Rating: {this.state.currentHotel.rating}
                                    </div>
                                </tr>
                                <tr>
                                    <div className="sizing lblcount">
                                        Available Room Count: {this.state.currentHotel.availableCount}
                                    </div>
                                </tr>
                                <tr>
                                    <div className="sizing lblDescription">
                                        Description: {this.state.currentHotel.description}
                                    </div>
                                </tr>
                                <tr>
                                    <div className="sizing lblFacilities">
                                        Facilities:<br />
                                        <ul>
                                            {
                                                this.state.currentHotel.facilities ? this.state.currentHotel.facilities.map((value, index) => <li key={index}>{value}</li>) : ''
                                            }
                                        </ul>
                                    </div>
                                </tr>

                                {/* Right side end */}
                            </td>
                            <td className="tdright">
                                <button class="sizing btn btn-primary" onClick={this.selectHotel}>  View This Hotel{this.state.next}</button>
                            </td>
                        </tr>
                    </table>

                    {/* {this.state.currentHotel._id}                   <br /> */}
                    {/* {this.state.currentHotel.availableCount}        <br /> */}
                    {/* {this.state.currentHotel.description}           <br /> */}
                    {/* {this.state.currentHotel.imageURL_1}            <br />
                    {this.state.currentHotel.imageURL_2}            <br />
                    {this.state.currentHotel.imageURL_3}            <br />
                    {this.state.currentHotel.imageURL_main}         <br /> */}
                    {/* {this.state.currentHotel.location}              <br /> */}
                    {/* <br /> */}
                    {/* {this.state.currentHotel.price}                 <br /> */}
                    {/* {this.state.currentHotel.rating}                <br /> */}
                    {/* <ul>
                        {
                            this.state.currentHotel.facilities ? this.state.currentHotel.facilities.map((value, index) => <li key={index}>{value}</li>) : ''
                        }
                    </ul>                                <br /> */}


                </div>
                <br />
            </div>
        )
    }
}
