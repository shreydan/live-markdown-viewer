import './App.css';
import Markdown from 'markdown-to-jsx'
import React, { useState } from 'react'


function App() {

  const [md, setMD] = useState("#### Start writing your markdown here...")
  const updateMDstring = (e) => {
    e.preventDefault()
    setMD(e.target.value)
  }

  const [viewCycle, setView] = useState(0)
  // 0: both r visible 1: only textarea visible 2: only MD visible
  const changeView = () => {
    if(viewCycle===2) {
      setView(0)
    }
    else {
      setView(viewCycle+1)
    }
    console.log(viewCycle)
  }

  return (
    <div className="App">
        <div className='headerComp'>
            <div>Markdown</div>
            <div onClick={changeView} className="viewBtn">Toggle View</div>
        </div>
        <div className='view'>
          {(viewCycle === 0 || viewCycle === 1) && <textarea onChange={updateMDstring} 
                                                            value = {md}
                                                            className='textarea'>
                                                    </textarea>}
          {(viewCycle === 0 || viewCycle === 2) && <Markdown className="md">{md}</Markdown>}                                          
        </div>
    </div>
  );
}

export default App;
