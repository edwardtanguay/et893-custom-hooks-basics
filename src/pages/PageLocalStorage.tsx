import { useLocalStorage } from "../hooks/useLocalStorage"

export const PageLocalStorage = () => {
	const { value: title, save: saveTitle } = useLocalStorage('nnn');

	return (
		<p>Title = <input value={title} onChange={(e) => saveTitle(e.target.value)} /> ({title})</p>
	)
}
