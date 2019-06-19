export class URLS {
	static baseUrl(){
		return "https://wastefreemama.com/wp-json";
	}

	static getSiteDetails() {
		return URLS.baseUrl();
	}

	static getNavMenu(){
		return `${URLS.baseUrl()}/custom/menu/main-menu`;
	}
}

export default class ApiRequest {

	async fetch(url) {
		let response = await fetch(url);

		if (!response.ok) {
			throw new Error("Unsuccessful api response", response);
		}

		return await response.json();
	}
}