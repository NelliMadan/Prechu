import React from "react";
import './products.css';
import './products_media.css';

const style = {
    "display":"flex",
    "justifyContent":"center"
}

const Products = ()=>{
    return(
      <>
          <nav>
              <div className="header">
                  <div>
                      <div className="prechu">
                          <div/>
                      </div>
                      <span>Prechu</span>
                  </div>
                  <div className="menu">
                      <a href="#">
                          Home
                      </a>
                      <a href="#">
                          Products
                      </a>
                      <a href="#">
                          Services
                      </a>
                      <a href="#">
                          Contacts
                      </a>
                  </div>
              </div>
          </nav>
          <section>
              <div className="bannerBackground">
                  <div className="banner">
                      <div className="goBack"/>
                      <div className="iphone"/>
                      <div className="bannerText">
                          <p>Lorem Ipsum is simply </p>
                          <span style={{"marginTop":"-1rem"}}>dummy text of the </span>
                          <span style={{"marginTop":"1rem"}}>printing & typesettin</span>
                          <button className="bannerButton">
                              <div className="bannerButtonImg"/>
                              <span>Sign up now</span>
                          </button>
                      </div>
                      <div className="goNext"/>
                  </div>
              </div>
          </section>
          <section>
              <div className="productsBackground">
                  <div className="products">
                      <div>
                          <div style={style}>
                              <div className="penBackground">
                                  <div className="pen"/>
                              </div>
                          </div>

                          <p>Contrary to popular</p>
                          <span>Lorem Ipsum is not simply random text. <br/> It has roots in a piece </span>
                      </div>
                      <div>
                          <div style={style}>
                              <div className="TVBackground">
                                  <div className="TV"/>
                              </div>
                          </div>

                          <p>Contrary to popular</p>
                          <span>Lorem Ipsum is not simply random text. <br/> It has roots in a piece </span>
                      </div>
                      <div>
                          <div style={style}>
                              <div className="basketBackground">
                                  <div className="basket"/>
                              </div>
                          </div>

                          <p>Contrary to popular</p>
                          <span>Lorem Ipsum is not simply random text. <br/> It has roots in a piece </span>
                      </div>
                  </div>
                  </div>
          </section>
          <section>
              <div className="shopping">
                  <p className="shoppingCartTitle">The Shopping cart</p>
                  <div className="shoppingCartInfo">
                      <div className="cart"/>
                      <div className="shoppingBasketInfo">
                          <p>Some Bullet text here</p>
                          <span>Lorem Ipsum is simply dummy text of the printing and typesetting </span>
                          <span>Lorem Ipsum has been the industry's standard dummy text ever </span>
                          <span>When an unknown printer took a galley of type and scrambled </span>
                          <span>It to make a type specimen book. It has survived not only five centuries </span>
                          <span>But also the leap into electronic typesetting, </span>
                          <span>Remaining essentially unchanged. It was popularised </span>
                          <span>The release of Letraset shee  ts containing Lorem Ipsum passages </span>
                      </div>
                  </div>
              </div>
          </section>
          <footer>
              <hr/>
              <p>Copyright © 2012-2013 cssauthor.com</p>
          </footer>
      </>
    );
}

export default Products;