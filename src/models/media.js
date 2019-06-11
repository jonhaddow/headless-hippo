import SiteModel from "./site_model";

export default class Media extends SiteModel {
	getUrl() {
		return "https://wastefreemama.com/wp-json/wp/v2/media";
	}
}