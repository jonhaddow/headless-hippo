export default interface PostModel {
	id: number;
	title: {
		rendered: string;
	};
	content?: {
		rendered: string;
	};
	slug: string;
	_embedded: {
		["wp:featuredmedia"]: {
			alt_text: string;
			media_details: {
				sizes: {
					medium: {
						source_url: string;
					};
				};
			};
		}[];
	};
}