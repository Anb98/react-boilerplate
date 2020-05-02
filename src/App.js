import React,
{
	lazy,
	Suspense,
} from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Loading from '@pages/Loading';


// pages components
const Ejemplo = lazy(() => import('@pages/Ejemplo'));


const App = () => (
	<Router>
		<Suspense fallback={<Loading />}>
			<Switch>
				<Route exact path='/' component={Ejemplo} />
			</Switch>
		</Suspense>
	</Router>
);

export default App;
