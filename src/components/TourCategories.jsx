/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Swiper
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getAllTypeTours } from '../MOCKDATA';

const TourTypesWrapper = styled.section`
  padding: 3rem 9%;
  @media (max-width: 768px) {
    padding: 3rem 2rem;
  }
  @media (max-width: 576px) {
    padding: 3rem 9%;
  }
`;

const TourCategoriesSwiper = styled(Swiper)`
  .swiper-slide {
    position: relative;
    overflow: hidden;
    user-select: none;
    padding-bottom: 3rem;
    margin-bottom: 4rem;
    .box-button:hover {
      p {
        min-height: 48rem;
        opacity: 1;
      }
    }
  }
  .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
  }
  .swiper-pagination-bullet-active {
    background: var(--color-primary);
  }
`;

const WrapperSlide = styled.div`
  margin-bottom: 4rem;
`;

const SlideImg = styled.img`
  height: 55rem;
  width: 100%;
  object-fit: cover;
  border-radius: var(--border-radius);
`;

const SlideBoxButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  p {
    background-color: rgba(255, 255, 255, 0.5);
    color: var(--color-secondary);
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    opacity: 0;
    transition: all 0.3s linear;
  }
  div {
    background-color: var(--color-primary);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    padding: 1rem 0;
    text-align: center;
  }
`;

const TourCategories = () => {
  const typeTours = getAllTypeTours();
  return (
    <TourTypesWrapper>
      <div className="heading">
        <span>our tour types</span>
        <h1>CHOOSE YOUR VACATION TYPE</h1>
      </div>
      <TourCategoriesSwiper
        spaceBetween={20}
        grabCursor
        loop
        navigation
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        breakpoints={{
          480: { slidesPerView: '1' },
          576: { slidesPerView: '2' },
          768: { slidesPerView: '2' },
          960: { slidesPerView: '3' },
          1024: { slidesPerView: '3' },
          1200: { slidesPerView: '4' },
          1400: { slidesPerView: '4' },
          1800: { slidesPerView: '5' },
        }}
        modules={[Navigation, Pagination]}
      >
        <WrapperSlide>
          {typeTours.map((typeTour) => (
            <SwiperSlide key={typeTour.id}>
              <SlideImg src={typeTour.img} alt="popehiflo travel agency" />
              <SlideBoxButton className="box-button">
                <p>{typeTour.description}</p>
                <div>
                  <Link to="tours" className="btn-primary" style={{ border: 'var(--border-primary-white)' }}>
                    <FontAwesomeIcon icon={faSearch} />
                    {` ${typeTour.title}`}
                  </Link>
                </div>
              </SlideBoxButton>
            </SwiperSlide>
          ))}
        </WrapperSlide>
        <div className="swiper-pagination" />
      </TourCategoriesSwiper>
    </TourTypesWrapper>
  );
};

export default TourCategories;
