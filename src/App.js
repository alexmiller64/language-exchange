import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';
import classnames from 'classnames';
import AOS from 'aos';
import ScrollToTopRoute from'./components/ScrollTop';

import Home from './pages/Home';


function Navigation (props) {
  return (
    <nav className={classnames({ scrolled: props.scrolled})}>
      <Link to={'/'}>LANGUAGE EXCHANGE</Link>
      <Link to={'/'} >LOGO HERE</Link>
      <Link to={'/'}>CHAT ROOM</Link>
    </nav>
  )
}

function Footer () {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>{year}&copy; Miller Todman. All rights reserved.</p>
    </footer> 
  )
}

class App extends Component {
  state = {
    scrolled: false
  }

  

  componentDidMount() {
    AOS.init({
      duration: 200
    })
    window.addEventListener('scroll', (event) => {
      if(window.pageYOffset !== 0) {
        this.setState({
          scrolled: true
        })
      } else {
        this.setState({
          scrolled: false
        })
      }
    });
  }
  render() {
    return (
      <Router>
        <div className="page-wrap">
          <Navigation scrolled={this.state.scrolled}/>
            <Switch>
              <ScrollToTopRoute sensitive exact path="/" component={Home}/>
            </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
