import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';


class Home extends Component {


    render() {
        return (
            <div className="container">
                <section className="home-hero">
                        <AnimatedText tag="h1" content="Welcome to Language Exchange"/>
                </section>
            </div>
        )
    }
}

export default Home