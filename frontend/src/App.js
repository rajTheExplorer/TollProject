import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import MapSlice from './slices/MapSlice';
import Home from './pages/Home';


let store = configureStore({
  reducer: {
    Map: MapSlice,
  }
});

window.store=store

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
