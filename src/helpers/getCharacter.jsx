import axios from 'axios';

export const getCharacter = async (id) => {
	const url = `https://api.jikan.moe/v4/anime/${id}/characters`;
	const { data } = await axios(url);

	const characters = data.data.map((character) => ({
		id: character.character.mal_id,
		name: character.character.name,
		url: character.character.url,
	}));
	console.log(characters);

	return characters;
};
