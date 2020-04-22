import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Welcome to the Archer Memory Game</h1>
                        <p className="lead">The object of this mission is a simple one, the board below will present you with 12 characters, your objective is to click on each character only once. For each new character you click you will earn a point, but if you click on the same character twice you will lose.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
