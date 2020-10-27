import React from 'react'


//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'
import { Table } from 'react-bootstrap';
//css
import '../styles/Workshops.css'

class Workshop2 extends React.Component{
    render(){
        return(
            <Container id="fullpage">
                <Card >
                    <Card.Body>
                        <h4 className="display-5 text-danger">Taller ilusiones ópticas</h4>
                        <hr className="my-3 border border-secondary  border-2"/>
                        <h5> Tareas</h5>
                        <p>Implementar al menos 6 ilusiones de tres tipos distintos (paradójicas, geométricas, ambiguas, etc.), al menos dos con movimiento y dos con interactividad</p>
                        <hr className="my-3 border border-secondary  border-2"/>
                        <h5> Discusión</h5>
                        <p>1. Complete la tabla</p>
                        <Table striped bordered hover size="sm">
                            <thead style={ {backgroundColor: 'rgba(50, 115, 220, 0.4)'}}>
                            <tr>
                                <th>Ilusión</th>
                                <th>Categoria</th>
                                <th>Referencia</th>
                                <th>Tipo de interactividad (si aplica)</th>
                                <th>URL código base (si aplica)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>ilusionName1</td>
                                <td>ilusionCategory1</td>
                                <td>ilusionReference1</td>
                                <td>ilusionInteractiveType1</td>
                                <td>url1</td>
                            </tr>
                            <tr>
                                <td>ilusionName2</td>
                                <td>ilusionCategory2</td>
                                <td>ilusionReference2</td>
                                <td>ilusionInteractiveType2</td>
                                <td>url2</td>
                            </tr>
                            <tr>
                                <td>ilusionName3</td>
                                <td>ilusionCategory3</td>
                                <td>ilusionReference3</td>
                                <td>ilusionInteractiveType3</td>
                                <td>url4</td>
                            </tr>
                            <tr>
                                <td>ilusionName4</td>
                                <td>ilusionCategory4</td>
                                <td>ilusionReference4</td>
                                <td>ilusionInteractiveType4</td>
                                <td>url4</td>
                            </tr>
                            <tr>
                                <td>ilusionName5</td>
                                <td>ilusionCategory5</td>
                                <td>ilusionReference5</td>
                                <td>ilusionInteractiveType5</td>
                                <td>url5</td>
                            </tr>
                            <tr>
                                <td>ilusionName6</td>
                                <td>ilusionCategory6</td>
                                <td>ilusionReference6</td>
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