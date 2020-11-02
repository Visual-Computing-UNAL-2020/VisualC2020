import React from 'react'
import Sketch from 'react-p5'


class HermannGrid extends React.Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    setup=(p5,parent)=>{
        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent)

    }
    draw=(p5)=>{
        p5.background(0);
        for (let i = 50; i < this.props.canvasW; i += 50) {
            for (let j = 50; j < this.props.canvasH; j += 50) {
            p5.stroke(200)
            p5.strokeWeight(10)
            p5.line(0, i, this.props.canvasW, i)
            p5.line(j, 0, j, this.props.canvasH)
            }
        }
        
        for (let i = 50; i < this.props.canvasW; i += 50) {
            for (let j = 50; j < this.props.canvasH; j += 50) {
            //p5.stroke(255)

            p5.circle(i,j,5)
            }
        }
    }

  
    send=()=>{
        this.props.callbackPixels(this.state.pixels,this.state.w,this.state.h);
    }

    render(){
        return(
            <Sketch setup={this.setup} draw={this.draw} ></Sketch>
        )
    }

}

export default HermannGrid