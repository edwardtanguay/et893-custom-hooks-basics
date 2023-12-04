import { useState } from "react";

export const useToggle = (
	defaultValue: boolean = false,
	maxToggles = 999
): [boolean, () => void, number] => {
	const [value, setValue] = useState(defaultValue);
	const [count, setCount] = useState(0);

	const toggle = () => {
		if (count < maxToggles) {
			setValue(!value);
			setCount(count + 1);
		}
	};

	return [value, toggle, count];
};
