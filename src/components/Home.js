import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./Shop";
import Read from "./Read";
import Stores from "./Stores";
import Search from "./Search";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup"

export default class Home extends React.Component {
  render() {
    return (
      <Router>
        <div className="main" className="container-fluid">
          <div className="header">
            <h1 className="covid">
              We are pleased to inform that select Aesop stores in the US have
              reopened with modified hours.
            </h1>
            <h1 className="freeShip">
              Enjoy complimentary standard shipping on all orders.
            </h1>
            <div className="logoCircle">
              <h1 className="logoText">Aēsop</h1>
            </div>
          </div>

          <div className="first">
            <nav>
              <ul className="nav">
                <li>
                  <Link className="link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/read">
                    Read
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/stores">
                    Stores
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/search">
                    Search
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="second">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={require("../assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png")} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png")} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png")} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
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
