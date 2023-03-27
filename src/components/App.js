                                                    
import React,{useState,useEffect} from "react";  
import 'babel-polyfill';      
import './../styles/App.css';              
import Progressbar from "./Progressbar";           
const App = () => {                                                            
  const [progress, setProgress] = useState(0);              
 const percent =10;                                 
  useEffect(() => {                               
                                                  
    const asyncOperation = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    };
                                                           
    const updateProgress = async () => {
      // update the progress bar value every second until it reaches 100%
      for (let i = 10; i <= 100; i+=10) {
        await asyncOperation();
        setTimeout(() => {
          setProgress(i);
        }, 1000);
        setProgress(i);
      }
    };

    updateProgress();
  }, []);                   
                                                        
  return (                                       
    <div>
        {/* Do not remove the main div */}
      
       <h1>My Progress Bar</h1>
    <Progressbar progress={progress} />
        <div id="barOuter,barInner">{progress}%</div>
        <hr/>
    </div>                                                                                              
  );
}

export default App;
