import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';
import Header from '../header/header';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

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
			<div className="main-container">
				<Header
					title={name}
					description={description}
					url={url}
				/>
				<Navigation />
				<Footer
					title={name}
				/>
			</div>
		);
	}
}

export default App;
