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
                <div className="general-review">
                    <div>
                        <div className="user-name">
                            Added by 
                            <p className="bold-text"> {review.user} </p> 
                            <CountryFlag countryCode={review.locale}/> On {formatDate(review.entryDate, "entryDate")}
                        </div>
                        <div className="review-title"> {review.titles[review.locale]} </div>
                        <div className="review-text"> {review.texts[review.locale]} </div>
                    </div>

                    <div className="general-info">
                        <div className="general-stars"> 
                            General ({review.ratings.general.general}/10)
                            <StarRating value ={review.ratings.general.general}/> 
                        </div>
                        <div className="info">
                            <div> About the trip </div>
                            <div> Date: <span className="bold-text"> {formatDate(review.travelDate, "travelDate")}</span></div>
                            <div> With: <span className="bold-text"> {review.traveledWith}</span></div>
                        </div>
                    </div>   
                </div> 

                <h4>Ratings of aspects</h4>
                
                <AverageRatings averageReviews = {review.ratings.aspects}/>
            </div>
        </div>
    )
}

export default UserReview;