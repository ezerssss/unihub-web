import Features from './Features';
import Hero from './Hero';
import Navbar from './Navbar';

export default function Home() {
	return (
		<main className="h-full bg-white">
			<Navbar />
			<Hero />
			<Features />
		</main>
	);
}
