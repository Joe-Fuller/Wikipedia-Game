import { useState } from "react";
import "../styles/info-box.css";

const InfoBox = () => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
  };

  if (!hidden) {
    return (
      <section className="informationbox">
        <h3>Information:</h3>
        <ul>
          <li>
            The aim is to get to the target page in the top right while only
            clicking links in the current page
          </li>
          <li>Click the refresh icon (⟳) to get a new target page</li>
          <li>
            Your history is displayed in the bottom right. Click any item in
            your history to return to that page
          </li>
        </ul>
        <button className="info-box-button" onClick={handleClick}>
          Okay
        </button>
      </section>
    );
  }
};

export default InfoBox;
