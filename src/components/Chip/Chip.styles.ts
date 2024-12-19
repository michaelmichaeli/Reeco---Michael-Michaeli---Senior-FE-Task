import styled from "styled-components";

export const ChipContainer = styled.div`
	padding: 10px 20px;
	border-radius: 20px;
	background-color: #007bff;
	color: #fff;
	font-size: 1em;
	text-align: center;
	display: inline-block;
	transition: transform 0.3s ease;
	cursor: pointer;
	flex: 0 0 auto;

	&:hover {
		background-color: #0056b3;
	}
`;
