import React, { Component } from 'react';
import Image1 from '../../img/Gallery/P1.jpg';
import Image2 from '../../img/Gallery/P2.jpg';
import Image3 from '../../img/Gallery/P3.jpg';
import Image4 from '../../img/Gallery/P4.jpg';
import Image5 from '../../img/Gallery/P5.jpg';
import Image6 from '../../img/Gallery/P6.jpg';
import Image7 from '../../img/Gallery/P7.jpg';
import Image8 from '../../img/Gallery/P8.jpg';
import Image9 from '../../img/Gallery/P9.jpg';
import Image10 from '../../img/Gallery/P10.jpg';
import Image11 from '../../img/Gallery/P11.jpg';
import Image12 from '../../img/Gallery/P12.jpg';
import Image13 from '../../img/Gallery/P13.jpg';
import Image14 from '../../img/Gallery/P14.jpg';
import Image15 from '../../img/Gallery/P15.jpg';

class Gallery extends Component {
  render() {
    return (
      <section id="gallery" className="py-5">
        <div className="container">
          <h1 className="text-center Title">Gallery</h1>
          <hr />
          <br />
          <br />
          <div className="row mb-4">
            <div className="col-md-4">
              <a
                href={Image2}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image2} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image1}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image1} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image3}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image3} alt="" />
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <a
                href={Image4}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image4} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image5}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image5} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image6}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image6} alt="" />
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <a
                href={Image7}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image7} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image8}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image8} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image9}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image9} alt="" />
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <a
                href={Image10}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image10} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image11}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image11} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image12}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image12} alt="" />
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-4">
              <a
                href={Image13}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image13} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image14}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image14} alt="" />
              </a>
            </div>
            <div className="col-md-4">
              <a
                href={Image15}
                data-toggle="lightbox"
                data-gallery="img-gallery"
                data-height="560"
                data-width="560"
              >
                <img className="img-fluid" src={Image15} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
