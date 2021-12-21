import React from "react";
import {Body} from "./components/containers/page-containers";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import "./app.css";
import {StopsPage} from "./components/pages/stops";
import {StopPage} from "./components/pages/stop-page";
import {Navbar} from "./components/elements/navbar";
import {TrainPage} from "./components/pages/train-page";
import {Footer} from "./components/elements/footer";
import {ErrorPage} from "./components/pages/error";
import ScrollToTop from "./utils/scroll-to-top";

function App() {
  return (
    <Body>
      <BrowserRouter>
          <ScrollToTop/>
          <Navbar/>
          <Routes>
              <Route path="/stops/:id" element={<StopPage/>}/>
              <Route path="/stops" element={<StopsPage/>}/>
              <Route path="train/:id" element={<TrainPage/>} />
              <Route path="/" element={<StopsPage/>}/>
              <Route path="*" element={<ErrorPage text="A keresett oldal nem található!"/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </Body>
  );
}

export default App;
