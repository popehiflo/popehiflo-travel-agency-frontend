import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import CategoryFilter from '../components/CategoryFilter';
import ToursGrid from '../components/ToursGrid';
import { getAllTours } from '../MOCKDATA';

const ToursWrapper = styled.section`
  padding-top: 10rem;
`;

const Tours = () => {
  const [completeList, setCompleteList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);

  const fetchTours = async () => {
    const data = await getAllTours();
    setCompleteList(data);
    setFilteredList(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <ToursWrapper>
      <div className="heading">
        <span>all ours</span>
        <h1>TOURS</h1>
      </div>
      <CategoryFilter
        completeList={completeList}
        setFilteredList={setFilteredList}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ToursGrid tours={filteredList} />
    </ToursWrapper>
  );
};

export default Tours;
