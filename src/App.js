import './App.css';
import Grid from '@react-css/grid'

function App() {
  return (
    <div className="App">
      <Grid columns='1fr 2fr' rows='1fr 7fr' columnGap='5px'>
        <Grid.Item column='1/3' className="header">
        </Grid.Item>
      </Grid>
    </div>
  );
}

export default App;
