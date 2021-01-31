import './App.css';
import Grid from '@react-css/grid'
import Header from './Components/Header/Header'
import List from './Components/List/List'

function App() {
  return (
    <div className="App">
      <Grid columns='1fr 4fr' rows='1fr 0.5fr 8.5fr' columnGap='5px' style={{'height': '100%'}}>
        <Grid.Item column='1/3' className="header">
          <Header></Header>
        </Grid.Item>
        <Grid.Item column='1/3'>
          <div className='tool'>This is the tool component</div>
        </Grid.Item>
        <List></List>
      </Grid>
    </div>
  );
}

export default App;
