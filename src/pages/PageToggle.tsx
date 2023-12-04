import { useState } from "react";

export const PageToggle = () => {
	const [isOnline, setIsOnline] = useState(false);
	return (
		<div className="flex gap-3 items-center">
			<button onClick={() => setIsOnline(!isOnline)}>change online status</button>
			<p className="text-xl">{isOnline ? 'now online' : 'now offline'}</p>
		</div>
	)
}