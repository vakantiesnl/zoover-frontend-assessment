import './App.css';
import AverageRatings from './Components/AverageRatings/AverageRatings';
import TravelledWith from './Components/TravelledWith/TravelledWith';
import React, { useState, useEffect } from 'react';
import UserReview from './Components/UserReview/UserReview';
import Pagination from './Components/Pagination/Pagination';

function App() {
  const [averageReviews, setAverageReviews] = useState([]);
  const [reviews, setReviews] = useState([])
  const [allReviews, setallReviews] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)
  const [filteredReviews, setFilteredReviews] = useState([])
  const [sortField, setSortField] = useState([])

  useEffect(() => {
      fetch('http://localhost:8080/reviews/average')
        .then(response => response.json())
        .then(data => {setAverageReviews(data)})
        .catch(error => console.error(error));

        fetch('http://localhost:8080/reviews')
        .then(response => response.json())
        .then(data => {
          setallReviews(data.all);
          setReviews(data.all.slice(0,10))
          setLastPage(data.all.length/10)
          setFilteredReviews(data.filtered)
        })
        .catch(error => console.error(error));
    }, []);

    const pageReviewsHandler = (page=1, pageSize=10) => {
      let results = filteredReviews.slice((page-1)*pageSize, page*pageSize-1)

      setReviews(results)
      setCurrentPage(page)
    }

    const filterReviewsHandler = (event) => {
      const traveledWith = event.target.value
      let newFilteredReviews = allReviews.filter(user => user.traveledWith === traveledWith)
      
      if (sortField === "travelDate" || sortField === "entryDate"){
        newFilteredReviews  = newFilteredReviews.sort((b,a) => new Date(a[sortField]) - new Date(b[sortField]))
      }

      if (traveledWith === "All") {
        setReviews(allReviews)
        setLastPage(Math.ceil(allReviews.length/10))
      }else {
        setFilteredReviews([...newFilteredReviews])
        setLastPage(Math.ceil(newFilteredReviews.length/10))
      } 
    }

    const sortHandler = (event) => {
      const sortField = event.target.value
      setSortField(sortField)
      const sortedReview = filteredReviews.sort((b,a) => new Date(a[sortField]) - new Date(b[sortField]))
      setFilteredReviews([...sortedReview])
    }

    useEffect(pageReviewsHandler, [filteredReviews])

  return (
    <div className="App">

    <div className="hotel-big-star">
      <h1>The Met Hotel Accomodation</h1>

      <div className="big-star-container">
      <span className="big-hotel-star">&#9733;</span>
      <span className="big-star-content ">4.4</span>
      </div>
    </div>

     <p className="hotel-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h2>The average ratings for this accomodation</h2>

      <AverageRatings averageReviews = {averageReviews?.aspecsAvg}/>

      <h2>The percentages of travelledWith</h2>

      <TravelledWith percentage = {averageReviews?.traveledWithAvg}/>

      <div className="filter">
        <div>
        Filter reviews by (with whom was the trip):
        <select onChange={(event)=> filterReviewsHandler(event)} className="filter-reviews">
          <option> All</option>
          {averageReviews?.traveledWithAvg && Object.keys(averageReviews?.traveledWithAvg).map(travelledWith => (
              <option value={travelledWith} key={travelledWith}>
                {travelledWith}
              </option>
              )
            )}
        </select>
        </div>

        <div className="sort-reviews">
          <div> Sort by: </div>
          <div>
            <label>
              <input type="radio" name="sort" value="travelDate" onChange={(event) => sortHandler(event)} />
              Review date
            </label>
            <label>
              <input type="radio" name="sort" value="entryDate" onChange={(event) => sortHandler(event)} />
              Trip date
            </label>
          </div>
        </div>
      </div>

      <div className="pagination-box">
        {lastPage!==1 && <Pagination currentPage={currentPage} totalPages={lastPage} onClick={pageReviewsHandler}/>}

        {lastPage!==1 && <div> Show {((currentPage-1) * 10 + 1)} - {currentPage * 10} of {filteredReviews.length} {filteredReviews.length !==1 ? "Reviews" : "Review"}</div>}
      </div>

      {reviews && reviews.map(reviews => {
        return(
            <UserReview review={reviews} key={reviews.id}/>
          )
      })}
    </div>
  );
}

export default App;