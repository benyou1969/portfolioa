import React from "react"

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      id="dmcheck"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor="dmcheck" />
  </span>
)

export default Toggle
