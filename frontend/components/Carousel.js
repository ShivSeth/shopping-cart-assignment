import React, { useEffect, useState } from 'react';
import './Carousel.scss';
const Carousel = ({ banners }) => {
  let { error, loading, bannersList } = banners;
  const [activeIndex, setActiveIndex] = useState(0);
  if (loading) return <p>banners loading...</p>;
  else if (error) return <p>{error.message}</p>;
  const bannersLength = bannersList?.length;
  return (
    <div className="carousel" tabIndex={0}>
      <button
        className="carousel_prev--button"
        onClick={() => {
          setActiveIndex(() => {
            return activeIndex - 1 < 0 ? bannersLength - 1 : activeIndex - 1;
          });
        }}
        type="button"
      >
        PREV
      </button>
      <img
        src={bannersList[activeIndex].bannerImageUrl}
        alt={bannersList[activeIndex].bannerImageAlt}
      />
      <button
        className="carousel_next--button"
        type="button"
        onClick={() => {
          setActiveIndex(() => {
            return activeIndex + 1 === bannersLength ? 0 : activeIndex + 1;
          });
        }}
      >
        NEXT
      </button>
      <div className="carousel-dots">
        {bannersList.map((banner, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
            }}
            key={index}
            className={
              index === activeIndex ? 'carousel-dot active' : 'carousel-dot'
            }
          ></div>
        ))}
      </div>
      <div className="bottom-gradient"></div>
    </div>
  );
};

export default Carousel;
