import React, { useState } from "react";

import Select from "react-select";
import OptionItem from "./OptionItem";
import FloatingLabelInput from "react-floating-label-input";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const InputField = () => {
	const useStyles = makeStyles({
		root: {
			fontWeight: 700,
		},
		label: {
			color: "red",
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
			value: "GBP",
			label: <OptionItem countryCode='GB' currency='GBP' />,
		},
		{
			value: "USD",
			label: <OptionItem countryCode='US' currency='USD' />,
		},
	];

	const customStyles = {
		input: () => ({
			width: 100,
		}),
		option: (provided, state) => ({
			...provided,
			borderBottom: "1px dotted pink",
			color: state.isSelected ? "red" : "blue",
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
		<div className='flex flex-row space-x-4 items-center'>
			{/* <FloatingLabelInput
				id='example-3'
				label='label'
				onBlur={action("onBlur")}
				onChange={action("onChange")}
				onFocus={action("onFocus")}
				value={value}
			/> */}

			<TextField label='You Pay' color='dark' InputProps={{ classes }} />
			<Select
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

export default InputField;
