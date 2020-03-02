import React, { Component } from 'react';

export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: <event className="target value"></event>
        });
    }

    handleSubmit(event) {
        console.log("event", event);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1></h1>
                <form onSubmit={this.handleSubmi}>
                    <div>
                        <input
                            type="text"
                            name="url"
                            placeholder="portfolio Item Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={this.state.position}
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}