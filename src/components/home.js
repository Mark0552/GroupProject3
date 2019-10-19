import React, { Component } from 'react';
import sample2 from './Images/weddingVideoHome2.mp4';
import './budget/Budget.css'

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <video className='videoTag' autoPlay loop muted>
          <source src={sample2} type='video/mp4' />
        </video>

        <div style={{ position: 'absolute', fontFamily: 'Satisfy' }} className="hey1">
          <h1>Congratulations!</h1>
          <p>Just got engaged and don't know where to start? <br />
            Here you will find a Checklist of to do things, keep track of your Budget and Guest List.</p>
        </div>
        {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./images/slide1aa.jpg" className="d-block w-100" alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/slide2aa.jpg" className="d-block w-100" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/slide3aa.jpg" className="d-block w-100" alt="Third slide"/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/slide4aa.jpg" className="d-block w-100" alt="Fourth slide"/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/slide5aa.jpg" className="d-block w-100" alt="Fifth slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>                  */}
      </div>
    );
  }
}

export default Home;


