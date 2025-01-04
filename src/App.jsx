import { Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
