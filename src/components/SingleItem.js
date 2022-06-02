import { React, useState } from "react";
import classes from "./SingleItem.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";
function SingleItem({ id, title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className={`${classes.item}`}>
      <div className={classes.title} onClick={() => setShowInfo(!showInfo)} >
        <h3>{title}</h3>
        
          {!showInfo ? (
            <FaPlus className={classes.icon} />
          ) : (
            <FaMinus className={classes.icon} />
          )}
        
      </div>
      {<p className={`${classes.info} ${showInfo && classes.slideDown}`}>{info}</p>}
    </div>
  );
}

export default SingleItem;
