import React from 'react';
import StarRating from '../StarRating/StarRating';
import "./AverageRatings.css"

const AverageRatings = (averageReviews) => {

    const aspecsAvg = averageReviews.averageReviews

    return(
        <div className='average-ratings'>
            
            {aspecsAvg && Object.keys(aspecsAvg).map((category) => {
                return (
                    aspecsAvg[category]>0 && 
                    <div className='aspecAvg-category' key={category}> 
                        <div>  
                            {category}  ({aspecsAvg && aspecsAvg[category]}/10) 
                        </div>
                        <StarRating value={aspecsAvg[category]}/>
                    </div>
                )
            })}
        </div>
    );
}

export default AverageRatings;