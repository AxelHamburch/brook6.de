import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';
import logo from '../../assets/logo-brook6.svg';

export default function Hero() {
	return (
		<section className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
			<div
				className="brook-fog pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brook-900 via-dusk-950 to-dusk-950 opacity-90"
				aria-hidden="true"
			/>

			<div className="mx-auto max-w-4xl text-center">
				<img
					src={logo}
					alt="₿rook6 – Bitcoin Meetup, Speicherstadt Hamburg"
					className="mx-auto mb-8 h-20 w-auto opacity-95 sm:h-24"
				/>

				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500"
				>
					₿rook6
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mt-4 text-4xl font-bold tracking-tight text-dusk-50 sm:text-5xl md:text-6xl"
				>
					Bitcoin im Schatten der <span className="text-brick-400">roten Lagerhäuser</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-dusk-200"
				>
					<span className="inline-flex items-center gap-2 font-semibold">
						<CalendarDays className="text-brand-500" size={18} />
						Jeden 1. Donnerstag im Monat
					</span>
					<span className="inline-flex items-center gap-2 font-semibold">
						<MapPin className="text-brook-400" size={18} />
						Brook 6, Speicherstadt Hamburg
					</span>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-6 max-w-2xl text-lg text-dusk-200"
				>
					Zwischen Klinker, Fleet und Nebel treffen sich Hamburger Bitcoiner zum
					Austausch – fernab vom Trubel, bei Kerzenschein und knarrenden
					Dielenböden. Kein Hype, keine Kursgespräche – nur Bitcoin, wie es
					gemeint war.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-10 flex flex-wrap items-center justify-center gap-4"
				>
					<a
						href="/#facts"
						className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-dusk-950 transition hover:bg-brand-400"
					>
						Nächstes Treffen
					</a>
					<a
						href="/#about"
						className="inline-flex items-center gap-2 rounded-full border border-brook-500/60 px-6 py-3 text-sm font-semibold text-brook-200 transition hover:border-brook-400 hover:text-brook-100"
					>
						Über ₿rook6
					</a>
				</motion.div>
			</div>
		</section>
	);
}
