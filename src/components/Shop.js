import React, { Component } from 'react'

class Shop extends Component {
    render() {
        return (
            <div className= "Shop">
                <div className="skin">
                    <h1>Skin</h1>
                <nav class="navbar"> 
        
                    <a href="#all-skin" id="all-skin-button"> All Skin </a> 
                    <a href="#cleanse" id="cleanse-button"> Cleanse </a>
                    <a href="#exfoliate" id="exfoliate"> Exfoliate</a>
                    <a href="treat-and-masque" id="treat-and-masque-button"> Treat & Masque</a>
                </nav>
                </div>
                <div className="hair"></div>
                <div className="body-hand"></div>
                <div className="fragrance"></div>
                <div className="home"></div>

                
            </div>
        )
    }
}


export default Shop;
