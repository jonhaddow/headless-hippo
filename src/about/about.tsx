import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';
import Page from '../models/page';

export default class About extends Component<{}, { model: Page }> {

	public constructor(props: {}) {
		super(props);

		this.initializeModel();
	}

	private async initializeModel(): Promise<void> {
		const response = await ApiRequest.fetch<Page[]>(URLS.getAboutPage());
		this.setState({ model: response[0] });
	}

	public render(): JSX.Element {

		if (this.state == null) {
			return null;
		}

		const { 
			model: { 
				title: { rendered: title }, 
				content: { rendered: content }
			}
		} = this.state;

		return (
			<section>
				<article>
					<h1>{title}</h1>

					<div dangerouslySetInnerHTML={{ __html: content }} />
				</article>
			</section>
		);
	}
}