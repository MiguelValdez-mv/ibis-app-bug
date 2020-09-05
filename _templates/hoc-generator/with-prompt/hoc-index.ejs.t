---
to: src/hocs/<%= h.changeCase.camel(name) %>/index.js
---
import React from "react";

export const <%= h.changeCase.camel(name) %> = Component => props => {
	return (
		<Component {...props}>
			{props.children}
		</Component>
	)
}
