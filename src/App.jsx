import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Facts from '@/components/Facts';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Impressum from '@/components/Impressum';
import Datenschutz from '@/components/Datenschutz';
import { useStaleBuildReload } from '@/hooks/useStaleBuildReload';

// Beim Seitenwechsel nach oben scrollen – außer bei Anker-Links (#...)
function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) window.scrollTo(0, 0);
	}, [pathname, hash]);

	return null;
}

function HomePage() {
	return (
		<>
			<Hero />
			<Facts />
			<About />
		</>
	);
}

function App() {
	useStaleBuildReload();

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Helmet>
				<title>₿rook6 – Bitcoin-Stammtisch in der Speicherstadt</title>
			</Helmet>
			<Navigation />
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/de/impressum" element={<Impressum />} />
					<Route path="/de/datenschutz" element={<Datenschutz />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
