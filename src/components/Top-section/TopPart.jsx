import "./TopPart.style.css";

const TopPart = () => {
  return (
    <div className="top-part">
      <div className="top-part-title">
        <h1>
          Исследуйте самые красивые места планеты с нами
        </h1>
        <p>Мы сделаем ваш отдых незабываемым!</p>
      </div>
      <div className="video-area">
        <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bbibGFpn6Vk"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
