import { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button
        className={`${classes.button} ${props.className}`}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        id={props.id}
        style={props.style}
      >
        {props.children}
      </button>
    </Fragment>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;
