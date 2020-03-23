import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/app';

import Albums from './components/Albums';
import Details from './components/Details';

const App: React.SFC<IAppProps> = props => {


	return (

		<BrowserRouter>
			<main className="container">
				<Switch>
					<Route exact path="/" component={Albums} />
					<Route exact path="/:id/details" component={Details} />
				</Switch>
			</main>
		</BrowserRouter>

	);
}

export default App;

interface IAppProps { }

