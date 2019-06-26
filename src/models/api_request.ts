export class URLS {
	static baseUrl() : string{
		return 'https://wastefreemama.com/wp-json';
	}

	static getSiteDetails() : string {
		return URLS.baseUrl();
	}

	static getPosts() : string {
		return `${URLS.baseUrl()}/wp/v2/posts?context=embed&_embed`;
	}

	static getRecipes() : string {
		return `${URLS.baseUrl()}/wp/v2/jh-recipes?context=embed&_embed`;
	}
}

export default class ApiRequest {
	static async fetch(url : string) : Promise<any> {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Unsuccessful api response: ${response}`);
		}

		return response.json();
	}
}
