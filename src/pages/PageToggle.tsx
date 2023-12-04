import { useToggle } from "../hooks/useToggle";

export const PageToggle = () => {
	const [isOnline, toggle] = useToggle();

	return (
		<div className="flex gap-3 items-center">
			<button onClick={() => toggle()}>change online status</button>
			<p className="text-xl">{isOnline ? 'now online' : 'now offline'}</p>
		</div>
	)
}