import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "store/reducer";
import "stylesheets/Footer.scss";

interface Contributor {
	avatar_url: string;
	contributions: number;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: string;
	url: string;
}

export default function Footer() {
	// const [contributors, setContributors] = useState<Contributor[]>([]);
	const { timerId } = useSelector((state: State) => state.time);
	// const [showList, setShowList] = useState<boolean>(false);
	// useEffect(() => {
	// 	const URL =
	// 		"https://api.github.com/repos/";
	// 	fetch(URL)
	// 		.then((res) => res.json())
	// 		.then((data: Contributor[]) =>
	// 			data.filter(
	// 				(contributor) => contributor.login !== "xiguacontrib"
	// 			)
	// 		)
	// 		.then((filtered) => setContributors(filtered));
	// }, []);

	return (
		<div className={`bottom-area ${timerId ? "hidden" : ""}`}>
			<span className="hint">
				<kbd>Tab</kbd> to restart test
			</span>
			<footer>
				<a
					target="_blank"
					rel="noreferrer"
					href="http://www.watermelons.com/">
					#improveyourself
				</a>
				<span>
					created by{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="http://www.watermelons.com/">
						西瓜
					</a>
				</span>
			</footer>
		</div>
	);
}
