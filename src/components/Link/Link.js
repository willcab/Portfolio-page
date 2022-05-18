import React from 'react';

import styledComponents from "styled-components";

const InnerLink = styledComponents.a`
color: #61dafb;
`;
const Link = ({ url, title }) => (
	<InnerLink 
        className="App-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >
		{title}
	</InnerLink>
);
export default Link;