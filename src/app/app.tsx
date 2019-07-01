import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';
import Header from '../header/header';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

class AppState {
	public siteTitle: string;

	public siteDescription: string;

	public siteUrl: string;
}

class App extends Component<{}, AppState> {
	public constructor(props: {}) {
		super(props);

		this.initializeModel();

		this.state = new AppState();
	}

	private async initializeModel(): Promise<void> {
		const json = await ApiRequest.fetch(URLS.getSiteDetails());

		this.setState({
			siteTitle: json.name,
			siteDescription: json.description,
			siteUrl: json.url
		});
	}

	public render(): JSX.Element {
		const { siteTitle, siteDescription, siteUrl } = this.state;
		return (
			<div className="main-container">
				<Header
					title={siteTitle}
					description={siteDescription}
					url={siteUrl}
				/>
				<Navigation />
				<Footer
					title={siteTitle}
				/>
			</div>
		);
	}
}

export default App;
