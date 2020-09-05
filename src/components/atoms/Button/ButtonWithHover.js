import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, Button } from "../../atoms";
import { Colors } from "@/theme";
import { useTheme } from "@/hooks";

export const ButtonWithHover = ({
	messageButton,
	onPress,
	hoverColor,
	...rest
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const { theme } = useTheme();

	const hoveredStyle = {
		bg: hoverColor,
		bc: hoverColor,
	};

	const defaultStyles = {
		bg: "transparent",
		bc: Colors.gray,
	};

	return (
		<Button
			onPress={onPress}
			onMouseEnter={() => setIsHovered(true)} // Or onMouseOver
			onMouseLeave={() => setIsHovered(false)}
			roundness={5}
			bw={1}
			{...defaultStyles}
			{...(isHovered && hoveredStyle)}
			{...rest}
		>
			<Text color={isHovered ? Colors.white : theme.colors.text}>
				{messageButton}
			</Text>
		</Button>
	);
};

ButtonWithHover.propTypes = {
	onPress: PropTypes.func.isRequired,
	messageButton: PropTypes.string.isRequired,
	hoverColor: PropTypes.string.isRequired,
};
