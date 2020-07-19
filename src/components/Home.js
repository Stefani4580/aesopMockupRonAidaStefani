import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./Shop";
import Read from "./Read";
import Stores from "./Stores";
import Search from "./Search";

export default class Home extends React.Component {


  render() {
    return (
      <Router>
        <div className="main">
          <div className="header">
            <h1 className="covid">
              We are pleased to inform that select Aesop stores in the US have
              reopened with modified hours.
            </h1>
            <h1 className="freeShip">Enjoy complimentary standard shipping on all orders.
            </h1>
            <div className="logoCircle"><h1 className="logoText">Aēsop</h1></div>
            
          </div>

        <div className="first">
          <nav>
            <ul className="nav">
              <li>
                <Link className="link" to="/shop">Shop</Link>
              </li>
              <li>
                <Link className="link" to="/read">Read</Link>
              </li>
              <li>
                <Link className="link" to="/stores">Stores</Link>
              </li>
              <li>
                <Link className="link" to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="second">
            Second Page
        </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/Read">
              <Read />
            </Route>
            <Route path="/stores">
              <Stores />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// ron typed this line