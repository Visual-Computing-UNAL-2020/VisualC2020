import React from 'react'
import Sketch from 'react-p5'

class EbbinghausCanvas extends React.Component {

    constructor(props){
        super(props);
        this.state={
            color: Number
        }
    }

    setup=(p5,parent)=>{

        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent)
        p5.background(p5.color(191,191,191));
        this.setState({
            color : p5.color(145,164,185)
        })

    }
    draw=(p5)=>{
        p5.noStroke();
        p5.fill(this.state.color);
        p5.circle(200, 100, 150);
        p5.circle(400, 100, 150);
        p5.circle(500, 300, 150);
        p5.circle(100, 300, 150);
        p5.circle(200, 500, 150);
        p5.circle(400, 500, 150);

        p5.fill(230,127,57);
        p5.circle(300, 300, 90);

        p5.fill(this.state.color);
        p5.circle(650, 245, 40);
        p5.circle(700, 230, 40);
        p5.circle(750, 245, 40);
        p5.circle(770, 300, 40);
        p5.circle(750, 355, 40);
        p5.circle(700, 370, 40);
        p5.circle(650, 355, 40);
        p5.circle(630, 300, 40);

        p5.fill(230,127,57);
        p5.circle(700, 300, 90);

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
        if (this.comparar(this.state.color.levels,p5.color(145,164,185).levels)) {

            this.setState({
                color : p5.color(191,191,191)
            })
        } else {

            this.setState({
                color : p5.color(145,164,185)
            })
        }
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

export default EbbinghausCanvas