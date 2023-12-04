import { useLocalStorage } from "../hooks/useLocalStorage";

export const PageLocalStorage = () => {
	const { value: title, save: saveTitle } = useLocalStorage("title", "");
	const { value: subtitle, save: saveSubTitle } = useLocalStorage(
		"subtitle",
		""
	);

	return (
		<>
			<p className="mb-4">
				Title ={" "}
				<input
					value={title}
					onChange={(e) => saveTitle(e.target.value)}
				/>{" "}
				({title})
			</p>
			<p>
				Subtitle ={" "}
				<input
					value={subtitle}
					onChange={(e) => saveSubTitle(e.target.value)}
				/>{" "}
				({subtitle})
			</p>
		</>
	);
};
