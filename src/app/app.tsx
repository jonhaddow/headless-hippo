import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ApiRequest, { URLS } from '../models/api_request';
import Header from '../header/header';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';
import Content from '../content/content';
import styles from './app.css';

interface AppState {
	name?: string;
	description?: string;
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
		const { name, description } = this.state;
		return (
			<div className={styles.wrapper}>
				<BrowserRouter>
					<Header
						title={name}
						description={description}
					/>
					<Navigation />
					<Content />
					<Footer
						title={name}
					/>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
