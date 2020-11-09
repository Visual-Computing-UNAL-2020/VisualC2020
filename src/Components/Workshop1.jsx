import React from 'react'
import P5 from 'react-p5-wrapper'

//sketchs
import Grayscale from './p5/Grayscale.jsx'

//componnets

//image
import fullcolor from '../Assets/fullcolor.jpg'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card,Modal} from 'react-bootstrap'

//css
import '../styles/Workshops.css'

class Workshops1 extends React.Component{

    constructor(props){
        super(props);
        this.colRGB= React.createRef()
        this.state={
            RGB_LUMA:false
        }
        this.RGB_LUMA = this.RGB_LUMA.bind(this)
    }

    componentDidMount(){

    }
    componentDidUpdate(){

    }

    RGB_LUMA(){
        this.setState({
            RGB_LUMA: !this.state.RGB_LUMA
        })
    }

    render(){
        return(
            <Container id="fullpage">
                <Card>
                    <Card.Body>
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
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Body>
                        <h6>Solucion:</h6>
                        <ul>
                            <li onClick={this.RGB_LUMA}>Promedio RGB y LUMA</li>
                            <Modal size="xl" show ={this.state.RGB_LUMA} onHide={this.RGB_LUMA}>
                                <Modal.Body>
                                    <Container>
                                        <Row>
                                        <Col className="col-6">
                                            <img src={fullcolor} alt=""width="500" height="400"/>
                                        </Col>
                                        <Col className="col-6">
                                            <Grayscale w={500} h={400}/>
                                        </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>
                        </ul>
                    </Card.Body>
                </Card>
            </Container>
                
        )
    }
}

export default Workshops1