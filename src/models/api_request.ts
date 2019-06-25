export class URLS {
	static baseUrl() {
		return 'https://wastefreemama.com/wp-json';
	}

	static getSiteDetails() {
		return URLS.baseUrl();
	}

	static getPosts() {
		return `${URLS.baseUrl()}/wp/v2/posts?context=embed&_embed`;
	}

	static getRecipes() {
		return `${URLS.baseUrl()}/wp/v2/jh-recipes?context=embed&_embed`;
	}
}

export default class ApiRequest {
	static async fetch(url : string) {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Unsuccessful api response: ${response}`);
		}

		return response.json();
	}
}
