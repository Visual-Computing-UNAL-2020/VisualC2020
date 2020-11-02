import React from 'react'
import Sketch from 'react-p5'
import Circles from './Circles';

var circles = true;
class HeringIllusion extends React.Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    setup=(p5,parent)=>{
        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent)
        circles= true;
    }
    draw=(p5)=>{
        p5.background(255);
        if(circles){
            this.circulos(p5);
        }
        this.lineas(p5);
    }
    lineas=(p5)=>{
        p5.push();
        p5.stroke(255,0,0);
        p5.strokeWeight(3);
        p5.line(100,0,0,100);
        p5.line(300,0,0,300);
        p5.line(500,0,0,500);
        p5.line(600,100,100,600);
        p5.line(600,300,300,600);
        p5.line(600,500,500,600);

        p5.line(500,0,600,100);
        p5.line(300,0,600,300);
        p5.line(100,0,600,500);
        p5.line(0,100,500,600);
        p5.line(0,300,300,600);
        p5.line(0,500,100,600);

        p5.pop();
    };
    circulos=(p5)=>{
        let d= 199;
        p5.push();
        p5.stroke(0);
        p5.strokeWeight(2);
        p5.noFill();
        this.multicircle(p5,100,100,d);
        this.multicircle(p5,100,300,d);
        this.multicircle(p5,100,500,d);

        this.multicircle(p5,300,100,d);
        this.multicircle(p5,300,300,d);
        this.multicircle(p5,300,500,d);

        this.multicircle(p5,500,100,d);
        this.multicircle(p5,500,300,d);
        this.multicircle(p5,500,500,d);
        p5.pop();
    }
    multicircle=(p5,x,y,diameter)=>{
        let d= diameter;
        for (let i = 1; i <= 6; i++) {
            p5.circle(x,y,d);
            d = d-35;       
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

export default HeringIllusion