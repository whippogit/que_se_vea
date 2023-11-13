import "./App.css";
import * as Api from "./services/News";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardNews from "./component/CardNews";
import PageDetails from "./component/PageDetails";
import Head from "./component/Head";
import NavBar from "./component/NavBar";
import PageNotFound from "./component/PageNotFound";
import BannerBottom from "./component/BannerBottom";

import Footer from "./component/Footer";

function App() {
  //allNews
  const [news, setNews] = useState([]);

  useEffect(() => {
    Api.getAllNews().then(setNews);
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
      <header className="fixed-top bg-white">
        <div className="d-flex justify-content-center">
          <Head handleSearch={handleSearch} />
        </div>
        <div className="m-0 d-none d-sm-block">
          <NavBar />
        </div>
      </header>
      <section className="mtS">
        <div className="d-flex justify-content-center">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1677775249/logo-corrientes_rzqz0i.png"
            alt="corrientes somos todos"
            className="banner-ctes mt-4"
            title="corrientes somos todos"
          />
        </div>
      </section>

      <section className="container">
        <Router>
          <Routes>
            <Route path="/" element={<CardNews news={results} />} />
            <Route path="/noticias/:id" element={<PageDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </section>

      <section className="container">
        <div className="d-flex justify-content-center">
          <BannerBottom />
        </div>
      </section>
      <div className="bg-dark">
        <Footer />
      </div>
    </div>
  );
}

export default App;
