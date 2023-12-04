import { useToggle } from "../hooks/useToggle";

export const PageToggle = () => {
	const [isOnline, toggleIsOnline] = useToggle();
	const [isGerman, toggleLanguage] = useToggle(true);

	return (
		<>
		<div className="flex gap-3 items-center mb-3">
			<button onClick={() => toggleIsOnline()}>change online status</button>
			<p className="text-xl">{isOnline ? 'now online' : 'now offline'}</p>
		</div>
		<div className="flex gap-3 items-center">
			<button onClick={() => toggleLanguage()}>change language</button>
			<p className="text-xl">{isGerman ? 'Hallo' : 'Hello there.'}</p>
		</div>
		</>
	)
}