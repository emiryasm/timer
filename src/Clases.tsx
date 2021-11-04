export class Item {
	name: string
	descripcion?: string
	laps: number = 1
	time: number = 0
	reps_mode: boolean = false
	color: number = 0
	items: Array<Item> = []

	constructor(
		name: string,
	) {
		this.name = name
	}
}