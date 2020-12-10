import React from 'react'

//images
import covid from '../Assets/profundizacion/covid19.jpg'
import coronapp from '../Assets/profundizacion/coronapp.jpg'
import nueva from '../Assets/profundizacion/nueva.png'
import dataset from '../Assets/profundizacion/dataset.jpg'
import analisis from '../Assets/profundizacion/analisis.jpg'
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
                                <p>Nuestro grupo decidió hacer la profundización en visualización de datos y el tema que elegimos fue Covid 19 en la ciudad de Bogotá.</p>
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
                                <p>
                                    Millones de datos se han recopilado en todo el mundo sobre la actual pandemia, y son muchas las iniciativas por interpretar estos datos, sin embargo en nuestro país es la primera vez que enfrentamos una situación como esta. Afortunadamente pandemias anteriores como el Sars no tuvieron una incidencia importante en nuestro país por lo que consideramos valioso darle una interpretación desde nuestra cotidianidad, revisar si las iniciativas que hemos adelantado como país han sido efectivas en nuestra sociedad y cómo podríamos estar preparados para una futura emergencia sanitaria.
                                </p>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Estado Actual</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                
                            </Col>
                            <Col className="col-sm-7">
                                <p>
                                    Para este análisis encontramos muchas fuentes de información tanto nacional como internacional, algunas no eran claras en la obtención de estos datos y otras parecían tener información desactualizada, algunos dataset los encontramos en los siguientes sitios:
                                    https://datosabiertos.bogota.gov.co/
                                    https://saludata.saludcapital.gov.co/
                                    https://www.datos.gov.co/

                                    También encontramos muchas iniciativas de visualización de datos del contexto nacional, algunas de ellas fueron:
                                    Google
                                    Presenta estadísticas de los casos positivos y muertes de todo el mundo, algunos de los gráficos que muestra son mapa interactivo, gráfico de casos diarios y un gráfico de muertes diarias que se puede filtrar por país y en algunos casos por ciudad.
                                    https://news.google.com/covid19/

                                    Universidad Johns Hopkins.
                                    El centro de ciencia e ingeniería de sistemas de la Universidad Johns Hopkins presenta un mapa donde muestra la cantidad de contagios por ciudad. Algo que cabe resaltar es que el código de la visualización así como el lugar de donde sacan los datos está expuesto públicamente en un repositorio de GitHub
                                    https://github.com/CSSEGISandData/COVID-19
                                    https://coronavirus.jhu.edu/map.html


                                    Gobierno Nacional de Colombia:
                                    En varias páginas oficiales el Gobierno nacional ha decidido mostrar gráficas de con información principalmente de contagios, muertes y ocupación de las UCI de cada día, haciendo especial énfasis en la sumatoria de los datos importantes como casos activos, recuperados, fallecidos, pruebas procesadas, etc.
                                    https://coronaviruscolombia.gov.co/Covid19/index.html
                                    https://www.minsalud.gov.co/salud/publica/PET/Paginas/Covid-19_copia.aspx
                                    http://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx

                                    Alcaldía Mayor de Bogotá
                                    La muestra gráficos y datos tras la recopilación, depuración y seguimiento de los casos confirmados, realizado por la Subsecretaría de Salud Pública, de la Secretaría Distrital de Salud, y procesados por La Red Distrital de Laboratorios.
                                    https://saludata.saludcapital.gov.co/osb/index.php/datos-de-salud/enfermedades-trasmisibles/covid19/

                                    Cámara de Comercio de Bogotá
                                    El observatorio de la CCB muestra varios gráficos y mapas con la información del gobierno nacional y distrital dándole un énfasis desde lo financiero , los principales impactos en el crecimiento, el empleo y en la actividad empresarial, especialmente en las micro y pequeñas empresas que son el 97% de la estructura empresarial de Bogotá y la región. También se incluyen los resultados de las encuestas a los empresarios realizadas.
                                    https://www.ccb.org.co/observatorio/Economia/Economia-dinamica-incluyente-e-innovadora/Impacto-del-COVID-19

                                </p>
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
                                <img src={dataset} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://blogs.imf-formacion.com/blog/tecnologia/que-es-google-dataset-search-y-para-que-sirve-201809/</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                                <p>
                                    Después del análisis de las diferentes fuentes de datos y diferentes visualizaciones que existen actualmente, decidimos usar 2 que contenían la mayoría de datos que consideramos importantes para nuestro análisis, ambos dataset son de entidades oficiales del gobierno nacional. Los dataset elegidos fueron:
                                </p>
                                <ul>
                                    <li>Casos positivos de COVID-19 en Colombia (232.475 KB)
                                        <p>
                                            <a href="https://www.datos.gov.co/en/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia/gt2j-8ykr">https://www.datos.gov.co/en/Salud-y-Protecci-n-Social/</a>
                                        </p>
                                    </li>
                                    <li>Uso de UCI en Bogotá (8KB)
                                        <p>
                                            <a href="https://saludata.saludcapital.gov.co/osb/index.php/datos-de-salud/enfermedades-trasmisibles/ocupacion-ucis/">https://saludata.saludcapital.gov.co/osb/index.php/</a>
                                        </p>
                                    </li>
                                </ul>
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
                                <img src={analisis} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://img.freepik.com/vector-gratis/ilustracion-concepto-analisis_114360-1119.jpg?size=338&ext=jpg</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                                <p>
                                    Se hizo una exploración inicial de los datos en cuanto a cantidad de datos, cantidad de columnas y peso de cada dataset.
                                </p>
                                <p>
                                    Por una parte el dataset de “Uso de UCI en Bogotá” es un dataset sencillo, con apena 8KB de peso, 245 registros y 4 columnas (Fecha, Camas UCI ocupadas Covid-19, Camas UCI Disponibles COVID 19, Ocupación UCI COVID 19).
                                </p>
                                <p>
                                    Por otra parte el dataset “Casos positivos de COVID-19 en Colombia” es un dataset muy pesado con 232.475 KB, más de un millón de registros y 23 columnas.
                                </p>
                                <p>
                                    Desde esta etapa se pudo ver que el dataset debía ser filtrado para que su procesamiento fuera más ágil. 
                                </p>
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