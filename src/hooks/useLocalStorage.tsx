/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useLocalStorage = (idCode: string, defaultValue = "") => {
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		const _value = localStorage.getItem(idCode);
		if (_value !== null) {
			setValue(_value);
		}
	}, []);

	const save = (_value: string) => {
		setValue(_value);
		localStorage.setItem(idCode, _value);
	};

	return { value, save };
};
