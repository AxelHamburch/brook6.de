import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
	{ href: '/#facts', label: 'Auf einen Blick' },
	{ href: '/#about', label: 'Über uns' },
];

export default function Navigation() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-dusk-800 bg-dusk-950/90 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link to="/" className="text-xl font-bold tracking-tight text-dusk-50">
					₿rook<span className="text-brand-500">6</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-dusk-300 transition hover:text-brook-300"
						>
							{link.label}
						</a>
					))}
				</div>

				<button
					className="text-dusk-100 md:hidden"
					aria-label="Menü öffnen"
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{open && (
				<div className="border-t border-dusk-800 bg-dusk-950 px-6 py-4 md:hidden">
					<div className="flex flex-col gap-4">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-dusk-300 hover:text-brook-300"
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
