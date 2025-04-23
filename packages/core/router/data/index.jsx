import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from '@myApp/landing-page';
import { ShowRandomPage } from '@myApp/show-random-page';
import { ShowAllPage } from '@myApp/show-all-page';
import { AddNewPage } from '@myApp/add-new-page';
import { Outlet } from 'react-router-dom';
import { Header } from '@myApp/header';

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: (
			<h1>
				Oops! This page doesn't seem to exist. Try and check your
				spelling.
			</h1>
		),
		children: [
			{
				path: '/',
				element: <LandingPage />,
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
		],
	},
]);
