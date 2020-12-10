import React from 'react'

//images
import covid from '../Assets/profundizacion/covid19.jpg'
import coronapp from '../Assets/profundizacion/coronapp.jpg'
import nueva from '../Assets/profundizacion/nueva.png'
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
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://uniandes.edu.co/es/coronavirus</cite></footer>
                                </blockquote>

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
                        <Row>
                            <h3>¿Las descargas de CoronApp han tenido alguna correlación con las estadísticas de contagios, muertes o personas en uci?</h3></Row>
                        <Row >
                            <Col className="col-sm-5">
                                <img src={coronapp} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://coronaviruscolombia.gov.co/Covid19/index.html</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                                <p>
                                    Nuestra primera inquietud fue sobre Coronapp y es que justamente el 2 de diciembre de 2020 el presidente Iván Duque en la inauguración del Foro Innovación y Tecnología sobre el éxito de la aplicación y sostuvo que:
                                </p>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Quote">"Creamos una app y, hasta ahora, ha sido la aplicación con más descargas en toda la historia de Colombia en términos de una desarrollada al interior del país tenido en el país, y hemos superado 13 millones de personas que la han bajado. La tecnología ha jugado un papel importante porque podemos monitorear en tiempo real el estado y utilización de las UCI"</cite></footer>
                                </blockquote>
                                <p>
                                    Desde nuestro punto de vista esta aplicación no es más que un “solucionismo tecnológico” que apenas si sirve como medio informativo, nuestra hipótesis es que esta aplicación no ayudó a mitigar los contagios en esta pandemia y por lo tanto en futuras emergencias sanitarias no tiene sentido implementar una aplicación como esta que no obstante compromete claramente la privacidad de los usuarios.
                                </p>
                                <p>
                                    Sin embargo nuestro punto de vista puede estar sesgado por eso queríamos descubrir algún tipo de correlación, en principio entre las descargas diarias y 3 medidas:
                                </p>

                                <ul>
                                    <li>Número de contagiados por día.</li>
                                    <li>Número de muertos por día.</li>
                                    <li>Número de personas en las uci por día.</li>
                                </ul>

                                <p>
                                    Intentamos conseguir datos de descargas, uso o usuarios registrados, sin embargo esta información no es pública. 
                                </p>
                                <p>
                                    Según la fundación Karisma: 
                                </p>

                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Quote">"CoronApp tiene su origen en 2017, cuando se llamaba “Guardianes de la salud” y fue lanzada por el Instituto Nacional de Salud (INS) en vísperas de la visita del Papa Francisco a Colombia. El objetivo de la aplicación en ese entonces era monitorear los riesgos de salud que se pudieran presentar en medio de las aglomeraciones y que los usuarios reportaran si estaban enfermos. Tomando como base el código fuente de “Guardianes de la salud”, la Agencia Nacional Digital (AND) creó CoronApp."</cite></footer>
                                </blockquote>  
                                
                                <p>
                                    Por lo que solicitamos al Instituto Nacional de Salud vía email (contactenos@ins.gov.co) que por favor nos brindaran estadísticas de uso, descargas, cantidad de usuarios registrados o cualquier tipo de dato que nos puedan brindar para hacer un análisis de datos de la aplicación con los datos de contagios y muertes del cobid 19 todo esto con fines académicos, sin embargo solo recibimos una respuesta automática. por lo que decidimos abordar este análisis desde otra pregunta.
                                </p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <h3>¿Qué tan efectivas fueron las restricciones de “cuarentena estricta” en comparación de las medidas de la “nueva normalidad” respecto a contagios, muertes y personas en uci?</h3>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                <img src={nueva} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://www.oki.com/es/printing/about-us/news-room/blog/2020/new-normality-post-COVID-19/index.html</cite></footer>
                                </blockquote>
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