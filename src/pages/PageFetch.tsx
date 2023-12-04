import { useFetch } from "../hooks/useFetch";
import { ISkill } from "../interfaces";

export const PageFetch = () => {
	const { items: skills, isLoading } = useFetch<ISkill[]>(
		"https://edwardtanguay.vercel.app/share/skills_with_id.json", true
	);

	return (
		<div>
			{isLoading ? (
				<p>Loading skills...</p>
			) : (
			<>
			<p>There are {skills.length} skills.</p>
			<p className="text-xs">
				{skills
					.map((skill) => {
						return skill.name;
					})
					.join(", ")}
			</p>
			</>
			)}
		</div>
	);
};
