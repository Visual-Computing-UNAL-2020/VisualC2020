import React from 'react'
import Sketch from 'react-p5';
//image
import fullcolor from '../../Assets/fullcolor.jpg'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col,Card} from 'react-bootstrap'

var img

class Grayscale extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            pixels:[]
        }
    }
    setup=(p5,parent)=>{
        p5.createCanvas(this.props.w,this.props.h).parent(parent);
        img = p5.loadImage(fullcolor);
        
    }
    draw=(p5)=>{
        p5.image(img,0,0,p5.width,p5.height);
        p5.loadPixels();
        for (let x = 0; x < p5.width; x++) {
            for (let y = 0; y < p5.height; y++) {
                let loc = x+y*p5.width;
                let r = p5.red(p5.pixels[loc]);
                let g = p5.green(p5.pixels[loc]);
                let b = p5.blue(p5.pixels[loc]);
                p5.pixels[loc]=p5.color((r*0.3)+(g*0.3)+(b*0.3));
            }
        }
        p5.updatePixels();

    }

    render(){
        return(
            <Sketch setup={this.setup} draw={this.draw}></Sketch>
        )
    }

}

export default Grayscale