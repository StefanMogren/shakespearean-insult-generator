import { create } from 'zustand';
// https://santosnr6.github.io/Data/insults.json
const insulting = [
	{
		insult: 'Bad',
		play: 'some person',
		id: 1,
	},
	{
		insult: 'Mean',
		play: 'someone',
		id: 2,
	},
];

export const useInsultStore = create((set) => ({
	insults: 'Empty, like your heart.',
	setInsults: () => {
		set({ insults: insulting });
	},
	addNewInsult: (newInsult, fromPlay, id) => {
		set((state) => ({
			insults: [
				...state.insults,
				{
					insult: newInsult,
					play: fromPlay,
					id: id,
				},
			],
		}));
	},
	removeInsult: (id) => {
		set((state) => {
			const newState = state.insults.filter((insult) => insult.id !== id);
			return newState;
		});
	},
}));
