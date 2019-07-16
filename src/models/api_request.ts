export class URLS {
	public static baseUrl(): string{
		return 'https://wastefreemama.com/wp-json';
	}

	public static getAboutPage(): string {
		return `${URLS.baseUrl()}/wp/v2/pages?slug=about`;
	}

	public static getSiteDetails(): string {
		return URLS.baseUrl();
	}

	public 	static getBlogs(): string {
		return `${URLS.baseUrl()}/wp/v2/posts?context=embed&_embed`;
	}

	public static getBlog(slug: string): string {
		return `${URLS.baseUrl()}/wp/v2/posts?slug=${slug}`;
	}

	public static getRecipes(): string {
		return `${URLS.baseUrl()}/wp/v2/jh-recipes?context=embed&_embed`;
	}

	public static getRecipe(slug: string): string {
		return `${URLS.baseUrl()}/wp/v2/jh-recipes?slug=${slug}`;
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
