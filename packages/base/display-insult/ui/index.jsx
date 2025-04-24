import { Link } from 'react-router-dom';
import './index.css';
export function DisplayInsult({ insult, play }) {
	return (
		<>
			<p className='insult-item__insult'>{insult}</p>
			<p className='insult-item__play'>{play}</p>
		</>
	);
}
