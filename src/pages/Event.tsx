import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Lesson } from './components/Lesson';
import { Video } from './components/Video';


export function Event() {

	return (
		<div>
			<Header />
			<Sidebar />
			<Lesson />
			<Video />
		</div>
	);

}

