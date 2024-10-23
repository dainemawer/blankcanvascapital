"use client";

import Image from "next/image";
import {
	StyledTeamGrid,
	StyledTeamMember,
	StyledTeamMemberImage,
	StyledTeamMemberName,
	StyledTeamMemberTitle,
} from "./Section.styled";

const TeamSection = ({ team }) => {
	return (
		<StyledTeamGrid>
			{team?.map((member) => (
				<StyledTeamMember key={member.name}>
					<StyledTeamMemberImage>
						<Image alt="" height={500} src={member.image} width={447} />
					</StyledTeamMemberImage>
					<StyledTeamMemberName>{member.name}</StyledTeamMemberName>
					<StyledTeamMemberTitle>{member.title}</StyledTeamMemberTitle>
				</StyledTeamMember>
			))}
		</StyledTeamGrid>
	);
};

export default TeamSection;
