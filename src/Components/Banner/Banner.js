import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Banner = () => {
  return (
    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcom to Generative Floorplans</span>
                <h1>{`Hi, I am a `}<span className='wrap'>web developer</span></h1>
                <p>Non sunt irure tempor velit occaecat nisi sit eu. Aliqua tempor nostrud laboris do non irure sint sint in nulla consectetur irure. Excepteur dolore aliqua aliquip labore exercitation ad id sit non nostrud sunt quis nostrud occaecat. Eu magna nulla Lorem amet fugiat tempor ex consequat mollit excepteur consectetur tempor eu Lorem. Irure reprehenderit cupidatat labore nulla enim sit eiusmod aliqua velit ex. Aliquip exercitation magna nulla id. Labore cupidatat aliqua proident consequat eiusmod culpa ex esse.</p>
                <button onClick={()=>(console.log('connect'))}>Let's Connect</button>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner