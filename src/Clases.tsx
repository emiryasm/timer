export class Item {
	name: string

	constructor(
		name: string,
	) {
		this.name = name
	}
}

export class Exercise extends Item {
	descripcion?: string
	laps: number = 1
	time: number = 0
	reps_mode: boolean = false
	color: number = 0
}

export class Group extends Item {
	items: Array<Item> = []
	laps: number = 1
}

export class Workout extends Group {
}