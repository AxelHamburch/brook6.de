import React from 'react';

export default function About() {
	return (
		<section id="about" className="scroll-mt-24 bg-dusk-900 px-6 py-20">
			<div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
				<div>
					<h2 className="text-3xl font-bold text-dusk-50 sm:text-4xl">Was ist ₿rook6?</h2>
					<p className="mt-6 text-dusk-200">
						₿rook6 ist ein fiktiver, nicht-kommerzieller Bitcoin-Stammtisch, benannt
						nach einer schmalen Gasse in der Hamburger Speicherstadt. Zwischen
						Klinkerwänden und Fleeten treffen wir uns, um über Selbstverwahrung,
						Nodes, Lightning und das harte Geld zu sprechen – ganz ohne
						Kursgeschrei.
					</p>
					<p className="mt-4 text-dusk-200">
						Das Programm ist bewusst offen gehalten: vom ersten Kontakt mit einer
						Hardware-Wallet bis zum Fachgespräch über Soft Forks ist alles dabei.
						Niemand muss Vorwissen mitbringen – nur Neugier.
					</p>
					<p className="mt-4 text-dusk-200">
						Teilnahme ist kostenlos. Getränke gibt es gegen eine kleine Spende –
						natürlich auch per Lightning.
					</p>
				</div>

				<div
					aria-hidden="true"
					className="relative aspect-video overflow-hidden rounded-2xl border border-dusk-700 bg-gradient-to-br from-brook-900 via-dusk-900 to-brick-900"
				>
					<svg viewBox="0 0 400 225" className="h-full w-full opacity-90">
						{/* Nebliger Nachthimmel über dem Fleet */}
						<rect width="400" height="225" fill="url(#sky)" />
						<defs>
							<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="#172a32" />
								<stop offset="100%" stopColor="#0e0b09" />
							</linearGradient>
						</defs>
						{/* Lagerhaus-Silhouetten */}
						<g fill="#3a1613">
							<rect x="10" y="90" width="60" height="100" />
							<rect x="78" y="70" width="55" height="120" />
							<rect x="140" y="100" width="50" height="90" />
							<rect x="270" y="80" width="60" height="110" />
							<rect x="335" y="95" width="55" height="95" />
						</g>
						<g fill="#f7931a" opacity="0.85">
							<rect x="25" y="105" width="8" height="10" />
							<rect x="45" y="105" width="8" height="10" />
							<rect x="95" y="90" width="8" height="10" />
							<rect x="115" y="90" width="8" height="10" />
							<rect x="285" y="100" width="8" height="10" />
							<rect x="350" y="112" width="8" height="10" />
						</g>
						{/* Fleet */}
						<rect x="0" y="190" width="400" height="35" fill="#1d353f" />
						<path
							d="M0 200 Q 50 192 100 200 T 200 200 T 300 200 T 400 200"
							stroke="#4f8396"
							strokeWidth="2"
							fill="none"
							opacity="0.6"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
