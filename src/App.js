import './App.css';
import Grid from '@react-css/grid'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Grid columns='1fr 4fr' rows='0.5fr 4fr' columnGap='5px' style={{'height': '100%'}}>
        <Grid.Item column='1/3' className="header">
          <Header></Header>
        </Grid.Item>
        <div className='list'>This is the list component</div>
      </Grid>
    </div>
  );
}

export default App;
