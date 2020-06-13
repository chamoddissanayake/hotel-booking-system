import React, { Component } from 'react'
import Sizing from './../styles/sizeStyle.css'

export default class search extends Component {

    constructor(props) {
        super(props);

        this.onChangeSearchKeyword = this.onChangeSearchKeyword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            searchKeyword: '',
            resultList: []
        }
    }

    onChangeSearchKeyword(e) {
        this.setState({
            searchKeyword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        window.location = 'searchResults?location=' + this.state.searchKeyword;
    }

    render() {
        return (
            <div>
                <div>
                    Search
                </div>

                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label className="sizing" for="lblEnter">Enter location</label>
                        <input type="inputLocation" class="sizing form-control" id="inputLocation"
                            aria-describedby="inputLocation" placeholder="NuwaraEliya..." onChange={this.onChangeSearchKeyword} />
                    </div>
                    <button type="submit" class="sizing btn btn-primary ">Search</button>
                </form>


            </div>
        )
    }
}
