import React, { Component } from 'react'
import Card from './card'

export class Board extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Card />
                        </div>
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-3">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Board
