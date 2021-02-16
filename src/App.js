import './App.css';
import Grid from '@react-css/grid'
import Markdown from 'markdown-to-jsx'
import React, { useState } from 'react'


function App() {

  const [md, setMD] = useState("#### Start writing your markdown here...")
  const updateMDstring = (e) => {
    e.preventDefault()
    setMD(e.target.value)
  }

  return (
    <div className="App">
      <Grid columns='1fr 1fr' rows='1fr 11fr' style={{'height': '100%'}}>
        <Grid.Item column='1/3' className="header">
          <div className='headerComp'>
            <div>Markdown</div>
          </div>
        </Grid.Item>
        <textarea onChange={updateMDstring} 
                  value = {md}
                  className='textarea'>
        </textarea>
        <Markdown className="md">{md}</Markdown>
      </Grid>
    </div>
  );
}

export default App;
