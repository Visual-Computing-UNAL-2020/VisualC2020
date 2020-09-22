import React from 'react'

//components
import Canvas1 from './p5/Canvas1'
import Canvas2 from './p5/Canvas2'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'

//css
import '../Styles/Workshops.css'

class Workshops1 extends React.Component{

    constructor(props){
        super(props);
        this.column= React.createRef()
        this.state={
            name:"algo",
            columnw: Number,
            pixels: [],
            width: Number,
            heigth: Number
        }
    }

    componentDidMount(){

    }

    callbackPixels=(dataPixels,w,h)=>{
        this.setState({
            pixels: dataPixels,
            width: w,
            heigth: h
        })
    }

    grayscale=()=>{
        let p = this.state.pixels
        let w = this.state.w
        let h = this.state.h
        for(let i = 0; i< h ; i++){
            for(let j = 0; j < w; j++){
                let index = (j + i * w) * 4;
                let avg = (p[index] + p[index + 1] + p[index + 2])/3;
                p[index] = avg;
                p[index + 1] = avg;
                p[index + 2] = avg;
                //img.pixels[index + 3] = alpha;
            }
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
                            <Col ref={this.column} className="col-sm-5">
                                <Canvas1 canvasW={375} canvasH={375} callbackPixels={this.callbackPixels}/>
                            </Col>
                            <Col className="col-sm-2">
                                <button>button 1</button>
                                <button>button 2</button>
                            </Col>
                            <Col  className="col-sm-5">
                                <Canvas2 canvasW={375} canvasH={375}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Workshops1