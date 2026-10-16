import React from 'react';

export default function Impressum() {
	return (
		<section className="mx-auto max-w-3xl px-6 py-20 text-dusk-200">
			<h1 className="text-3xl font-bold text-dusk-50">Impressum</h1>

			<p className="mt-4 rounded-lg border border-brand-500/40 bg-brand-500/10 px-4 py-3 text-xs text-brand-300">
				⚠️ Platzhalter-Angaben. Dies ist eine Dummy-Seite für ein fiktives Projekt –
				vor einer echten Veröffentlichung müssen hier die realen, vollständigen
				Angaben gemäß § 5 DDG ergänzt werden.
			</p>

			<div className="mt-8 space-y-6 text-sm leading-relaxed">
				<div>
					<h2 className="font-semibold text-dusk-50">Angaben gemäß § 5 DDG</h2>
					<p>
						Max Mustermann
						<br />
						₿rook6 (fiktiver Platzhalter-Verein)
						<br />
						Brook 6
						<br />
						20457 Hamburg
					</p>
					<p className="mt-4">E-Mail: info [at] brook6 [dot] de</p>
				</div>
			</div>
		</section>
	);
}
