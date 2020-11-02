import React from 'react'
import Sketch from 'react-p5'

var angle=0;
var num=0;
var circles = true;
class BreathingSquare extends React.Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    setup=(p5,parent)=>{
        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent)
        angle= p5.PI/4;
        circles = true;
    }
    draw=(p5)=>{
        p5.background(255,255,255);
        this.bigCuadrado(p5);
        this.cuadrados(p5);
        num=num+0.02;
    }
    bigCuadrado=(p5)=>{
        p5.push();
        p5.stroke(0,0,0);
        p5.fill(0,0,0);
        p5.translate(250,250);
        p5.rotate(angle*num);
        p5.rect(-150,-150,300,300);
        p5.pop();
    };
    cuadrados=(p5)=>{
        if(circles){
            p5.push();
            p5.stroke(250,235,3);
            p5.fill(250,235,3);
            p5.rect(0,0,225,225);
            p5.rect(0,275,225,225);
            p5.rect(275,0,225,225);
            p5.rect(275,275,225,225);
            p5.pop();
        }
    }
    mouseClicked=(p5)=>{
        circles=!circles;
    }
  
    send=()=>{
        this.props.callbackPixels(this.state.pixels,this.state.w,this.state.h);
    }

    render(){
        return(
            <Sketch setup={this.setup} draw={this.draw} mouseClicked={this.mouseClicked}></Sketch>
        )
    }

}

export default BreathingSquare