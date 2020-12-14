import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import HomeImage from '../Images/webtech-logo.jpg'
import HomeImage1 from '../Images/webtech-logo1.jpg'
import HomeImage2 from '../Images/webtech-logo2.jpg'

export default class Couracel extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HomeImage}
      alt="First slide"
    />
    <Carousel.Caption>
        <br></br><br></br>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <Button variant="info">Meet Us</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HomeImage1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button variant="info">Meet Us</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HomeImage2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button variant="info">Meet Us</Button>{' '}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
