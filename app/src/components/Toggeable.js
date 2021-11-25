import { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";

export const Toggeable = forwardRef(
  ({ children, buttonLabel = "Button" }, ref) => {
    const [visible, setVisible] = useState(false);
    const hiddenWhenVisible = { display: visible ? "none" : "" };
    const shownWhenVisible = { display: visible ? "" : "none" };

    const toggleVisibility = () => {
      setVisible(!visible);
    };
    useImperativeHandle(ref, () => {
      return { toggleVisibility };
    });

    return (
      <>
        <div style={hiddenWhenVisible}>
          <button onClick={toggleVisibility}>{buttonLabel}</button>
        </div>
        <div style={shownWhenVisible}>
          {children}
          <button onClick={toggleVisibility}>Cancel</button>
        </div>
      </>
    );
  }
);

Toggeable.displayName = "Toggeable";
Toggeable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
