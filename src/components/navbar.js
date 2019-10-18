import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);

        return (
            <div className="login-register-container">
                <header className="navbar App-header" id="nav-container">                    
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">Logout</span></Link>
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Home</span>
                                    </Link>
                                    <Link to="/WeddingCheckList" className="btn btn-link">
                                        <span className="text-secondary">Wedding CheckList</span>
                                    </Link>
                                    <Link to="/guestlist" className="btn btn-link">
                                        <span className="text-secondary">Guest List</span>
                                    </Link>
                                    <Link to="/budget" className="btn btn-link">
                                        <span className="text-secondary">Budget</span>
                                    </Link>
                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Home</span>
                                    </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                        <span className="text-secondary">Login</span>
                                    </Link>
                                    <Link to="/signup" className="btn btn-link">
                                        <span className="text-secondary">Sign Up</span>
                                    </Link>
                                    
                                </section>
                            )}                    
                </header>
            </div>

        );

    }
}

export default Navbar