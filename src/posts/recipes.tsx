import Posts from "./posts";
import { URLS } from "../models/api_request";

export default class Recipes extends Posts {

	public getLinkUrl(slug: string): string {
		return `/recipe/${slug}`;
	}

	public getTitle(): string {
		return 'Recipes';
	}
	
	public getUrl(): string {
		return URLS.getRecipes();
	}

}