import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";

const Panel = () => {
  const options = [
    {
      value: "chocolate",
      label: (
        <>
          {" "}
          <ReactCountryFlag
            countryCode='US'
            svg
            style={{ width: "2em", height: "2em" }}
            title='US'
          />{" "}
          <p>US</p>
        </>
      ),
    },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 10,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div
      className='flex flex-col justify-center items-center bg-red-200 rounded-lg'
      style={{ width: "480px", height: "500px" }}
    >
      <div>
        <h1 className='p-14 text-2xl font-bold'>Buy crypto to your wallet</h1>
      </div>

      <div>
        <div>
          <label
            htmlFor='price'
            className='block text-sm font-medium text-gray-700'
          >
            Price
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <span className='text-gray-500 sm:text-sm'>$</span>
            </div>
            <input
              type='text'
              name='price'
              id='price'
              className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
              placeholder='0.00'
            />
            <div className='absolute inset-y-0 right-0 flex items-center'>
              <label htmlFor='currency' className='sr-only'>
                Currency
              </label>

              <Select
                options={options}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "primary25",
                    primary: "neutral5",
                  },
                })}
              />

              {/* <select
				id="currency"
				name="currency"
				className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
			>
				<option>USD</option>
				<option>CAD</option>
				<option>EUR</option>
			</select> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
