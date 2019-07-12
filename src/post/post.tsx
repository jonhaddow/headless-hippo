import React from "react";
import { Location } from "history";

interface PostProps {
	location: Location;
}

export default function Post (props: PostProps): JSX.Element {
	const { location: { pathname } } = props;

	return (
		<p>
			pathname:
			{pathname}
		</p>
	)
}