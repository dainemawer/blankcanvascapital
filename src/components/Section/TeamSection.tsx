import Image from 'next/image';
import {
	StyledTeamGrid,
	StyledTeamMember,
	StyledTeamMemberImage,
	StyledTeamMemberName,
	StyledTeamMemberTitle,
	StyledTeamMemberContent,
} from './Section.styled';

const TeamSection = ({ team }) => {
	return (
		<StyledTeamGrid>
			{team?.map((member) => (
				<StyledTeamMember key={member.name}>
					<StyledTeamMemberImage>
						<Image alt="" height={500} src={member.image} width={447} />
					</StyledTeamMemberImage>
					<StyledTeamMemberContent>
						<StyledTeamMemberName>{member.name}</StyledTeamMemberName>
						<StyledTeamMemberTitle>{member.title}</StyledTeamMemberTitle>
					</StyledTeamMemberContent>
				</StyledTeamMember>
			))}
		</StyledTeamGrid>
	);
}

export default TeamSection;
