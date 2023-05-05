import React, { useEffect, useState } from 'react';
import { getMovies } from '../helpers/getMovies';
import { MovieCards } from './MovieCards';

export const MoviesContainer = () => {
	const [movies, setMovies] = useState([]);

	const getMovieData = async () => {
		const newMovies = await getMovies();
		setMovies(newMovies);
	};

	useEffect(() => {
		getMovieData();
	}, []);

	return (
		<div>
			<h2>Movies</h2>
			<div className="card-grid">
				{movies.map((movie) => (
					<MovieCards key={movie.id} {...movie} />
				))}
			</div>
		</div>
	);
};
