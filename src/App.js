import './App.css';
import Grid from '@react-css/grid'
import Header from './Components/Header/Header'
import List from './Components/List/List'
import Toolbar from './Components/ToolBar/Toolbar'

function App() {
  return (
    <div className="App">
      <Grid columns='1fr 4fr' rows='0.5fr 0.5fr 9fr' columnGap='5px' style={{'height': '100%'}}>
        <Grid.Item column='1/3' className="header">
          <Header></Header>
        </Grid.Item>
        <Grid.Item column='1/3'>
          <Toolbar title="this is a sample title." Listlength={5}></Toolbar>
        </Grid.Item>
        <List></List>
        <Grid.Item style={{'backgroundColor': 'black'}}>
          <div></div>
        </Grid.Item>

      </Grid>
    </div>
  );
}

export default App;
