import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuote from './components/AddQuote';

import ViewQuote from './components/ViewQuote';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddQuote />} />
        
          <Route path="/view" element={<ViewQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
