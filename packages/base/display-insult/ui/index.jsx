import { Link } from 'react-router-dom';
import './index.css';
export function DisplayInsult({ insult, play, id }) {
	return (
		<li className='insult-item' key={id}>
			<p className='insult-item__insult'>{insult}</p>
			<p className='insult-item__play'>{play}</p>
		</li>
	);
}
