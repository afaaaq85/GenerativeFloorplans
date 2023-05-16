import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../../assets/img/meter1.svg'
import meter2 from '../../assets/img/meter2.svg'
import meter3 from '../../assets/img/meter3.svg'
import colorSharp from '../../assets/img/color-sharp.png';

import './Features.css'


const Features = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Features</h2>
                            <p>The genetic algorithm works by randomly generating a set of initial floor plans, and then using a fitness function to evaluate each plan based on a set of criteria such as room size, orientation, and adjacency. The algorithm then selects the best-performing plans and "mates" them to create new offspring with a combination of their features.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image1" />
                                    <h5>Rooms</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image2" />
                                    <h5>Area</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image3" />
                                    <h5>Width</h5>
                                </div>
                               
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Img" />
        </section>
    )
}

export default Features