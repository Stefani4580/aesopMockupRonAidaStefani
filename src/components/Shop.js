import React, { Component } from 'react';
import amazingfacecleanser from '../assets/images/for_all_products/amazing-face-cleanser.png';
import fabulousfacecleanser from '../assets/images/for_all_products/fabulous-face-cleanser.png';
import AesopSkinParsleySeedFacialCleanser from './'
                        

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [
                {
                    quantity: 0,
                    price: 33.00,
                    name: "Amazing Face Cleanser"

                },
                {
                    quantity: 0,
                    price: 33.00,
                    name: "Fabulous Face Cleanser"
                    
                }
            
            ]
        }
    }
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
                <div className=" cleanse-products">
                    <div>
                        <img src={amazingfacecleanser} alt= "this"/>
                        <label>Amazing Face Cleanser</label>
                        <img src={fabulousfacecleanser} />
                        <label> Fabulous Face Cleanser</label>
                        
                    </div>
                        
                </div>
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
