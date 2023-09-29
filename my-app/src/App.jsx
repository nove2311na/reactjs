import './App.css';
import React from "react";
import YoutubeList from './components/YoutubeList/YoutubeList';

function App() {
  const preText = 'Hello';
  console.log('preText', preText);
  return (
   <div>
    <YoutubeList>
      <p>{preText}, It's me</p>
    </YoutubeList>
   </div> 
  )
}



export default App;




