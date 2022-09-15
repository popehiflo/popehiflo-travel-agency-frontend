/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getAllTypeTours } from '../MOCKDATA';

const TourTypesWrapper = styled.section``;

const TourCategoriesSwiper = styled(Swiper)`

`;

const TourCategories = () => {
  const typeTours = getAllTypeTours();
  return (
    <TourTypesWrapper>
      <div className="heading">
        <span>our tour types</span>
        <h1>CHOOSE YOUR VACATION TYPE</h1>
      </div>
      <TourCategoriesSwiper>
        <div>
          {typeTours.map((typeTour) => (
            <SwiperSlide key={typeTour.id}>
              <pre>{JSON.stringify(typeTour, null, 2)}</pre>
            </SwiperSlide>
          ))}

        </div>
      </TourCategoriesSwiper>
    </TourTypesWrapper>
  );
};

export default TourCategories;
