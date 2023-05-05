import React from 'react';
import { getMovies } from './helpers/getMovies';

export const App = () => {
	getMovies();
	return <div>App</div>;
};
