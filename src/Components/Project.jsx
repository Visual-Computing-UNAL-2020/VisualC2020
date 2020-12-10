import React from 'react'

//images
import covid from '../Assets/profundizacion/covid19.jpg'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'

//css
import '../styles/Project.css'

class home extends React.Component{
    render(){
        return(
            <Container id="fullpage" >
                <Card>
                    <Card.Body>
                        <Row >
                            <h1 >Profundizacion en Visualización de datos</h1>
                        </Row>
                        <Row >
                            <h2>Motivación</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-4">
                                <img src={covid} id="covid" className="img-fluid" alt="Responsive image"/>
                            </Col>
                            <Col className="col-sm-8">
                                <p>Nuestro grupo decidimos hacer la profundización en el tema de visualización de datos y el tema que elegimos fue covid 19 en la ciudad de Bogotá.</p>
                                <p>Originalmente queríamos indagar sobre la deserción escolar en Bogotá pero el dataset que encontramos tenía muy poca información así que decidimos elegir un dataset más interesante y que tuviera más historias por contar y nos decidimos por el de covid 19.</p>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Source Title">https://datosabiertos.bogota.gov.co</cite></footer>
                                </blockquote>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Preguntas</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Data Set</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Análisis</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Filtro</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Minería de datos</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>     
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Representación</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Refinar</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card> 
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Interactuar</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>                                                               
            </Container>
        )
    }
}
export default home