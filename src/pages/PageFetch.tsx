import { useFetch } from "../hooks/useFetch";

export const PageFetch = () => {
	const { items: skills } = useFetch(
		"https://edwardtanguay.vercel.app/share/skills_with_id.json"
	);

	return <p>There are {skills.length} skills.</p>;
};
