import React from 'react'
import Sketch from 'react-p5'
//image
import backgraund2 from '../../Assets/backgraund.jpg'

var url = 'https://www.technocrazed.com/wp-content/uploads/2015/12/city-wallpaper-34.jpg';
var img;
var img2;

class Canvas2 extends React.Component {
    
    constructor(props){
        super(props);
        this.state={

        }
    }

    setup=(p5,parent)=>{
        p5.createCanvas(this.props.canvasW,this.props.canvasH).parent(parent)
        p5.frameRate(60)
        p5.background(0);
        img = p5.loadImage(backgraund2)
        img2 = p5.loadImage(backgraund2)
       
    }
    draw=(p5)=>{
        p5.image(img,0,0,375,375)
        p5.loadPixels();
        //this.props.callbackPixels(p5.pixels,img.width,img.height);

        /*for(let i = 0; i< img2.height ; i++){
            for(let j = 0; j < img2.width; j++){
                let index = (j + i * img2.width) * 4;
                let avg = (p5.pixels[index] + p5.pixels[index + 1] + p5.pixels[index + 2])/3;
                p5.pixels[index] = avg;
                p5.pixels[index + 1] = avg;
                p5.pixels[index + 2] = avg;
                //img.pixels[index + 3] = alpha;
            }
        }
        p5.updatePixels(0,150,375,150);*/
        //p5.image(img2,0,150,375,150);
        
        //p5.noLoop()

    }

    render(){
        return(
            <Sketch setup={this.setup} draw={this.draw}></Sketch>
        )
    }

}

export default Canvas2