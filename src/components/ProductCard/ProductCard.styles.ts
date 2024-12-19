import styled from "styled-components";

export const Card = styled.div`
	border: 1px solid #ddd;
	border-radius: 8px;
	padding: 16px;
	text-align: center;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease;
	cursor: pointer;
	flex: 0 0 auto;
	background-color: #fff;
	color: #666;

	&:hover {
		background-color: #f9f9f9;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 150px;
	object-fit: cover;
	border-radius: 4px;
`;

export const Name = styled.h3`
	font-size: 1.2em;
	margin: 10px 0;
`;

export const Description = styled.p`
	font-size: 0.9em;
	color: #888;
`;
