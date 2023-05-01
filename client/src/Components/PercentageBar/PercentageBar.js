import './PercentageBar.css';

const PercentageBar = (percentage) => {
    return (
      <div className="percentage-bar">
        <div className="percentage" style={{ width: `${percentage.percentage * 10 }%`}}></div>
      </div>
    );
  };
  
  export default PercentageBar;