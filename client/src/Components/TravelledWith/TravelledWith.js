import PercentageBar from '../PercentageBar/PercentageBar'
import './TravelledWith.css'

const TravelledWith = (percentage) => {

    const traveledWithPercentage = percentage.percentage

    return(
        <div className="travelled-with">
            {traveledWithPercentage && Object.keys(traveledWithPercentage).map((category) => {
                return (
                <div className="travelledWith-category" key={category}>
                    <div>  
                        {category} ({traveledWithPercentage && traveledWithPercentage[category]*10}/100) 
                    </div>
                    <PercentageBar percentage = {traveledWithPercentage[category]}/> 
                </div>
                )
            })}
        </div>
    )
}

export default TravelledWith;