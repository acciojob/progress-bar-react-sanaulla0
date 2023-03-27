import React from 'react'
import App from './App';
const Progressbar = (props) => {
   const {progress} = props;


  return (
    <div style={{width:'100%',height:'24px',backgroundColor:'#e0e0de'}}>
    <div style={{width:`${progress}%`,height:'100%',backgroundColor:'blue' }}></div> 


     </div>
  )
}

export default Progressbar;