import { DisplayInsult } from '@myApp/display-insult';
import './index.css';
export function ShowRandomPage() {
	return (
		<section className='random-page'>
			<h1 className='random-page__title'>Random insult</h1>
			<section className='random-page__insult'>
				<DisplayInsult
					insult={'you are a meanie'}
					play={'"some place"'}
				/>
			</section>
		</section>
	);
}
