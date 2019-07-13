export class URLS {
	public static baseUrl(): string{
		return 'https://wastefreemama.com/wp-json';
	}

	public static getSiteDetails(): string {
		return URLS.baseUrl();
	}

	public 	static getPosts(): string {
		return `${URLS.baseUrl()}/wp/v2/posts?context=embed&_embed`;
	}

	public static getPost(slug: string): string {
		return `${URLS.baseUrl()}/wp/v2/posts?slug=${slug}`;
	}

	public static getRecipes(): string {
		return `${URLS.baseUrl()}/wp/v2/jh-recipes?context=embed&_embed`;
	}
}

export default class ApiRequest {
	public static async fetch<T>(url: string): Promise<T> {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Unsuccessful api response: ${response}`);
		}

		return response.json();
	}
}
