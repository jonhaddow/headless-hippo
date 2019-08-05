export default interface MediaModel {
	alt_text: string;
	media_details: {
		sizes: {
			large: {
				source_url: string;
			};
		};
	};
}
