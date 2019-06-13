export default class SiteModel {
	getUrl() {
		return "https://wastefreemama.com/wp-json/";
	}

	async fetch() {
		let response = await fetch(this.getUrl());

		if (!response.ok) {
			throw new Error("Unsuccessful service response");
		}

		return await response.json();
	}
}