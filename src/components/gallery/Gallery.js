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
import Image16 from '../../img/Gallery/P16.jpg';
import Image17 from '../../img/Gallery/P17.jpg';
import Image18 from '../../img/Gallery/P18.jpg';
import Image19 from '../../img/Gallery/P19.jpg';
import Image20 from '../../img/Gallery/P20.jpg';
import Image21 from '../../img/Gallery/P21.jpg';

class Gallery extends Component {
  renderGalleryItem(img) {
    return (
      <div className="col-md-4 box">
        <div className="imgBox">
          <a
            href={img}
            data-toggle="lightbox"
            data-gallery="img-gallery"
            data-height="560"
            data-width="560"
          >
            <img className="img-fluid" src={img} alt="" />
          </a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section id="gallery" className="py-5">
        <div className="container">
          <h1 className="text-center Title">Gallery</h1>
          <hr />
          <br />
          <br />
          <div className="row mb-4">
            {this.renderGalleryItem(Image2)}
            {this.renderGalleryItem(Image1)}
            {this.renderGalleryItem(Image3)}
          </div>
          <div className="row mb-4">
            {this.renderGalleryItem(Image4)}
            {this.renderGalleryItem(Image5)}
            {this.renderGalleryItem(Image6)}
          </div>
          <div className="row mb-4">
            {this.renderGalleryItem(Image7)}
            {this.renderGalleryItem(Image8)}
            {this.renderGalleryItem(Image9)}
          </div>
          <div className="row mb-4">
            {this.renderGalleryItem(Image10)}
            {this.renderGalleryItem(Image11)}
            {this.renderGalleryItem(Image12)}
          </div>
          <div className="row mb-4">
            {this.renderGalleryItem(Image13)}
            {this.renderGalleryItem(Image14)}
            {this.renderGalleryItem(Image15)}
          </div>
          <div className="row mb-4">
            {this.renderGalleryItem(Image16)}
            {this.renderGalleryItem(Image17)}
            {this.renderGalleryItem(Image18)}
          </div>
          <div className="row mb-4">
            {this.renderGalleryItem(Image19)}
            {this.renderGalleryItem(Image20)}
            {this.renderGalleryItem(Image21)}
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
