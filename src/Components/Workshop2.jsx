import React from 'react'


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Table } from 'react-bootstrap';

//css
import '../styles/Workshops.css'
import SteppingFeetCanvas from "./p5/Workshop2-Canvas/SteppingFeetCanvas";
//import Canvas1 from "./p5/Canvas1";
import EbbinghausCanvas from "./p5/Workshop2-Canvas/EbbinghausCanvas";
import PenroseTriangleCanvas from "./p5/Workshop2-Canvas/PenroseTriangleCanvas";
import BreathingSquare from "./p5/Workshop2-Canvas/BreathingSquare";
import Circles from "./p5/Workshop2-Canvas/Circles";
import HermannGrid from "./p5/Workshop2-Canvas/HermannGrid";
import HeringIllusion from "./p5/Workshop2-Canvas/HeringIllusion"
class Workshop2 extends React.Component{

    render(){
        return(
            <Container id="fullpage">
                <Card >
                    <Card.Body>
                        <h3 className="display-5 text-danger text-center">Taller ilusiones ópticas</h3>
                        <hr className="my-3 border border-secondary  border-2"/>
                        <h4> Tareas</h4>
                        <p>Implementar al menos 6 ilusiones de tres tipos distintos (paradójicas, geométricas, ambiguas, etc.), al menos dos con movimiento y dos con interactividad</p>
                        <ul>
                            <li>
                                <h5> “Stepping feet” Motion Illusion</h5>
                                <br/>
                                <p>“Stepping feet” Motion Illusion es un fenómeno de percepción de movimiento que involucra dos 'buses', uno azul y otro amarillo. Aunque ambos buses se mueven a una velocidad constante, su velocidad percibida varía dramáticamente, cuando el autobús azul se encuentra sobre las franjas blancas, el contraste es alto (azul oscuro frente a blanco) y fácilmente visible, por lo que parece moverse más rápido que su velocidad. Por el contrario, cuando el bus azul está contra las franjas negras, el contraste es bajo (azul oscuro contra negro) y más difícil de ver, por lo que el movimiento parece más lentoreal.

                                    En general, los movimientos de mayor contraste se ven más rápido que aquellos con menor contraste. El efecto desaparece cuando se elimina la textura rayada de la calle porque no queda contraste, mostrando cómo el fondo de un objeto puede tener un efecto significativo en su velocidad percibida. </p>
                                <br/>
                                <div className="text-center">
                                    <SteppingFeetCanvas canvasW={700} canvasH={400}></SteppingFeetCanvas>
                                </div>
                                <br/>
                            </li>
                            <li>
                                <h5> EbbinghausCanvas Illusion </h5>
                                <br/>

                                La ilusión de Ebbinghaus consiste en un círculo rodeado en una imagen por círculos más pequeños y en otra por círculos más grandes. El espectador tiende a percibir el círculo rodeado por círculos más pequeños como más grande que el círculo en la otra imagen, aunque ambos son exactamente del mismo tamaño.

                                La diferencia en la percepción del tamaño se debe a las señales visuales circundantes (círculos circundantes más grandes o más pequeños) y la forma en que el cerebro procesa estas señales visuales.

                                <br/>
                                <br/>
                                <div className="text-center">
                                    <EbbinghausCanvas canvasW={900} canvasH={600}></EbbinghausCanvas>
                                </div>
                                <br/>
                            </li>
                            <li>
                                <h5> Breathing Square</h5>
                                <p>En las "ilusiones que respiran", las superficies que giran rígidamente parecen deformarse, aunque un proceso sencillo de interpolación geométrica a través del espacio reconstruiría el límite de la superficie verídica. En general, se cree que tal resultado no rígido depende de la imposibilidad de aplicar una restricción de rigidez a través de discontinuidades espacio-temporales.</p>
                                <div className="text-center">
                                    <BreathingSquare canvasW={500} canvasH={500}></BreathingSquare>
                                </div>
                            </li>
                            <li>
                                <h5> Fraser spiral illusion</h5>
                                <p>La ilusión es también conocida como la espiral falsa, o por su nombre original, la ilusión del cordón retorcido. La superposición de arcos segmentados en blanco y negro aparenta formar una espiral; aunque en realidad los arcos son una serie de círculos concéntricos.</p>
                                <p>La distorsión visual está producida por la combinación de un patrón de líneas regulares con partes desalineadas. La ilusión de Zöllner la  y la ilusión de la pared de la cafetería están basadas en un principio similar, como muchos otros efectos visuales, en los que una secuencia de elementos inclinados causa que se perciban giros irreales y desviaciones.</p>
                                <div className="text-center">
                                   <Circles canvasW={650} canvasH={585} ></Circles>
                                </div>
                            </li>
                            <li>
                                <h5> Hermann Grid</h5>
                                <p>La ilusión se caracteriza por manchas grises "fantasmales" percibidas en las intersecciones de una cuadrícula blanca (o de color claro) sobre un fondo negro. Las manchas grises desaparecen al mirar directamente a una intersección.</p>
                                <p>Esta ilusión a menudo se explica por un proceso neural llamado inhibición lateral .  La intensidad en un punto del sistema visual no es simplemente el resultado de un solo receptor , sino el resultado de un grupo de receptores que responden a la presentación de estímulos en lo que se llama un campo receptivo.</p>

                                <div className="text-center">
                                    <HermannGrid canvasW={400} canvasH={400}></HermannGrid>
                                </div>
                            </li>
                            <li>
                                <h5> Hering Illusion</h5>
                                <p>La ilusión de Hering es una de las ilusiones geométrico-ópticas y fue descubierta por el fisiólogo alemán Ewald Hering en 1861. Cuando se presentan dos líneas rectas y paralelas frente a un fondo radial (como los radios de una bicicleta), las líneas parecen como si estuvieran inclinadas hacia afuera.</p>
                                <p>Hay varias explicaciones posibles de por qué la distorsión perceptiva producida por el patrón radiante. Hering atribuyó la ilusión a una sobreestimación del ángulo formado en los puntos de intersección. Si es cierto, entonces la rectitud de las líneas paralelas cede a la de las líneas radiantes, lo que implica que existe un orden jerárquico entre los componentes de tal ilusión. Otros han sugerido que la sobreestimación del ángulo es el resultado de la inhibición lateral en la corteza visual, mientras que otros han postulado un sesgo inherente a la extrapolación de información de ángulos 3D a partir de proyecciones 2D.</p>
                              
                                <div className="text-center">
                                    <HeringIllusion canvasW={600} canvasH={600}></HeringIllusion>
                                </div>
                            </li>
                        </ul>
                        <hr className="my-3 border border-secondary  border-2"/>
                        <h4> Discusión</h4>
                        <p>1. Complete la tabla</p>
                        <Table striped bordered hover size="sm">
                            <thead style={ {backgroundColor: 'rgba(50, 115, 220, 0.4)'}} className="text-center p-0">
                            <tr>
                                <th>Ilusión</th>
                                <th>Categoria</th>
                                <th>Referencia</th>
                                <th>Tipo de interactividad (si aplica)</th>
                                <th>URL código base (si aplica)</th>
                            </tr>
                            </thead>
                            <tbody className="text-center">
                            <tr>
                                <td>Stuart Anstis ilusion</td>
                                <td>Movimiento</td>
                                <td><a href="https://michaelbach.de/ot/mot-feetLin/index.html">Click</a></td>
                                <td>Si se hace click en el canvas, se retiran las lineas de fondo</td>
                                <td>- - -</td>
                            </tr>
                            <tr>
                                <td>Ebbinghaus Illusion</td>
                                <td> </td>
                                <td><a href="https://michaelbach.de/ot/cog-Ebbinghaus/index.html">Click</a></td>
                                <td>Los círculos azules desaparecen al hacer click</td>
                                <td>- - -</td>
                            </tr>
                            <tr>
                                <td>Breathing Square</td>
                                <td>Movimiento / Geometrica / Distorsionante</td>
                                <td><a href="https://michaelbach.de/ot/mot-breathingSquare/index.html">Click</a></td>
                                <td>Al hacer click desaparecen los cuadrados amarillos lo que devela la ilusion</td>
                                <td>- - -</td>
                            </tr>
                            <tr>
                                <td>Fraser spiral illusion</td>
                                <td>Geometrica </td>
                                <td><a href="https://en.wikipedia.org/wiki/Fraser_spiral_illusion">Click</a></td>
                                <td>Al hacer click se superponen lineas circulares que develan que no existen espirales</td>
                                <td>- - -</td>
                            </tr>
                            <tr>
                                <td>Hermann Grid</td>
                                <td>Geometrica</td>
                                <td><a href="https://michaelbach.de/ot/lum-herGrid/index.html">Click</a></td>
                                <td>Cuando miramos la imagen aparecen parches negros en las intersecciones aun cuando no existen </td>
                                <td>- - -</td>
                            </tr>
                            <tr>
                                <td>Hering Illusion</td>
                                <td>Geometrica</td>
                                <td><a href="https://michaelbach.de/ot/ang-hering/index.html">Click</a></td>
                                <td>Las lineas Parecen estar torcidas pero al hacer Clic se devela que son Totalmente rectas </td>
                                <td>- - -</td>
                            </tr>
                            </tbody>
                        </Table>
                        <br/>
                        <br/>
                        <p>2. Describa brevememente las referencias estudiadas y los posibles temas en los que le gustaría profundizar</p>
                        <Card className="jumbotron bg-white">

                        </Card>
                    </Card.Body>
                </Card>

            </Container>
        )
    }
}

export default Workshop2
