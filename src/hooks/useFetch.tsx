/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string) => {
	const [items, setItems] = useState<T>([] as T);

	useEffect(() => {
		(async () => {
			const response = await fetch(url);
			const _items = await response.json();
			setItems(_items);
		})();
	}, []);

	return { items };
};
