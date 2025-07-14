import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddQuote from './components/AddQuote';
import SearchQuote from './components/SearchQuote';
import DeleteQuote from './components/DeleteQuote';
import ViewQuote from './components/ViewQuote';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddQuote />} />
          <Route path="/search" element={<SearchQuote />} />
           <Route path="/delete" element={<DeleteQuote />} />

          <Route path="/view" element={<ViewQuote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
