import "./App.css";
import * as Api from "./services/News";
import * as ApiAlert from "./services/Alerts";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardNews from "./component/CardNews";
import PageDetails from "./component/PageDetails";
import Head from "./component/Head";
import NavBar from "./component/NavBar";
import PageNotFound from "./component/PageNotFound";
import BannerBottom from "./component/BannerBottom";
import Alert from "./component/Alert";
import Footer from "./component/Footer";
import Copyright from "./component/Copyright";

function App() {
  //allNews
  const [news, setNews] = useState([]);

  useEffect(() => {
    Api.getAllNews().then(setNews);
  }, []);

  //Alerts
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    ApiAlert.getAllAlerts().then(setAlerts);
  }, []);

  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //filter
  let results = [];
  if (search === undefined) {
    results = news;
  } else {
    results = news.filter((news) =>
      news.description.toLowerCase().includes(search)
    );
  }

  return (
    <div className="App">
      <div className="fixed-top bg-white">
        <div className="container d-flex justify-content-between fondo-transparente">
          <Head handleSearch={handleSearch} />
        </div>
        <div className=" m-0">
          <NavBar />
        </div>
        <div className="fondo-transparente d-flex justify-content-center">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677775249/logo-corrientes_rzqz0i.png"
            alt="corrintes somos todos"
            className="banner-ctes mt-4 fondo-transparente"
            title="corrientes somos todos"
          />
        </div>
        <hr />
        <hr />
      </div>
      <div className="container bg-publicidad mtS config-publicidad">
        publicidad
      </div>
      <hr />

      <div className="row">
        <div className="col-2 d-none d-sm-block bg-publicidad config-publicidad">
          publicidad
        </div>
        <div className="col-7">
          <Router>
            <Routes>
              <Route path="/" element={<CardNews news={results} />} />
              <Route path="/noticias/:id" element={<PageDetails />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </div>
        <div className="col-2 d-none d-sm-block fixed-top config-alert fondo-transparente">
          <Alert alerts={alerts} />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-config">
        <BannerBottom />
      </div>

      
      <div className="bg-dark">
        <Footer news={news} />
      </div>
      <div className="bg-dark text-light text-center txt-size">
        <Copyright />
      </div>
    </div>
  );
}

export default App;
