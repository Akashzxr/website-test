import './App.css';
import Header from './Components/Header/Header';
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
    <div className="App">
      {isLoaded ? <Header/> : <div>loading</div>}
    </div>
  );
  
}

export default App;
