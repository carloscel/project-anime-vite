import { Characters } from './components/Characters';
import { MoviesContainer } from './components/MoviesContainer';

export const App = () => {
	return (
		<div>
			<h1>One Piece</h1>
			<div className="container">
				<MoviesContainer />
				<Characters />
			</div>
		</div>
	);
};
