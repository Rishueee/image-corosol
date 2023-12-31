import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ArrowBackIosNew } from "@mui/icons-material";

// implement the class below
class Carousel extends Component {
  constructor(){
    super()
    this.state = {
        count : 0
    }
  }

  increase = () =>{
    if (this.state.count < 2){
        this.setState({count : this.state.count+1})
    }else{
        this.setState({count:0})
    }
  }

  decrease = () =>{
    if (this.state.count > 0 ){
        this.setState({count: this.state.count-1})
    }else{
    this.setState({count : 2})
    }
   
  }

  render(){
    console.log(images)
    return(
        <div className="cont">
            <div onClick={this.decrease} className="backward">
                <ArrowBackIosIcon/>
            </div>
            
            <div className="textontop">
                {images[this.state.count].title}    
            </div>

            <img src={images[this.state.count].img} alt=""  className="images"/>

            <div className="textss">
                {images[this.state.count].subtitle}
            </div>

            <div onClick={this.increase} className="frontbut">
                <ArrowForwardIosIcon/>
            </div>
        </div>
    )
  }


}

export default Carousel;