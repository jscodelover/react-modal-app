import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Modal from './modal/Modal';

function App() {
	return (
		<Switch>
			<Route path='/:id' component={Modal} />
			<Route path='/' component={Home} />
		</Switch>
	);
}

export default App;
