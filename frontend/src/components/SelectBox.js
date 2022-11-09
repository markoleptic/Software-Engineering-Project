import { useState } from "react";
import axios from "../api/axios";
import AsyncSelect from "react-select/async";

export const coloredSelectStyles = () => ({
  menu: (provided) => {
    return {
      ...provided,
      marginTop: 0,
      fontSize: 14,
      cursor: "pointer",
    };
  },
  option: (provided, state) => {
    return {
      ...provided,
      cursor: "pointer",
      color: "#02132b",
      backgroundColor: state.isSelected ? "hsl(193, 81%, 58%)" : "white",
      "&:hover": {
        backgroundColor: state.isSelected ? "hsl(193, 81%, 58%)" : "#9ee2f5",
        transition: "all 120ms ease-out",
      },
    };
  },
  container: (provided) => {
    return {
      ...provided,
      width: "100%",
    };
  },
  control: (provided) => {
    return {
      ...provided,
      cursor: "pointer",
      width: "100%",
      textAlign: "left",
    };
  },
  dropdownIndicator: (provided) => ({
    ...provided,
    "&:hover": {
      color: "#9ee2f5",
      transition: "all 150ms ease-out",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
    paddingLeft: 2,
    paddingRight: 2,
  }),
  singleValue: (provided) => ({
    ...provided,
  }),
});

const SelectBox = ({ className, id }) => {
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedValue, setSelectedValue] = useState(null);

  const handleInputChange = (value) => {
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  // load options using API call
  const loadOptions = async (inputValue) => {
    try {
      console.log(inputValue);
      const response = await axios.get(`/api/animelist/${inputValue}`, {
        headers: { "Content-Type": "application/json" },
      });
      if (response) {
        var arr = [];
        for (var obj in response.data) {
          arr.push({
            value: response.data[obj].name,
            label: response.data[obj].name,
          });
        }
        console.log(arr.length);
        return arr;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
        styles={coloredSelectStyles}
        className={className}
        id={id}
      />
    </>
  );
};

export default SelectBox;
