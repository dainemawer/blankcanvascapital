import { FC } from "react";
import { SimpleSectionProps } from "./Investments.types";
import { Container, Section } from "./Investments.styled";

const SimpleSection: FC<SimpleSectionProps> = ({ align, children, name }) => {
	return (
		<Section id={name}>
			<Container align={align}>{children}</Container>
		</Section>
	);
};

export default SimpleSection;
