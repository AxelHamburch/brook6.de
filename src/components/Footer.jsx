import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="border-t border-dusk-800 bg-dusk-950 px-6 py-10">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-dusk-300 sm:flex-row">
				<p>&copy; {new Date().getFullYear()} ₿rook6 · fiktives Platzhalter-Projekt</p>
				<p className="text-xs text-dusk-500">Erstellt mit 🧱 und ❤️ – Block {__BLOCK_HEIGHT__}</p>
				<div className="flex items-center gap-6">
					<Link to="/de/impressum" className="hover:text-brook-300">
						Impressum
					</Link>
					<Link to="/de/datenschutz" className="hover:text-brook-300">
						Datenschutz
					</Link>
					<a
						href="https://github.com/AxelHamburch/brook6.de"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Quellcode auf GitHub"
						className="transition hover:text-brook-300"
					>
						<Github size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
