import { Link } from 'react-router-dom';
import './index.css';
export function Header() {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<ul className='header__nav-list'>
					<li className='header__link-item'>
						<Link to={'/'}>Home</Link>
					</li>
					<li className='header__link-item'>
						<Link to={'/show-random'}>Random Insult</Link>
					</li>
					<li className='header__link-item'>
						<Link to={'/show-all'}>All Insults</Link>
					</li>
					<li className='header__link-item'>
						<Link to={'/add-new'}>Add New Insult</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
