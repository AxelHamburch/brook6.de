import React from 'react';
import { Link } from 'react-router-dom';

export default function Datenschutz() {
	return (
		<section className="mx-auto max-w-3xl px-6 py-20 text-dusk-200">
			<h1 className="text-3xl font-bold text-dusk-50">Datenschutzerklärung</h1>

			<p className="mt-4 rounded-lg border border-brand-500/40 bg-brand-500/10 px-4 py-3 text-xs text-brand-300">
				⚠️ Platzhalter-Text. Dies ist eine Dummy-Seite für ein fiktives Projekt –
				vor einer echten Veröffentlichung muss diese Erklärung an die tatsächliche
				Datenverarbeitung angepasst werden.
			</p>

			<div className="mt-8 space-y-6 text-sm leading-relaxed">
				<div>
					<h2 className="font-semibold text-dusk-50">Verantwortlicher</h2>
					<p>
						Die Angaben zum Verantwortlichen im Sinne der DSGVO finden Sie im{' '}
						<Link to="/de/impressum" className="underline hover:text-brook-300">
							Impressum
						</Link>{' '}
						dieser Website.
					</p>
				</div>

				<div>
					<h2 className="font-semibold text-dusk-50">Datenverarbeitung</h2>
					<p>
						Diese Website erhebt darüber hinaus keine personenbezogenen Daten, setzt
						keine Cookies und verwendet kein Tracking. Der Webhoster speichert beim
						Aufruf technisch bedingt automatisch Server-Logfiles (z. B. IP-Adresse,
						Datum, Uhrzeit, aufgerufene URL, Browser), ausschließlich für den sicheren
						Betrieb des Servers, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
						(berechtigtes Interesse).
					</p>
				</div>

				<div>
					<h2 className="font-semibold text-dusk-50">Ihre Rechte</h2>
					<p>
						Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
						Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit und das Recht,
						sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Bei Fragen wenden Sie
						sich an die im Impressum angegebene Kontaktadresse.
					</p>
				</div>
			</div>
		</section>
	);
}
