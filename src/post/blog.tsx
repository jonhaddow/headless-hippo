import Post from "./post";
import { URLS } from "../models/api_request";

export default class Blog extends Post{

	public getUrl(): string {
		return URLS.getBlog(this.props.match.params.slug);
	}

}