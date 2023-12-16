import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import MapSlice from './slices/MapSlice';


let store = configureStore({
  reducer: {
    Map: MapSlice,
  }
});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          
      </div>
    </Provider>
  );
}

export default App;
