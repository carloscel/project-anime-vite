import { useState } from 'react';
import { Characters } from './components/Characters';
import { MoviesContainer } from './components/MoviesContainer';

export const App = () => {
	const [idCharacter, setIdCharacter] = useState('');

	return (
		<div>
			<h1>One Piece</h1>
			<div className="container">
				<MoviesContainer setIdCharacter={setIdCharacter} />
				<Characters />
			</div>
		</div>
	);
};
