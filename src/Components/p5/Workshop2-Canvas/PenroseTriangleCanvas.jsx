import React from 'react'
import Sketch from 'react-p5'

class PenroseTriangleCanvas extends React.Component {

    constructor(props){
        super(props);
        this.state={
            red: Number,
            blue: Number,
            green: Number,
            cst: Number
        }
    }

    setup=(p5,parent)=>{

        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent)
        p5.background(255);
        this.setState({
            red: p5.color(142,9,40),
            blue: p5.color(20,14,201),
            green: p5.color(229,197,13),
            cst: Math.sqrt(3)/2
        })

    }
    draw=(p5)=>{
        p5.strokeWeight(2);

        var dec = 70;
        p5.fill(256,256,256);                           // White one
        p5.triangle(250., 350., 350., 350., 300., 350- this.state.cst*100.);
        //LEFT      //RIGHT    //HIGH   Angles
        p5.strokeWeight(0);
        p5.point(300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec); //HIGH
        p5.point(350. +dec, 350.);                       //RIGHT
        p5.point(250. -0.5*dec, 350. +this.state.cst*dec);          //LEFT

        p5.strokeWeight(0);                             //HIGH
        p5.point(300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec -2*dec*this.state.cst);        //left
        p5.point(300. -0.5*dec +dec, 350- this.state.cst*100. -this.state.cst*dec -2*dec*this.state.cst);   //right

        p5.strokeWeight(0);                            //RIGHT
        p5.point(350. +(5./2)*dec, 350. +this.state.cst*dec);                         //right
        p5.point(350. +2*dec, 350. +2*this.state.cst*dec);                            //left

        p5.strokeWeight(0);                            //LEFT
        p5.point(250. -(5./2)*dec, 350. +this.state.cst*dec);                         //left
        p5.point(250. -2*dec, 350. +2*this.state.cst*dec);                            //right

        p5.strokeWeight(3);
        p5.stroke(0);
        p5.fill(this.state.red);                   // Red
        p5.quad(350., 350., 350. +dec, 350., 300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec -2*dec*this.state.cst, 300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec);
        p5.quad(300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec -2*dec*this.state.cst, 300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec, 250. -2*dec, 350. +2*this.state.cst*dec, 250. -(5./2)*dec, 350. +this.state.cst*dec);
        p5.stroke(this.state.red);
        p5.line(300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec -2*dec*this.state.cst +6, 300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec);

        p5.strokeWeight(3);
        p5.stroke(0);
        p5.fill(this.state.blue);               // Blue
        p5.quad(300., 350- this.state.cst*100., 300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec, 250. -2*dec, 350. +2*this.state.cst*dec, 250. -0.5*dec, 350. +this.state.cst*dec);
        p5.quad(250. -2*dec, 350. +2*this.state.cst*dec, 250. -0.5*dec, 350. +this.state.cst*dec, 350. +(5./2)*dec, 350. +this.state.cst*dec, 350. +2*dec, 350. +2*this.state.cst*dec);
        p5.stroke(this.state.blue);
        p5.strokeWeight(4);
        p5.line(250. -2*dec +5, 350. +2*this.state.cst*dec -3, 250. -0.5*dec, 350. +this.state.cst*dec);

        p5.strokeWeight(3);
        p5.stroke(0);
        p5.fill(this.state.green);               // Green
        p5.quad(300. -0.5*dec, 350- this.state.cst*100. -this.state.cst*dec -2*dec*this.state.cst, 300. -0.5*dec +dec, 350- this.state.cst*100. -this.state.cst*dec -2*dec*this.state.cst, 350. +(5./2)*dec, 350. +this.state.cst*dec, 350. +dec, 350.);
        p5.quad(350. +(5./2)*dec, 350. +this.state.cst*dec, 350. +dec, 350, 250., 350., 250. -0.5*dec, 350. +this.state.cst*dec);
        p5.stroke(this.state.green);
        p5.strokeWeight(4.5);
        p5.line(350. +dec +3, 350. +2, 350. +(5./2)*dec -7, 350. +this.state.cst*dec -4);

    }

    comparar=(arreglo1,arreglo2)=>{
        for (let i = 0; i < arreglo1.length; i++) {
            if(arreglo1[i]!=arreglo2[i]){
                return false;
            }
        }
        return true;
    }

    mouseClicked=(p5)=> {
        var color = this.state.red;
        this.setState({
            red: this.state.blue,
            blue: this.state.green,
            green: color,
            cst: this.state.cst
        })
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

export default PenroseTriangleCanvas