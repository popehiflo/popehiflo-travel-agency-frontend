import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faEarthAmericas, faHeart, faMoon, faMountainSun, faPersonHiking, faSun } from '@fortawesome/free-solid-svg-icons';
import styledComponents from 'styled-components';
import defaultImage from '../assets/imgs/default-image.jpg';

const TourCardWrapper = styledComponents.div`
  background: var(--color-bg-white);
  box-shadow: var(--primary-box-shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TourCardInfo = styledComponents.div`
  border-radius: var(--border-radius);
`;
const CardInfoImage = styledComponents.div`
  position: relative;
  height: 30rem;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .image-icons {
    position: absolute;
    bottom: 0.2rem;
    right: 0.2rem;
  }
`;

const CardInfoContent = styledComponents.div`
  padding: 1.5rem;
  h3 {
    font-size: 1.8rem;
    color: var(--color-secondary);
    text-transform: uppercase;
  }
  p {
    font-size: 1.5rem;
    color: var(--color-secondary);
  }
`;

const ContentTags = styledComponents.div`

`;
const Tag = styledComponents.span`
  display: inline-block;
  background: var(--color-bg-light);
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  border: var(--border-primary);
  border-radius: var(--border-radius);
  padding: 0.2rem 1rem;
  color: var(--color-secondary);
  margin: 0.1rem;
  svg {
    color: var(--color-primary);
  }
`;

const TourCardButton = styledComponents.div`
  background: var(--color-primary);
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TourCard = ({ tour }) => (
  <TourCardWrapper>
    <TourCardInfo>
      <CardInfoImage>
        <img src={tour.imgs[0]} alt={tour.title} />
        <div className="image-icons">
          <Link to="/" className="btn-icon-primary">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link to="/" className="btn-icon-primary">
            <FontAwesomeIcon icon={faCartPlus} />
          </Link>
        </div>
      </CardInfoImage>
      <CardInfoContent>
        <h3>{tour.title}</h3>
        <p>{tour.information.slice(0, 100)}</p>
        <ContentTags>
          <Tag>
            <FontAwesomeIcon icon={faSun} />
            {` ${tour.days} days`}
          </Tag>
          <Tag>
            <FontAwesomeIcon icon={faMoon} />
            {` ${tour.nights} nights`}
          </Tag>
          {tour.categories?.map((cat) => (
            <Tag>
              <FontAwesomeIcon icon={faMountainSun} />
              {` ${cat}`}
            </Tag>
          ))}
          {tour.country?.map((country) => (
            <Tag>
              <FontAwesomeIcon icon={faEarthAmericas} />
              {` ${country}`}
            </Tag>
          ))}
          {tour.level?.map((lvl) => (
            <Tag>
              <FontAwesomeIcon icon={faPersonHiking} />
              {` ${lvl}`}
            </Tag>
          ))}
        </ContentTags>
      </CardInfoContent>
    </TourCardInfo>
    <TourCardButton>
      <Link to={`/tour/${tour.slug}`} className="btn-primary" style={{ border: 'var(--border-primary-white)' }}>
        Learn more about the tour
      </Link>
    </TourCardButton>
  </TourCardWrapper>
);

TourCard.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string,
    imgs: PropTypes.instanceOf(Array),
    categories: PropTypes.instanceOf(Array),
    country: PropTypes.instanceOf(Array),
    level: PropTypes.instanceOf(Array),
    title: PropTypes.string,
    slug: PropTypes.string.isRequired,
    price: PropTypes.number,
    days: PropTypes.number,
    nights: PropTypes.number,
    information: PropTypes.string,
  }),
};

TourCard.defaultProps = {
  tour: {
    imgs: [
      defaultImage,
    ],
    title: '',
    slug: 'slug-por-defecto',
    price: 0,
    duration: {
      days: 0,
      nights: 0,
    },
    information: '',
  },
};

export default TourCard;
