import { create } from 'zustand';

const insulting = [
	{
		insult: 'Bad',
		play: 'some person',
	},
	{
		insult: 'Mean',
		play: 'someone',
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
					// id:
				},
			],
		}));
	},
}));
