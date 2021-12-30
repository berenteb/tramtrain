import React from "react";
import {Body} from "./components/containers/page-containers";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router";
import {StopsPage} from "./components/pages/stops";
import {StopPage} from "./components/pages/stop-page";
import {Navbar} from "./components/elements/navbar";
import {TrainPage} from "./components/pages/train-page";
import {Footer} from "./components/elements/footer";
import {ErrorPage} from "./components/pages/error";
import ScrollToTop from "./utils/scroll-to-top";
import {MavNewsPage} from "./components/pages/mav-news";
import {MainPage} from "./components/pages/main-page";
import {SzktNewsPage} from "./components/pages/szkt-news";
import {Title} from "./utils/title";

function App() {
    Title("Főoldal");
  return (
    <Body>
      <BrowserRouter>
          <ScrollToTop/>
          <Navbar/>
          <Routes>
              <Route path="/news/szkt" element={<SzktNewsPage/>}/>
              <Route path="/news/mav" element={<MavNewsPage/>}/>
              <Route path="/stops/:id" element={<StopPage/>}/>
              <Route path="/stops" element={<StopsPage/>}/>
              <Route path="train/:id" element={<TrainPage/>} />
              <Route path="/" element={<MainPage/>}/>
              <Route path="*" element={<ErrorPage text="A keresett oldal nem található!"/>}/>
        </Routes>
          <Footer/>
      </BrowserRouter>
    </Body>
  );
}

export default App;
