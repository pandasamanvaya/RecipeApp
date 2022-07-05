
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (<>
    <h1>App</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
