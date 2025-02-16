/* eslint-disable react/prop-types */
import "./ProgressBar.css";
function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
