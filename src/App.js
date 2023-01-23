import "./App.scss";

import Container from "./components/Container";
import Header from "./components/Header";
import Main from "./pages/Main/index.jsx";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
