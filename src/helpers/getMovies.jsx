import axios from 'axios';

export const getMovies = async () => {
	const url = `https://api.jikan.moe/v4/anime?q=one piece&type=Movie`;
	const { data } = await axios(url);

	const movies = data.data.map((movie) => ({
		id: movie.mal_id,
		title: movie.title,
		url: movie.images.jpg.image_url,
	}));
	console.log(movies);

	return movies;
};
