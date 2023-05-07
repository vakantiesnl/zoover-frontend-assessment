import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import ArrowUpIcon from './triangle-up';

type FilterOption = {
  value: string;
  label: string;
};

type ReviewsFilterProps = {
  setSortBy: Dispatch<SetStateAction<string>>;
  sortBy: string;
  filterOptionArray: Array<FilterOption>;
  filterOption: string;
  setFilterOption: Dispatch<SetStateAction<string>>;
};

const Container = styled.div`
  padding: 20px;
  background-color: hsl(120, 0%, 97%);
  display: flex;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (max-width: 767.9px) {
    flex-direction: column-reverse;
  }
  justify-content: space-between;
  font-size: 12px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin-right: 10px;
    margin-top: 0;
  }
  @media (max-width: 767.9px) {
    margin-right: 0;
    margin-top: 10px;
  }
`;

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const ArrowContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  display: flex;
  flex-direction: column;
`;

const StyledArrow = styled(ArrowUpIcon)`
  margin: 1.5px 0;
`;

const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 10px;
    margin-bottom: 0;
  }
  @media (max-width: 767.9px) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Radio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Select = styled.select`
  margin: 10px 0;
  border: 1px solid hsl(211, 14%, 83%);
  border-radius: 4px;
  padding: 5px 30px 5px 5px;
  width: 100%;
  appearance: none;
`;

const ReviewsFilter = ({
  setSortBy,
  sortBy,
  filterOptionArray,
  filterOption,
  setFilterOption,
}: ReviewsFilterProps) => {
  return (
    <Container>
      <SelectWrapper>
        <span>Filter reviews by (with whom was the trip)</span>
        <SelectContainer>
          <Select
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            {filterOptionArray.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <ArrowContainer>
            <StyledArrow direction="up" />
            <StyledArrow direction="down" />
          </ArrowContainer>
        </SelectContainer>
      </SelectWrapper>
      <SortWrapper>
        <span>Sort by</span>

        <Radio>
          <input
            type="radio"
            id="entryDate"
            name="sort"
            value="entryDate"
            checked={sortBy === 'entryDate'}
            onChange={(e) => setSortBy(e.target.value)}
          />
          <label htmlFor="entryDate">Review date</label>
        </Radio>
        <Radio>
          <input
            type="radio"
            id="travelDate"
            name="sort"
            value="travelDate"
            checked={sortBy === 'travelDate'}
            onChange={(e) => setSortBy(e.target.value)}
          />
          <label htmlFor="travelDate">Trip date</label>
        </Radio>
      </SortWrapper>
    </Container>
  );
};

export default ReviewsFilter;
