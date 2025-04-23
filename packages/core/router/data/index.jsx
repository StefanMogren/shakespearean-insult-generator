import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '@myApp/landing-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
		errorElement: (
			<h1>
				Oops! This page doesn't seem to exist. Try and check your
				spelling.
			</h1>
		),
	},
]);
