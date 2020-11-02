import React from 'react'

//images
import profe from '../Assets/fotos/profe.jpg'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'

//css
import '../Styles/Start.css'

class home extends React.Component{
    render(){
        return(
            <Container id="fullpage" >
                <Card>
                    <Card.Body>
                        <Row >
                            <Col className="col-sm-4">
                                <img id="dancer" src="https://media3.giphy.com/media/7fgvY7OaNbq0w/giphy.gif?cid=ecf05e47buvm9n5i4mpkckpizlct70rb2z1yzepktvk7mlrd&rid=giphy.gif" className="img-fluid" alt="Responsive image"/>
                                <h2 id="courseT"><p>Computacion Visual 2020 - 2</p></h2>
                            </Col>
                            <Col className="col-sm-8">
                                <blockquote class="blockquote">
                                    <h4>Definicion:</h4>
                                    <p>La computación visual/gráfica o gráficos por ordenador es el campo de la informática visual, donde se utilizan computadoras tanto para generar imágenes visuales sintéticamente como integrar o cambiar la información visual y espacial probada del mundo real.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Wikipedia la Enciclopedia Libre</cite></footer>
                                </blockquote>
                                <h4>Objetivo:</h4>
                                <p>Estudiar el proceso de producción y manipulación de una imagen digital que sirve para dar sustento a una aplicación visual moderna, empleando una arquitectura actual de computador. Respecto de dicho proceso buscamos discernir:</p>
                                <ul>
                                    <li>La relación con la visión humana.</li>
                                    <li>Sus entradas: modelos geométricos, datos, imágenes y gestos.</li>
                                    <li>Sus etapas, identificando las programables y el modo de hacerlo.</li>
                                </ul>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <Col className="col-sm-12">
                                <Row>
                                    <Col className="col-sm-3">
                                        <img src={profe} id="profe" className="img-fluid" alt="Responsive image"/>
                                    </Col>
                                    <Col className="col-sm-9">    
                                        <h4>Profesor: <br/>Jean Pierre Charalambos Hernández </h4>
                                        <h6>Formacion Academica:</h6>
                                        <ul>
                                            <li>Doctorado Universitat Politècnica de Catalunya Doctorado en software Septiembrede2003 - Febrerode 2008 HLOD Refinement Driven by Hardware Occlusion Queries</li>
                                            <li>Maestría/Magister UNIVERSIDAD NACIONAL DE COLOMBIA SEDE BOGOTA Magister en Ingeniería de Sistemas Enerode1999 - de 2001 Visualización de Conceptos de Programación Lineal</li>
                                            <li>Pregrado/Universitario PONTIFICIA UNIVERSIDAD JAVERIANA Ingeniería Industrial Enerode1989 - de 1994 Diseño de un modelo matemático para la programación de la carga laboral en el banco Mercantil</li>
                                        </ul>
                                        <h6>Líneas de investigación:</h6>
                                        <ul>
                                            <li>Visualización de la información</li>
                                            <li>Computación Gráfica</li>
                                            <li>Procesamiento de Imágenes</li>
                                        </ul>
                                        <h6>Correo electronico:</h6>
                                        <a href="mailto:jpcharalambosh@unal.edu.co">jpcharalambosh@unal.edu.co</a>
                                    </Col>
                                </Row>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <Col className="col-sm-5">
                                <h2 id="courseT"><p>Pagina principal del Curso:</p></h2>
                            </Col>
                            <Col className="col-sm-7">
                                <h3><a href="https://visualcomputing.github.io/">https://visualcomputing.github.io/</a></h3>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
export default home