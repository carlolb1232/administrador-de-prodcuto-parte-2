import './App.css';
import Main from './Views/Main';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Product from './Views/Product';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Main />}/>
        <Route path='/:id' exact element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
