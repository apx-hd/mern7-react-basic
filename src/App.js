import Counter from "./pages/Counter";
import Todo from './pages/Todo'
import Mui from './pages/Mui'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Homepage</h1>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/mui" element={<Mui/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
