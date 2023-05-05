import React from 'react';
import { getCharacter } from '../helpers/getCharacter';

export const MovieCards = ({ id, url, title }) => {
	const onClickCard = () => {
		getCharacter(id);
	};

	return (
		<div className="card" onClick={onClickCard}>
			<img src={url} alt={title} />
			<h4>{title}</h4>
		</div>
	);
};
