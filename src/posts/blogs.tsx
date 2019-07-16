import Posts from "./posts";
import { URLS } from "../models/api_request";

export default class Blogs extends Posts {

	public getLinkUrl(slug: string): string {
		return `/blog/${slug}`;
	}

	public getTitle(): string {
		return 'Blogs';
	}
	
	public getUrl(): string {
		return URLS.getBlogs();
	}

}