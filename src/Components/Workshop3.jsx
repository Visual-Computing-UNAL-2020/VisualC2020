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
class Workshop3 extends React.Component{

    render(){
        return(
            <Container id="fullpage">
                <Card >
                    <Card.Body>
                        <h3 className="display-5 text-danger text-center">Taller iuminacion</h3>
                        <hr className="my-3 border border-secondary  border-2"/>

                        <h4>Ambient light</h4>

                        <p>Con la iluminacion AmbientLight las formas son planas ya que se multiplica el color del mateiral por la color por la intenisdad, esto no tiene dirección. La iluminacioón ambiental no es tan buena porque en realidas solo cambia el color de todo en la escena.</p>
                        <div className="text-center">
                        
                        </div>


                        <h4>Light attenuation</h4>

                        <p>Una propiedad básica de la luz es que pierde su intensidad cuanto más se aleja de su fuente. En el mundo físico, la atenuación es proporcional a 1 / d2 , donde des la distancia entre la fuente de luz y un objeto. El uso de la función 1 / d 2 hace que la luz disminuya muy rápidamente, por lo que es común hacer que la atenuación sea proporcional a 1 / d. </p>
                        <div className="text-center">
                            
                        </div>
                        
                                
                        
                        
                        <Card className="jumbotron bg-white">

                        </Card>
                    </Card.Body>
                </Card>

            </Container>
        )
    }
}

export default Workshop3