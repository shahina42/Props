import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{

  // code here
  render(){
    let data = this.props.prop1
    console.log(data)
    return(
      <>
      <h1>Kalvium Gallary Using Class</h1>
      <div className='body'> 
        {data.map((obj)=>{
          return(
            <img src={obj.img} alt="elephant" />
          )
        })}
      </div>
      </>
      
    )
   
  }
}

