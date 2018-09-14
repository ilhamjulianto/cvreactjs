import React, { Component } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Gride extends Component{
  render(){
    return(
      <div style={{ height:'100vh'}} id="home">
        <div className="container-fluid" style={{ height:'100vh'}}>
        <div className="row" style={{ height:'100vh', fontFamily: 'Lato'}}>

          <div className="col-2 px-0 bg-grad">
              <div>
                <div className="bg-prf">
                <nav>
                  <div className="overhead">
                    <div className="round-prf shadow">
                    </div>
                    <label className="left-bottom text-sm text-sm-center">Muhammad Ilham Julianto<br/>
                    </label>
                  </div>
                </nav>
                </div>
              </div>
            <div>
              <ul className="nav flex-column mt-2">
                <li className="nav-item">
                  <a className="nav-link btn-a text-light px-4 d-block" href="#home" id="link"><FontAwesomeIcon icon="store"/> &nbsp;&nbsp;&nbsp;Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn-a text-light px-4 d-block" href="#aboutme"><FontAwesomeIcon icon="street-view"/> &nbsp;&nbsp;&nbsp;Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn-a text-light px-4 d-block" href="#skills"><FontAwesomeIcon icon="wrench"/> &nbsp;&nbsp;&nbsp;Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn-a text-light px-4 d-block" href="#contact"><FontAwesomeIcon icon="phone"/> &nbsp;&nbsp;&nbsp;Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-10 bg-gray">
            <div className="container-fluid">
{/* Home */}

             <div className="mt-4 text-center" id="aboutme">
              <div className="row bg-light shadow-sm" id="skills">

              <div className="col-12 bg-grad2">
                <div className="py-3 h2 text-center">
                    About Me
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto d-block" style={ {textAlign: 'center', color: '#F95F07'} }>
                  <i className="fas fa-paperclip fa-3x color-grad" data-toggle="collapse" href="#collapseBio" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                  <h3 className="text-dark pt-2">Biography</h3>
                </div>
                <div class="collapse" id="collapseBio">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">Likes things related to graphic design, including Front End Developer. Want to become a UI / UX master and Front End Developer. </p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto d-block" style={ {textAlign: 'center', color: '#F95F07'} }>
                  <i className="fas fa-heart fa-3x color-grad" data-toggle="collapse" href="#collapseHobby" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                  <h3 className="text-dark pt-2">Hobbies</h3>
                </div>
                <div class="collapse" id="collapseHobby">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Graphic Design</li>
                        <li class="list-group-item">UI/UX Design</li>
                        <li class="list-group-item">Basketball</li>
                        <li class="list-group-item">Volleyball</li>
                        <li class="list-group-item">Hearing Murottal</li>
                      </ul>
                    </p>
                  </div>
                </div>
                </div>
              </div>


              </div>
              </div>
{/* Home End */}

{/* Skills */}
              <div className="mt-4 text-center" id="skills">
              <div className="row bg-light shadow-sm">

              <div className="col-12 bg-grad2">
                <div className="py-3 h2 text-center">
                    Skills
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto d-block" style={ {textAlign: 'center', color: '#F95F07'} }>
                  <i className="fab fa-html5 fa-3x" data-toggle="collapse" href="#collapseHtml" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                  <h3 className="text-dark pt-2">HTML 5</h3>
                </div>
                <div class="collapse" id="collapseHtml">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">Know about HTML and many Portfolios, including CV web, web portfolio, and many more</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto" style={ {textAlign: 'center', color: '#3489FF'} }>
                  <i className="fab fa-css3 fa-3x" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"></i>
                  <h3 className="text-dark pt-2">CSS 3</h3>
                </div>
                <div class="collapse" id="multiCollapseExample1">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">Know about CSS and many Portfolios, including CV web, web portfolio, and many more.</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto" style={ {textAlign: 'center', color: '#F3CD17'} }>
                  <i className="fab fa-js fa-3x" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2"></i>
                  <h3 className="text-dark pt-2">Javascript</h3>
                </div>
                <div class="collapse" id="multiCollapseExample2">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">Learning stage, and there is no experience of using it into the project / mini project. But I have one Portfolio like Counter App</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto" style={ {textAlign: 'center', color: '#3489FF'} }>
                  <i className="fab fa-react fa-3x" data-toggle="collapse" data-target="#collapseReact" aria-expanded="false" aria-controls="multiCollapseExample2"></i>
                  <h3 className="text-dark pt-2">React Js</h3>
                </div>
                <div class="collapse" id="collapseReact">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">Learning stage, and there is no experience of using it into the project / mini project. But I have a little Portfolio from this Language</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto" style={ {textAlign: 'center', color: '#EA5DDD'} }>
                  <i className="fab fa-sass fa-3x" data-toggle="collapse" data-target="#collapseSass" aria-expanded="false" aria-controls="multiCollapseExample2"></i>
                  <h3 className="text-dark pt-2">Sass</h3>
                </div>
                <div class="collapse" id="collapseSass">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">Learning stage, and there is no experience of using it into the project / mini project</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto" style={ {textAlign: 'center', color: '#36DF28'} }>
                  <i className="fas fa-paint-brush fa-3x" data-toggle="collapse" data-target="#collapsePaintBrush" aria-expanded="false" aria-controls="multiCollapseExample2"></i>
                  <h3 className="text-dark pt-2">Graphic Design</h3>
                </div>
                <div class="collapse" id="collapsePaintBrush">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item active">100+ Porfolio</li>
                        <li class="list-group-item">CorelDRAW X7</li>
                        <li class="list-group-item">Adobe Illustrator</li>
                        <li class="list-group-item">Adobe Photoshop</li>
                        <li class="list-group-item">Inkscape</li>
                      </ul>
                    </p>
                  </div>
                </div>
                </div>
              </div>

              </div>
              </div>
{/* Home End */}

{/* Contact */}
<div className="mt-4 text-center" id="contact">
              <div className="row bg-light shadow-sm" id="skills">

              <div className="col-12 bg-grad2">
                <div className="py-3 h2 text-center">
                    Contact
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto d-block" style={ {textAlign: 'center', color: '#F95F07'} }>
                  <i className="fas fa-phone fa-3x color-grad" data-toggle="collapse" href="#collapsePhone" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                  <h3 className="text-dark pt-2">Phone</h3>
                </div>
                <div class="collapse" id="collapsePhone">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">+62 895 3726 2581 7</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto d-block" style={ {textAlign: 'center', color: '#F95F07'} }>
                  <i className="fab fa-whatsapp fa-3x color-green" data-toggle="collapse" href="#collapseWhats" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                  <h3 className="text-dark pt-2">Whatsapp</h3>
                </div>
                <div class="collapse" id="collapseWhats">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">+62 895 3726 2581 7</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto d-block" style={ {textAlign: 'center', color: '#F95F07'} }>
                  <i className="fab fa-facebook fa-3x color-fb" data-toggle="collapse" href="#collapseFb" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                  <h3 className="text-dark pt-2">Facebook</h3>
                </div>
                <div class="collapse" id="collapseFb">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">Ilham Julianto</p>
                  </div>
                </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 py-4">
                <div className="m-auto d-block" style={ {textAlign: 'center', color: '#F95F07'} }>
                  <i className="fab fa-instagram fa-3x color-ig" data-toggle="collapse" href="#collapseIg" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                  <h3 className="text-dark pt-2">Instagram</h3>
                </div>
                <div class="collapse" id="collapseIg">
                <div class="card border-0 d-block w-100" style={{width: '18rem'}}>
                  <div class="card-body">
                    <p class="card-text">@ilham.julianto_</p>
                  </div>
                </div>
                </div>
              </div>


              </div>
              </div>
{/* Contact End */}

            </div>
            </div>
         </div>

        </div>
        </div>
    );
  }
}