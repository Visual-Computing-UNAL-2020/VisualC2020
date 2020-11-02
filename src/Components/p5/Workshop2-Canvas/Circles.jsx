import React from 'react'
import Sketch from 'react-p5'
import i1 from './Images/imagen.png';
import i2 from './Images/imagen2.png'
var img, img2;
let click = true;

class Circles extends React.Component {

    constructor(props){
        super(props);
        this.state={
             
        }
    }

    preload=(p5)=>{
        console.log(i1);
        img = p5.loadImage(i1);
        img2 = p5.loadImage(i2);

    }

    setup=(p5,parent)=>{
        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent);
    }
    draw=(p5)=>{
        if(click){
            p5.image(img,0,0);
        }else{
            p5.image(img2,0,0);
        }
        

    }
    mouseClicked=(p5)=>{
        click=!click;
    }
    
    send=()=>{
        this.props.callbackPixels(this.state.pixels,this.state.w,this.state.h);
    }

    render(){
        return(
            <Sketch setup={this.setup} preload={this.preload} draw={this.draw} mouseClicked={this.mouseClicked}></Sketch>
        )
    }

}

export default Circles