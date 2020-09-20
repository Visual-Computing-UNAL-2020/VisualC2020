import React from 'react'


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'

//css
import '../styles/Workshops.css'

class Workshops1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"algo"
        }
    }
    render(){
        return(
            <Container id="fullpage">
                <Card>
                    <Card.Body>
                        <Row>
                            <h6>Descripcion:</h6>
                            <p>Introducir el análisis de imágenes/video al implementar las siguientes operaciones de análisis para imágenes/video tanto por software como por hardware (empleando shaders):</p>
                            <p>Implementar las siguientes operaciones de análisis para imágenes/video:</p>
                            <ul>
                                <li>Conversión a escala de grises: promedio rgb y luma.</li>
                                <li>Aplicación de algunas máscaras de convolución.</li>
                                <li>(solo para imágenes) Despliegue del histograma y segmentación a partir del mismo.</li>
                                <li>(solo para video) Medición de la eficiencia computacional para las operaciones realizadas.</li>
                            </ul>
                            <p>Emplear dos canvas, uno para desplegar la imagen/video original y el otro para el resultado del análisis.</p>
                            <h6>Link del taller: <a href="https://github.com/VisualComputing/imaging_ws">https://github.com/VisualComputing/imaging_ws</a></h6>
                        </Row>
                        <Row>
                            <h6>Escala de Grises:</h6>
                            <Row>
                                <Col className="col-sm-4">
                                <canvas id="graybefore" ref="graybefore" width="250px" height="300px"></canvas>
                                </Col>
                                <Col className="col-sm-4">
                                <canvas id="grayafter" ref="grayafter" width="250px" height="300px"></canvas>
                                </Col>
                                <Col className="col-sm-4">
                                    botones
                                </Col>
                            </Row>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Workshops1