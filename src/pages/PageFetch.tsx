import { useFetch } from "../hooks/useFetch";
import { IJob, ISkill } from "../interfaces";

export const PageFetch = () => {
	const { items: skills, isLoading: isLoadingSkills } = useFetch<ISkill[]>(
		"https://edwardtanguay.vercel.app/share/skills_with_id.json",
		true
	);
	const { items: jobs, isLoading: isLoadingJobs } = useFetch<IJob[]>(
		"https://edwardtanguay.vercel.app/share/jobs.json", true
	);

	return (
		<>
			<div className="mb-4">
				{isLoadingSkills ? (
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
			<div>
				{isLoadingJobs ? (
					<p>Loading jobs...</p>
				) : (
					<p>There are {jobs.length} jobs.</p>
				)}
			</div>
		</>
	);
};
