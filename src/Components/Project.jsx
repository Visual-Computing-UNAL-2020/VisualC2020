import React from 'react'

//images
import covid from '../Assets/profundizacion/covid19.jpg'
import coronapp from '../Assets/profundizacion/coronapp.jpg'
import nueva from '../Assets/profundizacion/nueva.png'
import dataset from '../Assets/profundizacion/dataset.jpg'
import analisis from '../Assets/profundizacion/analisis.jpg'
import filtro from '../Assets/profundizacion/filtro.jpg'
import mapa from '../Assets/profundizacion/mapa.png'
import reporte from '../Assets/profundizacion/reporte.jpg'
import todo from '../Assets/profundizacion/todo.jpg'
import data from '../Assets/profundizacion/data.jpg'
import ver from '../Assets/profundizacion/ver.png'
import google from '../Assets/profundizacion/google.PNG'
import jhu from '../Assets/profundizacion/jhu.PNG'
import colombia from '../Assets/profundizacion/colombia.PNG'
import bogota from '../Assets/profundizacion/bogota.PNG'
import ccb from '../Assets/profundizacion/ccb.PNG'
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
                            <h3>¿Qué localidades, géneros, edades, días han sido los más afectados durante esta pandemia?</h3>
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
                                <p>
                                    Conocer patrones en nuestro país y poderlo comparar puede ser un ejercicio importante para el manejo de virus como el actual, este tipo de análisis nos permite ver si hay localidades con mejor o peor índices de contagios y de muertes, si hay dias específicos de la semana con un patrón específico, si quizás hay un género con mayor incidencia al contagio, etc.
                                </p>
                                <p>
                                    Muchas han sido las medidas que ha tomado la alcaldía, seguirle el paso a los decretos expedidos por uno u otro ente gubernamental no es tarea fácil, cada uno de ellos intentando tomar la mejor decisión con los análisis que sus equipos hacen, sin embargo desde nuestra perspectiva estos datos y decisiones deberían ser de conocimiento público, de manera que la ciudadanía y demás entes gubernamentales puedan tener conocimiento de los análisis y datos tenidos en cuenta para dichas decisiones. 
                                </p>
                                <p>
                                    Es por esto que queremos hacer esta profundización en visualización de datos, que no se centra exclusivamente en la aplicación de una tecnología específica a un conjunto de datos sino que pretende ser un primer paso para el análisis de los datos de esta pandemia en el contexto Bogotáno.
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
                            <h3>Datasets</h3>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                <img src={data} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">http://emb.cl/gerencia/noticia.mvc?nid=20191010p1&ni=sap-anuncia-rediseno-de-hana-y-data-warehouse</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                                <p>
                                    Para este análisis encontramos muchas fuentes de información tanto nacional como internacional, algunas no eran claras en la obtención de estos datos y otras parecían tener información desactualizada, algunos dataset los encontramos en los siguientes sitios:
                                </p>
                 
                                <ul>
                                    <li>https://datosabiertos.bogota.gov.co/</li>
                                    <li>https://saludata.saludcapital.gov.co/</li>
                                    <li>https://www.datos.gov.co/</li>
                                </ul>
                               
                            </Col>
                            
                        </Row>
                        <Row >
                            <h3>Visualización</h3>
                            
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                <img src={ver} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://medium.muz.li/guide-to-data-visualization-comparison-part-1-678382ceef00</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                            <p>También encontramos muchas iniciativas de visualización de datos del contexto nacional, algunas de ellas fueron:</p>

                                <h4>Google</h4>
                                <p>
                                    Presenta estadísticas de los casos positivos y muertes de todo el mundo, algunos de los gráficos que muestra son mapa interactivo, gráfico de casos diarios y un gráfico de muertes diarias que se puede filtrar por país y en algunos casos por ciudad.
                                    https://news.google.com/covid19/

                                </p>
                                <img src={google} id="covid" className="img-fluid" alt="Responsive image"/>
                               

                                <h4>Universidad Johns Hopkins</h4>
                                <p>
                                    El centro de ciencia e ingeniería de sistemas de la Universidad Johns Hopkins presenta un mapa donde muestra la cantidad de contagios por ciudad. Algo que cabe resaltar es que el código de la visualización así como el lugar de donde sacan los datos está expuesto públicamente en un repositorio de GitHub
                                    https://github.com/CSSEGISandData/COVID-19
                                    https://coronavirus.jhu.edu/map.html
                                </p>
                                <img src={jhu} id="covid" className="img-fluid" alt="Responsive image"/>


                                <h4>Gobierno Nacional de Colombia</h4>
                                <p>
                                    En varias páginas oficiales el Gobierno nacional ha decidido mostrar gráficas de con información principalmente de contagios, muertes y ocupación de las UCI de cada día, haciendo especial énfasis en la sumatoria de los datos importantes como casos activos, recuperados, fallecidos, pruebas procesadas, etc.
                                    https://coronaviruscolombia.gov.co/Covid19/index.html
                                    https://www.minsalud.gov.co/salud/publica/PET/Paginas/Covid-19_copia.aspx
                                    http://www.ins.gov.co/Noticias/Paginas/Coronavirus.aspx
                                </p>
                                <img src={colombia} id="covid" className="img-fluid" alt="Responsive image"/>


                                <h4>Alcaldía Mayor de Bogotá</h4>
                                <p>
                                    La muestra gráficos y datos tras la recopilación, depuración y seguimiento de los casos confirmados, realizado por la Subsecretaría de Salud Pública, de la Secretaría Distrital de Salud, y procesados por La Red Distrital de Laboratorios.
                                    https://saludata.saludcapital.gov.co/osb/index.php/datos-de-salud/enfermedades-trasmisibles/covid19/
                                </p>  
                                <img src={bogota} id="covid" className="img-fluid" alt="Responsive image"/>
                      
                            
                                <h4>Cámara de Comercio de Bogotá</h4>
                                <p>
                                    El observatorio de la CCB muestra varios gráficos y mapas con la información del gobierno nacional y distrital dándole un énfasis desde lo financiero , los principales impactos en el crecimiento, el empleo y en la actividad empresarial, especialmente en las micro y pequeñas empresas que son el 97% de la estructura empresarial de Bogotá y la región. También se incluyen los resultados de las encuestas a los empresarios realizadas.
                                    https://www.ccb.org.co/observatorio/Economia/Economia-dinamica-incluyente-e-innovadora/Impacto-del-COVID-19

                                </p>     
                                <img src={ccb} id="covid" className="img-fluid" alt="Responsive image"/>
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
                                    <li>Casos confirmados de COVID-19 en Bogotá D.C. (29.309 KB)
                                        <p>
                                            <a href="https://saludata.saludcapital.gov.co/osb/index.php/datos-de-salud/enfermedades-trasmisibles/covid19/">https://saludata.saludcapital.gov.co/osb/index.php/</a>
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
                                Por otra parte el dataset “Casos confirmados de COVID-19 en Bogotá D.C” es un dataset pesado con 29.309 KB, casi 400.000 registros y 11 columnas.
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
                                <img src={filtro} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://es.123rf.com/photo_63445004_filtro-de-datos-an%C3%A1lisis-de-datos-en-el-concepto-de-dispositivo-m%C3%B3vil.html</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                                <p>
                                    Haciendo un análisis de cada dataset se pudo ver que no todas las columnas del dataset eran importantes, sin embargo era importante cada uno de los registros por lo que consideramos que no era adecuado hacer un muestreo de los datos recopilados. 
                                </p>
                                <p>
                                    En el dataset de “Uso de UCI en Bogotá” dejamos las columnas todas las columnas, en un principio quitamos la columna de “Ocupación UCI COVID 19” ya que esta muestra el porcentaje de uso de las UCI y para nuestro análisis pareciera no tener importancia, sin embargo decidimos dejarlo para analizar si tenían alguna correlación el crecimiento de UCI disponibles con las medidas adoptadas por la Administración Distrital.
                                </p>
                                <p>
                                    Finalmente en el dataset “Casos confirmados de COVID-19 en Bogotá D.C.” se decidió dejar las columnas (FECHA_DIAGNOSTICO, LOCALIDAD_ASIS,	EDAD,	SEXO, ESTADO) y se quitaron otras como el id del caso, la ciudad, ya que todos los datos son de bogotá, la fuente de contagio, etc.
                                </p>
                                <p>
                                    Cabe destacar que los dataset no vienen en un formato cvs y tienen algunos comentarios informativos al principio y al final del dataset, por lo que fue necesario un pretratamiento manual de los dataset iniciales para dejarlos en un formato adecuado para el procesamiento.
                                </p>

                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Representación e interactividad</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                <img src={reporte} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://www.smartdatacollective.com/top-7-data-analytics-tools/</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                                <p>
                                    Elegimos para una primera iteración un mapa capaz de delimitar las localidades de bogotá con el fin de mostrar en cada una círculos proporcionales las diferentes métricas elegidas como el género, edad, localidad, etc. Esto lo decidimos ya que consideramos importante mostrar la relación de contagio vs el área de cada localidad.
                                </p>
                                <p>
                                    Esto se desarrolló haciendo uso del api de Google Maps y en el lenguaje de programación JavaScript sin ningún framework
                                </p>
                                <p>
                                    <img src={mapa} id="covid" className="img-fluid" alt="Responsive image"/>
                                </p>
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>
                <hr className="hr-start"/>
                <Card>
                    <Card.Body>
                        <Row >
                            <h2>Trabajo Futuro</h2>
                        </Row>
                        <Row >
                            <Col className="col-sm-5">
                                <img src={todo} id="covid" className="img-fluid" alt="Responsive image"/>
                                <blockquote class="blockquote">
                                    <footer class="blockquote-footer"><cite title="Tomado de:">https://www.workflowmax.com/blog/6-things-that-arent-on-your-daily-to-do-list-but-should-be</cite></footer>
                                </blockquote>
                            </Col>
                            <Col className="col-sm-7">
                            
                                <p>
                                   Si bien la vista de mapa nos puede dar una visualización general de las localidades en comparación del área ocupada por las mismas en algunos análisis es más comprensible en con gráficos de barras por lo que sería muy útil usar este tipo de graficos con los mismos controles de interacción.
                                </p>
                                <p>
                                    Algo importante en la comparación de comportamiento es poder ajustar el rango de fechas que se grafica, por lo que un control de fecha inicial y fecha final sería muy pertinente para este tipo de análisis.
                                </p>
                                <p>
                                    Poder ver una animación que simula un recorrido dia a dia de las gráficas puede mostrar de manera interactiva los comportamientos de estas gráficas, por lo que agregar un boton de que permita ejecutar la animación y otro que permita modificar la velocidad de la misma puede ser muy útil para el análisis y distinción de patrones.
                                </p>
                                <p>
                                    Elegir el dataset del gobierno nacional y tomando los municipios en lugar de las localidades, permitiría hacer estos mismos análisis pero en un contexto nacional, lo cual podría ser interesante para comparaciones de comportamientos con bogotá.
                                </p>
                                
                            </Col>
                            
                        </Row>
                    </Card.Body>
                </Card>                 

            </Container>
        )
    }
}
export default home