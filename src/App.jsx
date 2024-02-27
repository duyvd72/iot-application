import { Navigate, Route, Routes } from "react-router-dom";
import RootPage from "./pages/RootPage";
import Trap from "./pages/Trap";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index path="/" element={<Navigate to={"/home"} />} />
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="trap" element={<Trap />} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
