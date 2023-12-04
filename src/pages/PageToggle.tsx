import { useState } from "react";

export const PageToggle = () => {
	const [isOnline, setIsOnline] = useState(false);
	return (
		<div>
			<button>change online status</button>
			<p>{isOnline ? 'now online' : 'now offline'}</p>
		</div>
	)
}