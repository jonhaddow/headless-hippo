import Post from "./post";
import { URLS } from "../models/api_request";

export default class Recipe extends Post{

	public getUrl(): string {
		return URLS.getRecipe(this.props.match.params.slug);
	}

}