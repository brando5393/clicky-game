import React, { Component } from 'react'

export class Scorebar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Archer Memory Game</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> More
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li><img src="../public/images/logo.png" alt="archer logo" className="logo-image" /></li>
                            <ii>Score: {} | Top Score: {}</ii>
                        </ul>
                    </div>
                </nav>
            </div>
                
        )
   }
}

export default Scorebar
