import { useToggle } from "../hooks/useToggle";

export const PageToggle = () => {
	const [isOnline, toggleIsOnline, isOnlineCount] = useToggle(false, 3);
	const [isGerman, toggleLanguage, languageCount] = useToggle(true, 5);

	return (
		<>
		<div className="flex gap-3 items-center mb-3">
			<button onClick={() => toggleIsOnline()}>change online status {isOnlineCount}</button>
			<p className="text-xl">{isOnline ? 'now online' : 'now offline'}</p>
		</div>
		<div className="flex gap-3 items-center">
				<button onClick={() => toggleLanguage()}>change language {languageCount}</button>
			<p className="text-xl">{isGerman ? 'Hallo' : 'Hello there.'}</p>
		</div>
		</>
	)
}