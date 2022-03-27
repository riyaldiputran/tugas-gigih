
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data';
import All from './components/All';




function App() {

  
  const renderAll = () => data.map((v) => <All key={v.album.images[0].url} img={v.album.images[0].url} album={v.album.name} name={v.album.artists[0].name}/>)
  return (
    <div className="App">
      <header className="App-header">
      <div className="content"> 
        {renderAll()}
        <Button type="button" class="btn btn-secondary btn-outline-light" > <a href={data.uri}></a>Select </Button>
      </div>
      </header>
    </div>
  );
}

export default App;
