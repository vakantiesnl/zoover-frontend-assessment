import AverageRatings from "../AverageRatings/AverageRatings"
import CountryFlag from "../CountryFlag/CountryFlag";
import StarRating from "../StarRating/StarRating";
import './UserReview.css';

const UserReview = ({review}) => {

    const formatDate = (date, type) => {
        if (type === "entryDate"){
            const entryDate = new Date(date).toLocaleDateString("en-GB");
            return entryDate
        }else {
            const travellDate = new Date(date).toLocaleDateString("en-GB");
            return travellDate
        }
    }

    return(
        <div>
            <div className="reviews">
                
                <div className="user-name">
                    Added by <p> {review.user} </p> <CountryFlag countryCode={review.locale}/> On {formatDate(review.entryDate, "entryDate")}
                </div>
                
                <div className="review-title"> {review.titles[review.locale]} </div>

                <div className="review-text"> {review.texts[review.locale]} </div>

                <div className="general"> General review ({review.ratings.general.general}/10) </div>
                
                <StarRating value ={review.ratings.general.general}/>

                <div className="info"> 
                    <div>Information about the trip </div>
                    <div> Date: {formatDate(review.travelDate, "travelDate")}</div>
                    <div>TravelledWith {review.traveledWith}</div>
                </div> 

                <h4>Ratings of aspects</h4>
                
                <AverageRatings averageReviews = {review.ratings.aspects}/>
            </div>
        </div>
    )
}

export default UserReview;