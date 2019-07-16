import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApiRequest, { URLS } from '../models/api_request';
import Header from '../header/header';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import Content from '../content/content';

interface AppState {
	name?: string;
	description?: string;
	url?: string;
}

class App extends Component<{}, AppState> {
	public constructor(props: {}) {
		super(props);

		this.initializeModel();

		this.state = {};
	}

	private async initializeModel(): Promise<void> {
		const json = await ApiRequest.fetch<AppState>(URLS.getSiteDetails());
		this.setState(json);
	}

	public render(): JSX.Element {
		const { name, description, url } = this.state;
		return (
			<BrowserRouter>
				<Header
					title={name}
					description={description}
					url={url}
				/>
				<Navigation />
				<Content />
				<Footer
					title={name}
				/>
			</BrowserRouter>
		);
	}
}

export default App;
