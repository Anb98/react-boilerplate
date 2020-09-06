import React from 'react';
import styled from 'styled-components';

const Ejemplo = () => (
	<Wrapper>
		<h1>
			App working!
			<span role='img' aria-label='tada'>🎉</span>
		</h1>
	</Wrapper>
);

const Wrapper = styled.main`
background: linear-gradient(to right, #007991, #78ffd6);
position:absolute;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height:100%;

color: white;
`;

export default Ejemplo;
