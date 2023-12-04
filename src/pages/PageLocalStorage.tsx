import { useLocalStorage } from "../hooks/useLocalStorage"

export const PageLocalStorage = () => {
	const { value: title, save: saveTitle } = useLocalStorage('title', '');

	return (
		<p>Title = <input value={title} onChange={(e) => saveTitle(e.target.value)} /> ({title})</p>
	)
}
