import React from 'react'
import Sketch from 'react-p5'

class SteppingFeetCanvas extends React.Component {

    constructor(props){
        super(props);
        this.state={
            move : Number,
            s : Number,
            step : Number
        }
    }

    setup=(p5,parent)=>{
        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent)

        this.setState({
            move: this.props.canvasW/2,
            s: 1,
            step: 15
        })

    }
    draw=(p5)=>{
        p5.background(256,256,256);
        if (p5.mouseIsPressed == false) {       //horizontal lines
            p5.strokeWeight(15);                // weight lines
            p5.stroke(0, 0, 0);                 // black lines
            for (var i = 0; i <= this.props.canvasW; i++){

                if (i%2==1){
                    p5.line(i*this.state.step, 0, i*this.state.step, this.props.canvasH);
                }
            }
        }

        p5.noStroke();                                   // Rectangles
        p5.fill(0,0,130);                               // Blue one
        p5.rect(this.state.move, 200, 65, 30);
        p5. fill(256,256,0);                            // Yellow one
        p5.rect(this.state.move, 100, 65, 30);
        this.setState({
            move: this.state.move + this.state.s*0.90, // Movement increment
            s: this.state.s,
            step: this.state.step
        })
        if (this.state.move>(this.props.canvasW-70)){
            this.setState({
                move: this.state.move, // Movement increment
                s: -1,
                step: this.state.step
            })
        }
        if (this.state.move<0){
            this.setState({
                move: this.state.move, // Movement increment
                s: +1,
                step: this.state.step
            })
        }

    }

    send=()=>{
        this.props.callbackPixels(this.state.pixels,this.state.w,this.state.h);
    }

    render(){
        return(
            <Sketch setup={this.setup} draw={this.draw}></Sketch>
        )
    }

}

export default SteppingFeetCanvas