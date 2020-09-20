import React from 'react'

//image
import Tomas from '../Assets/fotos/Tomas.jpeg'
import Ivan from '../Assets/fotos/Ivan.jpg'
import Fabian from '../Assets/fotos/Fabian.jpeg'
import Daniel from '../Assets/fotos/Daniel.jpeg'
import Unal from '../Assets/unal.png'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Carousel} from 'react-bootstrap'

//css
import '../styles/Team.css'

class Team extends React.Component{
    render(){
        return(
            <Container id="fullteam">
                <Card>
                    <Card.Body>
                        <Row id="presentation">
                            <Col id="colimg" className="col-sm-3"><img id="fototeam"src={Tomas} className="img-fluid"/></Col>
                            <Col className="col-sm-6">
                            <ul>
                                <li>Nombre: Michael Tomás Velásquez Gordillo</li>
                                <li>Correo institucional: <a href="mailto:mtvelasquezg@unal.edu.co">mtvelasquezg@unal.edu.co</a></li>
                                <li>Pasa tiempos:
                                    <ul>
                                        <li>Hacer ejercicio</li>
                                        <li>Cocinar</li>
                                    </ul>
                                </li>
                            </ul>
                            </Col>
                            <Col id="unal" className="col-sm-3"><img src={Unal} className="img-fluid"/></Col>
                        </Row>
                        <Row id="presentation">
                            <Col id="colimg" className="col-sm-3"><img id="fototeam"src={Fabian} className="img-fluid"/></Col>
                            <Col className="col-sm-6">
                            <ul>
                                <li>Nombre: Fabian Esteban Wilches Cárdenas</li>
                                <li>Correo institucional: <a href="mailto:fewilchesc@unal.edu.co">fewilchesc@unal.edu.co</a></li>
                                <li>Pasa tiempos:
                                    <ul>
                                        <li>Montar bicicleta</li>
                                        <li>Leer</li>
                                        <li>jugar videojuegos</li>
                                    </ul>
                                </li>
                            </ul>
                            </Col>
                            <Col id="unal" className="col-sm-3"><img src={Unal} className="img-fluid"/></Col>
                        </Row>
                        <Row id="presentation">
                            <Col id="colimg" className="col-sm-3"><img id="fototeam"src={Daniel} className="img-fluid"/></Col>
                            <Col className="col-sm-6">
                            <ul>
                                <li>Nombre: Daniel Angulo Suescún</li>
                                <li>Correo institucional: <a href="mailto:dangulos@unal.edu.co">dangulos@unal.edu.co</a></li>
                                <li>Pasa tiempos:
                                    <ul>
                                        <li>Jugar Video juegos</li>
                                        <li>Leer</li>
                                        <li>Programar</li>
                                    </ul>
                                </li>
                            </ul>
                            </Col>
                            <Col id="unal" className="col-sm-3"><img src={Unal} className="img-fluid"/></Col>
                        </Row>
                        <Row id="presentation">
                            <Col id="colimg" className="col-sm-3"><img id="fototeam"src={Ivan} className="img-fluid"/></Col>
                            <Col className="col-sm-6">
                            <ul>
                                <li>Nombre: Ivan Dario Solano Velasquez</li>
                                <li>Correo institucional: <a href="mailto:idsolanov@unal.edu.co">idsolanov@unal.edu.co</a></li>
                                <li>Pasa tiempos:
                                    <ul>
                                        <li>Jugar Video juegos</li>
                                        <li>Hacer Ejercicio</li>
                                        <li>Cocinar</li>
                                        <li>Comer</li>
                                    </ul>
                                </li>
                            </ul>
                            </Col>
                            <Col id="unal" className="col-sm-3"><img src={Unal} className="img-fluid"/></Col>
                        </Row>
                        <Row id="quote">
                        <blockquote class="blockquote">
                            <p>«Muchos de nosotros somos más capaces que algunos de nosotros,<br/> pero ninguno de nosotros somos tan capaces como todos nosotros»</p>
                            <footer class="blockquote-footer"><cite title="Source Title">Tom Wilson.</cite></footer>
                        </blockquote>
                        </Row>
                    </Card.Body>
                </Card>

            </Container>
        )
    }
}

export default Team