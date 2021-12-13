import React from "react";

const MySelect = ({ options, defaltValue, value, onChange }) => {
  return (
    <select
        value={value}
        onChange={event => onChange(event.target.value)}
    >
      <option disabled value={""}>
        {defaltValue}
      </option>
      {options.map((option) => {
        return <option key={option.value} value={option.value}>{option.text}</option>;
      })}
    </select>
  );
};

export default MySelect;
