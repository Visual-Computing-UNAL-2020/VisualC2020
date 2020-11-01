import React from 'react'


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Table } from 'react-bootstrap';

//css
import '../styles/Workshops.css'
import SteppingFeetCanvas from "./p5/Workshop2-Canvas/SteppingFeetCanvas";
import Canvas1 from "./p5/Canvas1";
import EbbinghausCanvas from "./p5/Workshop2-Canvas/EbbinghausCanvas";
import PenroseTriangleCanvas from "./p5/Workshop2-Canvas/PenroseTriangleCanvas";

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
                                <div className="text-center">
                                    <SteppingFeetCanvas canvasW={700} canvasH={400}></SteppingFeetCanvas>
                                </div>
                                <br/>
                            </li>
                            <li>
                                <h5> EbbinghausCanvas Illusion </h5>
                                <br/>
                                <div>
                                    <EbbinghausCanvas canvasW={900} canvasH={600}></EbbinghausCanvas>
                                </div>
                                <br/>
                            </li>
                            <li>
                                <h5> Penrose Triangle</h5>
                                <div className="text-center">
                                    <PenroseTriangleCanvas canvasW={700} canvasH={600}></PenroseTriangleCanvas>
                                </div>
                            </li>
                            <li>
                                <h5> IlusionName4</h5>
                                <div>

                                </div>
                            </li>
                            <li>
                                <h5> IlusionName5</h5>
                                <div>

                                </div>
                            </li>
                            <li>
                                <h5> IlusionName6</h5>
                                <div>

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
                                <td>Penrose Triangle</td>
                                <td>Paradoxal</td>
                                <td><a href="https://michaelbach.de/ot/mot-feetLin/index.html">Click</a></td>
                                <td>Cambia los colores al hacer click</td>
                                <td>- - -</td>
                            </tr>
                            <tr>
                                <td>ilusionName4</td>
                                <td>ilusionCategory4</td>
                                <td><a href="https://michaelbach.de/ot/mot-feetLin/index.html">Click</a></td>
                                <td>ilusionInteractiveType4</td>
                                <td>url4</td>
                            </tr>
                            <tr>
                                <td>ilusionName5</td>
                                <td>ilusionCategory5</td>
                                <td><a href="https://michaelbach.de/ot/mot-feetLin/index.html">Click</a></td>
                                <td>ilusionInteractiveType5</td>
                                <td>url5</td>
                            </tr>
                            <tr>
                                <td>ilusionName6</td>
                                <td>ilusionCategory6</td>
                                <td><a href="https://michaelbach.de/ot/mot-feetLin/index.html">Click</a></td>
                                <td>ilusionInteractiveType6</td>
                                <td>url6</td>
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