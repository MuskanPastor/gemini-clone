import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput} =useContext(context); 
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}></img>
      </div>
      <div className="main-container">
      {!showResult?
      <>
      <div className="greet">
            <p><span>Hello, Dudu.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
        <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon}></img>
        </div>
        <div className="card">
            <p>Tell me about frontend and backend development</p>
            <img src={assets.bulb_icon}></img>
        </div>
        <div className="card">
            <p>Briefly summarise this concept:Urban Planning</p>
            <img src={assets.message_icon}></img>
        </div>
        <div className="card">
            <p>Tell me about the history of Indian Culture</p>
            <img src={assets.code_icon}></img> 
        </div>
        </div>
      </> : <div className='result'> 
             <div className="result-title">
              <img src={assets.user_icon}></img>
              <p>{recentPrompt}</p>
             </div>
             <div className="result-data">
              <img src={assets.gemini_icon}></img>
              {loading?<div className='loader'>
                <hr></hr>
                <hr>
                </hr>
                <hr></hr>
              </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
             </div>
           </div>
      
      } 

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here'></input>
                <div>
                <img src={assets.gallery_icon}></img>
                <img src={assets.mic_icon}></img>
                <img onClick={()=>onSent()} src={assets.send_icon}></img>
                </div>
            </div>
            <div className="bottom-info">
                <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>
        </div>
      </div>
    </div>
  ) 
}

export default Main
