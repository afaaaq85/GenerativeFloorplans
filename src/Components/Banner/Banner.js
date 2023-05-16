import {useState,useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../../assets/img/header-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import './Banner.css'


const Banner = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [ "Generative", "Fast", "Intuitive" ];
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Generative Floorplans</span>
                <h1>{`Welcome to `} <span className="txt-rotate"><br></br><span className="wrap">{text}</span></span> Floorplans</h1>
                  <p>A generative floorplans app is a software program that uses a genetic algorithm to automatically create 2D floor plans. The genetic algorithm is an optimization technique that mimics the process of natural selection to generate high-quality and diverse solutions to a problem.</p>
                  <p>The output of the generative floorplans app is a set of 2D floor plans that meet the user's design criteria and preferences. These plans can be further customized and refined by the user, or used as a starting point for more detailed design work</p>
                  <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Banner
