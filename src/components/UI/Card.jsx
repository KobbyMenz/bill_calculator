import { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "../UI/Card.module.css";

const Card = (props) => {
  return (
    <Fragment>
      <div className={`${classes.card} ${props.className}`}>
        {props.children}
      </div>
    </Fragment>
  );
};
Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
export default Card;
