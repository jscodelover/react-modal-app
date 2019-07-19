import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Modal from './modal/Modal';

function App() {
	return (
		<div>
			<div className='header'>Header</div>
			<Switch>
				<Route path='/:id' component={Modal} />
				<Route path='/' component={Home} />
			</Switch>
			<div className='footer'>Footer</div>
		</div>
	);
}

export default App;
