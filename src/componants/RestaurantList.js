import React, { Component } from 'react';
import { Table } from 'react-bootstrap'

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:3000/restaurant').then((response) => {
            response.json().then((result) => {
                // console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Restaurant list</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait</p>
                }
            </div>
        );
    }
}

export default RestaurantList;