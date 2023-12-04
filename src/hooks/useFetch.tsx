/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string, mockWait = false) => {
	const [items, setItems] = useState<T>([] as T);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const _items = await response.json();
			if (mockWait) {
				setTimeout(
					() => {
						setItems(_items);
					},
					Math.floor(Math.random() * 2000) + 1000
				);
			} else {
				setItems(_items);
			}
		})();
	}, []);

	return { items };
};
