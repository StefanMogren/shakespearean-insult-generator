import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '@myApp/landing-page';
import { ShowRandomPage } from '@myApp/show-random-page';
import { ShowAllPage } from '@myApp/show-all-page';
import { AddNewPage } from '@myApp/add-new-page';

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
	{
		path: '/show-random',
		element: <ShowRandomPage />,
	},
	{
		path: '/show-all',
		element: <ShowAllPage />,
	},
	{
		path: '/add-new',
		element: <AddNewPage />,
	},
]);
