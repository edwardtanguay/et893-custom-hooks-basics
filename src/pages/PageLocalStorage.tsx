import { useLocalStorage } from "../hooks/useLocalStorage"

export const PageLocalStorage = () => {
	const { value: title, save: saveTitle } = useLocalStorage('nnn');

	return (
		<p>Title = [{title}]</p>
	)
}
