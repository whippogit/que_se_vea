import "./App.css";
import * as Api from "./services/News";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardNews from "./component/CardNews";
import PageDetails from "./component/PageDetails";
import Head from "./component/Head";
import NavBar from "./component/NavBar";
import PageNotFound from "./component/PageNotFound";
import Social from "./component/Social";
import BannerMain from "./component/BannerMain";
import BannerLeft from "./component/BannerLeft";
import Slider from "./component/Slider";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    Api.getAllNews().then(setNews);
  }, []);

  return (
    <div className="App">
      <h1 className="container d-flex justify-content-between">
        <Head />
        <Social />
      </h1>
      <hr />
      <div className="container-fluid">
        <NavBar />
      </div>
      <hr />
      <div className="container">
        <Slider />
      </div>

      <div className="container">
        <BannerMain />
      </div>

      <div className="row">
        <div className="col-2">
          <h1>hola</h1>
        </div>
        <div className="col-7">
          <Router>
            <Routes>
              <Route path="/" element={<CardNews news={news} />} />
              <Route path="/new/:id" element={<PageDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </div>
        <div className="col-3">
          <BannerLeft />
        </div>
      </div>
    </div>
  );
}

export default App;
