export {}

// import './App.css';
//
// import React, {useState} from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
// import {Exercise, Group, Item, Workout} from "./Clases"
//
// interface ExcerciseViewProps {
// 	group: Group
// 	exercise: Exercise
// }
//
// function ExerciseView(props: ExcerciseViewProps) {
// 	return (
// 		<Draggable key={props.exercise.name} draggableId={props.group.name + props.exercise.name} index={props.exercise.order}>
// 			{(provided) => (
// 				<li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
// 					<p>
// 						{props.exercise.name}
// 					</p>
// 				</li>
// 			)}
// 		</Draggable>
// 	)
// }
//
// interface GroupViewProps {
// 	group: Group
// }
//
// function GroupView(props: GroupViewProps) {
// 	return (
// 		// <Draggable key={props.group.name} draggableId={props.group.name} index={props.index}>
// 		// 	{(provided) => (
// 				<Droppable droppableId={props.group.name} >
// 					{(provided) => (
// 						<div className="group">
// 							<p className="groupName">{props.group.name}</p>
// 							<ul className="items" {...provided.droppableProps} ref={provided.innerRef}>
// 								{
// 									props.group.orderedItems().map((item: Item) => {
// 										if (item instanceof Exercise) {
// 											return (
// 												<ExerciseView group={props.group} exercise={item} />
// 											);
// 										} else if (item instanceof Group) {
// 											return (
// 												<GroupView group={item} />
// 											);
// 										}
// 									})
// 								}
// 							</ul>
// 						</div>
// 					)}
// 				</Droppable>
// 		// 	)}
// 		// </Draggable>
// 	)
// }
//
// function App() {
// 	const workout = new Workout("workout")
// 	const group1 = new Group("grupo 1")
// 	const group2 = new Group("grupo 2")
// 	workout.items.push(group1)
// 	workout.items.push(group2)
// 	group1.items.push(new Exercise("ejercicio 1"))
// 	group1.items.push(new Exercise("ejercicio 2"))
// 	group1.items.push(new Exercise("ejercicio 3"))
// 	group2.items.push(new Exercise("ejercicio 1"))
// 	group2.items.push(new Exercise("ejercicio 2"))
//
// 	const reorder = (list: Array<Item>, startIndex: number, endIndex: number) => {
// 		const result = Array.from(list);
// 		const [removed] = result.splice(startIndex, 1);
// 		result.splice(endIndex, 0, removed);
//
// 		return result;
// 	};
//
// 	function onDragEnd(result: any) {
// 		// dropped outside the list
// 		if (!result.destination) {
// 			//console.log("no-change");
// 			return;
// 		}
//
// 		if (result.type === "QUESTIONS") {
// 			console.log(result);
// 			const questions = reorder(
// 				this.state.questions,
// 				result.source.index,
// 				result.destination.index
// 			);
//
// 			this.setState({
// 				questions
// 			});
// 		} else {
// 			const answers = reorder(
// 				this.state.questions[parseInt(result.type, 10)].answers,
// 				result.source.index,
// 				result.destination.index
// 			);
//
// 			const questions = JSON.parse(JSON.stringify(this.state.questions));
//
// 			questions[result.type].answers = answers;
//
// 			this.setState({
// 				questions
// 			});
// 		}
// 	}
//
// 	return (
// 		<DragDropContext onDragEnd={onDragEnd}>
// 			{
// 				workout.orderedItems().map((item: Item) => {
// 					if (item instanceof Exercise) {
// 						return (
// 							<ExerciseView group={workout} exercise={item} />
// 						);
// 					} else if (item instanceof Group) {
// 						return (
// 							<GroupView group={item} />
// 						);
// 					}
// 				})
// 			}
// 		</DragDropContext>
// 	)
// }
//
// export default App;