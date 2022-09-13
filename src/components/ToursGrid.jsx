import React from 'react';
import styledComponents from 'styled-components';
import { getAllTours } from '../MOCKDATA';

const GridWrapper = styledComponents.div`

`;

const ToursGrid = () => {
  const tours = getAllTours();
  return (
    <GridWrapper>
      {tours.map((tour) => (
        <pre>{JSON.stringify(tour, null, 2)}</pre>
      ))}
    </GridWrapper>
  );
};

export default ToursGrid;
