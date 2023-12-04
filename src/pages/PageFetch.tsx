import { useEffect, useState } from "react";
import { ISkill } from "../interfaces";

export const PageFetch = () => {
	const [skills, setSkills] = useState<ISkill[]>([]);

	useEffect(() => {
		(async () => {
		const response = await fetch('https://edwardtanguay.vercel.app/share/skills_with_id.json');
			const _skills = await response.json();
			setSkills(_skills);
		})();
	},[])
	return (
		<p>There are {skills.length} skills.</p>
	)
}
