import "./BannerLeft.css";

function BannerLeft({ news }) {
  return (
    <>
      <ul>
        {news.map((newsapi) => (
          <div>
            <a className="aBanner" key={newsapi._id} title={newsapi.title}>
              <div className="title">{newsapi.title}</div>
              <p className="pBanner">{newsapi.description}</p>
            </a>
            <hr className="hrBanner" />
          </div>
        ))}
      </ul>
      <img src="src/img/ctes2030-250x100.gif" className="w-75 m-2 rounded" />
      <img src="src/img/08 250x100.gif" className="w-75 m-2 rounded" />
    </>
  );
}

export default BannerLeft;
