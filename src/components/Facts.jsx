import React from 'react';
import { CalendarDays, Landmark, Waves } from 'lucide-react';

const facts = [
	{
		icon: CalendarDays,
		iconClass: 'text-brand-500',
		title: 'Jeden 1. Mittwoch',
		description:
			'Ab 19 Uhr: Hamburg ₿itcoin Stammtisch – das Original, seit 2013. Für Bitcoin und cRypto.',
	},
	{
		icon: CalendarDays,
		iconClass: 'text-brand-500',
		title: 'Jeden letzten Donnerstag',
		description:
			'Ab 19 Uhr: EINUNDZWANZIG Hamburg – Bitcoin only. Ein Deep Dive ins Rabbit Hole. 🕳🐇',
	},
	{
		icon: Landmark,
		iconClass: 'text-brick-400',
		title: 'Brook 6, Speicherstadt',
		description:
			'Mitten im Hamburger UNESCO-Welterbe: rote Klinkerfassaden, schmale Gassen und jahrhundertealte Lagerhäuser als Kulisse.',
	},
	{
		icon: Waves,
		iconClass: 'text-brook-400',
		title: 'Nebel über dem Fleet',
		description:
			'Bei Ebbe und Flut, Kerzenschein und Kaffee – Bitcoin-Gespräche abseits des Alltags, mit Blick aufs dunkle Wasser.',
	},
];

export default function Facts() {
	return (
		<section id="facts" className="scroll-mt-24 px-6 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold text-dusk-50 sm:text-4xl">Auf einen Blick</h2>
					<p className="mt-4 text-dusk-300">
						Hamburg hätte gerne viele Bitcoin-Treffen – ₿rook6 ist aber jetzt schon das leiseste, dunkelste
						und am härtesten verankerte davon.
					</p>
				</div>

				<div className="mt-14 grid gap-8 sm:grid-cols-2">
					{facts.map(({ icon: Icon, iconClass, title, description }) => (
						<div
							key={title}
							className="rounded-2xl border border-dusk-800 bg-dusk-900/60 p-8 transition hover:border-brick-500/60 hover:shadow-lg hover:shadow-black/30"
						>
							<Icon className={iconClass} size={28} />
							<h3 className="mt-4 text-lg font-semibold text-dusk-50">{title}</h3>
							<p className="mt-2 text-sm text-dusk-300">{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
