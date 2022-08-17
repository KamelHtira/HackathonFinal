import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/logo.svg'; 
class Footer extends Component {

    render() { 
        var FooterData = this.props.FooterData;

        return (
            

            <footer class="ct-footer">
                  <a style={{textTransform:" none", color: "white"}}href="https://wa.me/21622741725" class="float" target="_blank">
    <i class="fab fa-whatsapp my-float"></i>
  </a>
              <div class="container">
          
                <ul class="ct-footer-list text-center-sm">
                  <li>
                    <div style={{paddingTop:"30px" }} class="logo">
                      <a href="#">
                        <img style={{margin:" auto",width:"150px"}} 
                        src={logo} 
                        alt="logo not found"/>
                        </a>
                    </div>
                  </li>
          
                  <li>
                    <h2 class="ct-footer-list-header">Quick links</h2>
                    <ul>
                      <li>
                        <a href="#AU">Services</a>
                      </li>
                      <li>
                        <a href="#Testimonials">Témoignage</a>
                      </li>
                      <li>
                        <button type="button" style={{backgroundColor: "transparent",border:" 0px;"}} data-toggle="modal"
                          data-target="#exampleModalLong">
                          <a href="#ghj"> Contact</a>
                        </button>
                      </li>
                      <li>
                        <button type="button" style={{backgroundColor:" transparent",border: "0px"}} data-toggle="modal"
                          data-target="#exampleModalLong2">
                          <a href="#ghj">FAQ</a>
                        </button>
          
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h2 class="ct-footer-list-header">Contact</h2>
                    <ul>
                      <li>
                        <a href="tel:21650923251 "> +216 22 741 725 </a>
                      </li>
          
                      <li>
                        <a href=""> commercial@ideal-connect.tn</a>
                      </li>
                      <li> <div class="ct-socials" style={{display:" flex"}}>  
                          <a href="https://twitter.com/cryptoKamelHtira" target="_blank">
                            <i style={{fontSize:" 25px"}}class="fab fa-linkedin"></i></a>
          
                          <a style={{marginLeft: "40px"}} href="https://wa.me/21622741725" target="_blank">
                            <i style={{fontSize:" 25px"}} class="fab fa-whatsapp"></i></a>
                        </div>
                        <br/>
                      </li>
                      <li>
                        <br/>
                      </li>
          
                    </ul>
                  </li>
          
                
                </ul>
              </div>
          
              <div style={{padding:" 20px"}} class="ct-footer-post">
                <div class="container " style={{display: "flex",justifyContent:" space-evenly"}}>
          
                  <div class="">
                    <p style={{marginBottom:" 0px"}}>Copyright © 2022 Ideal Connect.&nbsp;</p>
          
                  </div>
                </div>
              </div>
            </footer>
            
        )
    }
}

export default Footer
