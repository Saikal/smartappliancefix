import React, { Component } from 'react';
import './App.css';

import About from './components/About.js';
import Contact from './components/Contact.js';
import Dashboard from './components/Dashboard.js';
import Footer from './components/Footer.js';
import Gallery from './components/Gallery.js';
import Home from './components/Homepage.js';
import Services from './components/Services.js';

// import { Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <div id="smart-main">

        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"/>
        <Dashboard />
        <div id="smart-container">
          <Router>
            <div>
            <Route path="/about_test" exact strict render={
              () => {
                return ( <h1>Welcome About</h1>);
              }
            }/>
            <Route path="/" exact strict component={Home}/>
            <Route path="/about" exact strict component={About}/>
            <Route path="/contact" exact strict component={Contact}/>
            <Route path="/footer" exact strict component={Footer}/>
            <Route path="/service" exact strict component={Services}/>
            <Route path="/appliance_gallery" exact strict component={Gallery}/>
            <Route path="/user/:username" exact strict render={
              () => {
                return ( <h1>Welcome User</h1>);
              }
            }/>
            </div>
          </Router>
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }

  // Initialize state
  // state = { passwords: [] }

  // // Fetch passwords after first mount
  // componentDidMount() {
  //   this.getPasswords();
  // }

  // getPasswords = () => {
  //   // Get the passwords and store them in state
  //   fetch('/api/passwords')
  //     .then(res => res.json())
  //     .then(passwords => this.setState({ passwords }));
  // }

  // render() {
  //   const { passwords } = this.state;

  //   return (
  //     <div className="App">
  //       {/* Render the passwords if we have them */}
  //       {passwords.length ? (
  //         <div>
  //           <h1>5 Passwords Aman</h1>
  //           <ul className="passwords">
  //             {
  //               Generally it's bad to use "index" as a key.
  //               It's ok for this example because there will always
  //               be the same number of passwords, and they never
  //               change positions in the array.
  //             }
  //             {passwords.map((password, index) =>
  //               <li key={index}>
  //                 {password}
  //               </li>
  //             )}
  //           </ul>
  //           <button
  //             className="more"
  //             onClick={this.getPasswords}>
  //             Get More Aman
  //           </button>
  //         </div>
  //       ) : (
  //         // Render a helpful message otherwise
  //         <div>
  //           <h1>No passwords :(</h1>
  //           <button
  //             className="more"
  //             onClick={this.getPasswords}>
  //             Try Again?
  //           </button>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
}

export default App;
