import { Link } from 'react-router-dom';
export function Header() {
	return (
		<header className='page'>
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/show-random'}>Random Insult</Link>
					</li>
					<li>
						<Link to={'/show-all'}>All Insults</Link>
					</li>
					<li>
						<Link to={'/add-new'}>Add New Insult</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
