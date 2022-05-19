import React from "react";
import styledComponents from "styled-components";

const ListWrapper = styledComponents.ul`
	list-style: none;
	text_aling: left;
	padding: 0;
`;

const LisItem = styledComponents.li`
	display: flex;
	justify-content: space-between;
`;
const Label = styledComponents.span`
	font-weight: bold;

`;
const Title = styledComponents.h2`
padding: 10px 0;
border-bottom: 1px solid lightGrey;
`;
const List = ({ items, title }) => (
	<>
	<Title>{title}</Title>
	<ListWrapper>
		{items.map((item) => (
			<LisItem key={item.label}>
				<Label>{item.label}</Label>
				{item.value}
			</LisItem>
		))}
	</ListWrapper>
	</>
);
export default List;
