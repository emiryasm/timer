import './App.css';

class Excercise {
	name: string
	descripcion?: string
	laps: number = 1
	time: number = 0
	reps_mode: boolean = false
	color: number = 0

	constructor(
		name: string
	) {
		this.name = name
	}
}

class Group {
	name: string
	groups?: Group
	exercises?: Excercise
	laps: number = 1

	constructor(
		name: string
	) {
		this.name = name
	}
}

class Workout extends Group {
}

function App() {
	return (
		<span></span>
	);
}

export default App;