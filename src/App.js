
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
import AllData from './components/AllData';




function App() {
  const renderAllData = () => data.map((v) => <AllData key={v.album.artists[0].id} img={v.album.images[0].url} album={v.album.name} name={v.album.artists[0].name}/>)
  return (
    <div className="App">
      <header className="App-header">
      <div className="content"> 
        {renderAllData()}
        <Button type="button" class="btn btn-secondary btn-outline-light" > <a href={data.uri}></a>Select </Button>
      </div>
      </header>
    </div>
  );
}

export default App;
