import React, {useEffect, useState} from "react"
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import _ from 'underscore';
import "./index.css";

const StyledBlockWrapper = styled.div`
	position: relative;
	background: white;
	padding: 20px;
	margin-bottom: 10px;
	border: 1px solid lightgray;
	border-radius: 4px;
	cursor: move;
	&:hover {
	//background: #eeeeee;
	}
`;

const sortableOptions = {
	animation: 150,
	fallbackOnBody: true,
	swapThreshold: 0.65,
	ghostClass: "ghost",
	group: "shared"
};

export default function App() {
	const [rutina, setRutina] = useState("")
	const [blocks, setBlocks] = useState([{
		id: 0,
		name: "initialBlock",
		children: new Array()
	}]);

	useEffect(() => {
		console.log(blocks)
	}, [ blocks ])

	const cargar = () => {
		const lines = (rutina.match(/.*\n/g)||[]);
		_.each(lines, (line) => {
			blocks[0].children.push({
				id: blocks[0].children.length + 1,
				name: line
			});
		})
		setBlocks(blocks);
		setRutina("");
	}

	const handleChange = (event: any) => {
        setRutina(event.target.value);
    };

	return (
		<div>
			<ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
				{blocks.map((block, blockIndex) => (
					<BlockWrapper
						key={block.id}
						block={block}
						blockIndex={[blockIndex]}
						setBlocks={setBlocks}
					/>
				))}
			</ReactSortable>
			<textarea id="data" rows={30} cols={60} value={rutina} onChange={handleChange}></textarea><br/>
			<button onClick={cargar}>Cargar</button>
		</div>
	);
}
function Container(props: any) {
	const { block, blockIndex, setBlocks } = props
	return (
		<>
			<ReactSortable
				key={block.id}
				list={block.children ? block.children : []}
				setList={(currentList) => {
					setBlocks((sourceList: any) => {
						const tempList = [...sourceList];
						const _blockIndex = [...blockIndex];
						const lastIndex = _blockIndex.pop();
						const lastArr = _blockIndex.reduce(
							(arr, i) => arr[i]["children"],
							tempList
						);
						console.log(lastIndex);
						lastArr[lastIndex]["children"] = currentList;
						return tempList;
					});
				}}
				{...sortableOptions}
			>
				{block.children &&
				block.children.map((childBlock: any, index: any) => {
					return (
						<BlockWrapper
							key={childBlock.id}
							block={childBlock}
							blockIndex={[...blockIndex, index]}
							setBlocks={setBlocks}
						/>
					);
				})}
			</ReactSortable>
		</>
	);
}
function BlockWrapper(props: any) {
	const { block, blockIndex, setBlocks } = props

	if (!block) return null;
	return (
		<StyledBlockWrapper className="block">
			{block.name}
			<Container
				block={block}
				setBlocks={setBlocks}
				blockIndex={blockIndex}
			/>
			<a href="#" onClick={() => { }}>(remover)</a>
		</StyledBlockWrapper>
	);
}