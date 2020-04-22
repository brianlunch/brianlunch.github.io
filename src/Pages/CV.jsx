import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../Components/Navbar'
import Title from '../Components/Title'
import CardItems from '../Components/CardItems'
import CVimage from '../cv.png'
import CVpdf from '../CV.pdf'

/*This is the home page and makes use of the Navbar, 
homeNavConatiner, homeStatsContainer and TitleContainer components */

class CV extends Component {
  constructor(props) {
    super(props)
    
    this.state = { history: this.props.history }
  }

  render() {
    return (
      <div className="CV slide-in-fwd-center">
          <Navbar history={this.state.history}></Navbar>
          <img className ="cvImage" src ={CVimage}/><br></br><br></br>
          <button type="button" class="btn btn-outline-primary"><b>Download PDF</b></button>
          <a class ="text-dark" href="{CVpdf}"target="_blank" data-toggle="tooltip"  data-placement="bottom" title="Download CV" data-offset="0%, 50%">hi</a>
          <br></br><br></br><br></br><br></br>
          
        </div>
    )
  }
}

export default CV
