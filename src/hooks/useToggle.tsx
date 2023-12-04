import { useState } from "react";

export const useToggle = (defaultValue: boolean = true):[boolean, () => void] => {
	const [value, setValue] = useState(defaultValue);

	const toggle = () => {
		setValue(!value);
	}
	return [value, toggle];
}