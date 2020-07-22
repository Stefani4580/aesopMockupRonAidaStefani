import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./Shop";
import About from "./About";
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
                    About
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
            <div class="row">

            <div class="col-5">
              <h1>For the Body</h1>
              <h2>An expression of care</h2>
              <p>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>
              </div>
              <div class="col-7">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={require("../assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png")}  />
                <Card.Body>
                  <Card.Title>Rind Concentrate Body Balm</Card.Title>
                  <Card.Text>
                  A citrus-based formulation with oils of Orange and Lemon Rind to cool and refresh the skin, and nut oil extracts to soften and lightly hydrate.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png")} />
                <Card.Body>
                  <Card.Title>A Rose By Any Other Name Body Cleanser</Card.Title>
                  <Card.Text>
                  An aromatic formulation that cleanses gently yet thoroughly, enhanced with hydrating Rose Petal oil and other skin-softening botanical extracts.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png")} />
                <Card.Body>
                  <Card.Title>Geranium Leaf Body Cleanser</Card.Title>
                  <Card.Text>
                  An invigorating gentle gel cleanser formulated with oils of Mandarin and Bergamot Rind to banish grime and thoroughly refresh the skin.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            </div>
            </div>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/Read">
              <About />
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