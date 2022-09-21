import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getAllTypeTours } from '../MOCKDATA';

const CategoryFilterWrapper = styled.div`
  margin: 2rem auto;
  background: var(--color-bg-white);
  border: var(--border-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--primary-box-shadow);
  padding: 1rem 0.5rem;
`;

const FilterForm = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.2rem;
  .btn-primary {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const CategoryFilter = ({ completeList, setFilteredList, activeCategory, setActiveCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchCategories = async () => {
    const data = await getAllTypeTours();
    setCategoryList(data);
  };

  useEffect(() => {
    fetchCategories();
    if (activeCategory === 'all') {
      setFilteredList(completeList);
      return;
    }
    const filtered = completeList.filter((tour) => tour.categories.includes(activeCategory));
    setFilteredList(filtered);
  }, [activeCategory]);

  return (
    <CategoryFilterWrapper>
      <FilterForm>
        <button type="button" className="btn-primary" onClick={() => setActiveCategory('all')}>ALL</button>
        {categoryList.map((category) => (
          <button
            key={category.id}
            type="button"
            className="btn-primary"
            onClick={() => setActiveCategory(category.cat)}
          >
            {category.title.toUpperCase()}
          </button>
        ))}
      </FilterForm>
    </CategoryFilterWrapper>
  );
};

CategoryFilter.propTypes = {
  completeList: PropTypes.instanceOf(Array),
  setFilteredList: PropTypes.func,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func,
};

CategoryFilter.defaultProps = {
  completeList: '',
  activeCategory: '',
  setFilteredList: '',
  setActiveCategory: '',
};

export default CategoryFilter;
