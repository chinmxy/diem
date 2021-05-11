import React, { useState } from "react";

import Select from "react-select";
import OptionItem from "./OptionItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

// import "./InputField.css";

import BTCicon from "../../img/currency-icons/BTC.svg";

const InputField2 = props => {
	const useStyles = makeStyles({
		root: {
			fontFamily: "Montserrat",
			fontWeight: 900,
			fontSize: "24px",
		},
		underline: {
			"&&&:before": {
				borderBottom: "none",
			},
			"&&:after": {
				borderBottom: "none",
			},
		},
	});

	const options = [
		{
			value: "BTC",
			label: <OptionItem icon={BTCicon} countryCode='GB' currency='BTC' />,
		},
		{
			value: "ETH",
			label: <OptionItem icon={BTCicon} countryCode='US' currency='ETH' />,
		},
	];

	const customStyles = {
		control: (provided, styles) => ({
			...provided,
			border: "0px solid black",
			width: "175px",
		}),
		valueContainer: (provided, styles) => ({
			...provided,
			height: "60px",
		}),
		indicatorSeparator: () => ({}),

		option: (provided, state) => ({
			...provided,
			borderBottom: "1px dotted pink",
			color: "black",
			padding: 10,
		}),

		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = "opacity 300ms";
			return { ...provided, opacity, transition };
		},
	};

	const [value, setValue] = useState("");

	const onChange = () => {};
	const classes = useStyles();
	return (
		<div className='flex flex-row items-center'>
			{/* <FloatingLabelInput
				id='example-3'
				label='label'
				onBlur={action("onBlur")}
				onChange={action("onChange")}
				onFocus={action("onFocus")}
				value={value}
			/> */}

			<TextField
				className='ml-4'
				label='You Get'
				InputProps={{ classes }}
				InputLabelProps={{
					style: {
						fontFamily: "Montserrat",
						fontWeight: "400",
						fontSize: "14px",
						color: "black",
					},
				}}
				defaultValue='0.112'
			/>
			<Select
				defaultValue={options[0]}
				isSearchable={false}
				styles={customStyles}
				options={options}
				width='200px'
				theme={theme => ({
					...theme,
					borderRadius: 0,
					colors: {
						...theme.colors,
						primary25: "primary25",
						primary: "neutral5",
					},
				})}
			/>
		</div>
	);
};

export default InputField2;
