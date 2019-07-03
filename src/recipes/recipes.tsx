import React, { Component } from 'react';
import ApiRequest, { URLS } from '../models/api_request';

interface Recipe {
	id: number;
	title: {
		rendered: string;
	};
	_embedded: {
		["wp:featuredmedia"]: {
			alt_text: string;
			media_details: {
				sizes: {
					medium: {
						source_url: string;
					};
				};
			};
		}[];
	};
}

class RecipesState {
	public recipes: Recipe[];
}

export default class Recipes extends Component<{}, RecipesState> {
	public constructor(props: {}) {
		super(props);

		this.initializeModel();

		this.state = new RecipesState();
	}

	private async initializeModel(): Promise<void> {
		const response = await ApiRequest.fetch<Recipe[]>(URLS.getRecipes())

		this.setState({
			recipes: response
		});
	}

	public render(): JSX.Element {
		const { recipes } = this.state;

		if (!recipes) {
			return null;
		}
		
		const recipeEls = recipes.map((recipe): JSX.Element => {
			const innerEls: JSX.Element[] = [];

			const image = recipe._embedded["wp:featuredmedia"][0];
			if (image !== null) {
				innerEls.push(<img key={`img-${recipe.id}`} src={image.media_details.sizes.medium.source_url} alt={image.alt_text} />);
			}

			innerEls.push(<p key={`title-${recipe.id}`}>{recipe.title.rendered}</p>);
			
			return (<li key={recipe.id}>{innerEls}</li>);
		});

		return(
			<div className="recipes">
				<h1>Recipes</h1>
				<ul>{recipeEls}</ul>
			</div>
		);
	}
}