import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetSinglePost from './components/GetSinglePost'
import Break from './components/Break'
import Timer from "./components/Timer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/edit" element={<GetSinglePost />} />
        <Route path="/break" element={<Break />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
