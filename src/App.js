import "./App.scss";

import Container from "./components/Container"
import Header    from "./components/Header"
import Footer    from "./components/Footer"

import Main    from "./pages/Main"
import Error   from "./pages/Error"
import APropos from "./pages/APropos"
import Fiche   from "./pages/Fiche"

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        // <Router>
            <Container>
                <Header />
                <Routes>
                    <Route path="/"          element={<Main />} />
                    <Route path="/apropos"   element={<APropos />} />
                    <Route path="/fiche/:id" element={<Fiche />} errorElement={<Error/>}/>
                    <Route path='*'          element={<Error />}/>
                </Routes>
                <Footer />
            </Container>
        // </Router>
    )
}

export default App;
