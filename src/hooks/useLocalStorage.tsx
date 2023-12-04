import { useState } from "react";

export const useLocalStorage = (defaultValue = '') => {
	const [value, setValue] = useState(defaultValue);

	const save = (_value: string) => {
		setValue(_value)
	}

	return { value, save };
}