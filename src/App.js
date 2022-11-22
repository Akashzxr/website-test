import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import { useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { FetchData } from './State/DataSlice';

function App() {
  const Dispatch = useDispatch();
  const { isLoaded} = useSelector((state)=>state.Data);

  useEffect(()=>{
    Dispatch(FetchData());
  },[])
  
  return (
    <div>
      {isLoaded ? 
          <div className="App">
            <Header/>
            <Main/>
          </div>
       
       : <div>loading</div>}
    </div>
  );
  
}

export default App;
