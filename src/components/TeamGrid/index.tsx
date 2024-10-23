"use client";

import { FC } from "react";
import Image from "next/image";
import { TeamProps } from "./TeamGrid.types";
import {
	StyledArticle,
	StyledFigure,
	StyledTeamMember,
	StyledTitle,
	StyledHeader,
	StyledSection,
} from "./TeamGrid.styled";

const TeamGrid: FC<TeamProps> = ({ team }): JSX.Element => (
	<StyledSection>
		{team.map((member) => (
			<StyledArticle
				aria-label={`${member.name} | ${member.title}`}
				key={member.id}
			>
				<StyledFigure>
					<Image
						alt={member.name}
						height={300}
						loading="lazy"
						src={member.image}
						width={300}
					/>
				</StyledFigure>
				<StyledHeader>
					<div>
						{member.name && <StyledTeamMember>{member.name}</StyledTeamMember>}
						{member.title && <StyledTitle>{member.title}</StyledTitle>}
					</div>
					{member.linkedin && (
						<a
							aria-label={`Follow ${member.name} on Linked In (opens in a new tab)`}
							href={member.linkedin}
							rel="noopenner noreferrer"
							target="_blank"
						>
							<svg
								fill="none"
								height="35"
								viewBox="0 0 35 35"
								width="35"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.4999 0C27.1655 0 35 7.83562 35 17.5001C35 27.1645
									27.1655 35 17.4999 35C7.83442 35 0 27.1644 0 17.5001C0
									7.83574 7.83454 0 17.4999 0Z"
									fill="#0E76A8"
								/>
								<path
									d="M9.86123 24.045H13.1381V13.1228H9.86123V24.045ZM22.6275
									12.7444C21.0372 12.7444 19.6142 13.3252 18.6048
									14.6071V13.0868H15.3159V24.0451H18.6048V18.1192C18.6048 16.8668
									19.7521 15.645 21.1893 15.645C22.6264 15.645 22.9809 16.8668
									22.9809 18.0885V24.044H26.2578V17.8446C26.2577 13.5385 24.2189
									12.7444 22.6275 12.7444ZM11.4844 12.0313C12.39 12.0313 13.125
									11.2962 13.125 10.3906C13.125 9.48495 12.39 8.75003 11.4844
									8.75003C10.5787 8.75003 9.84369 9.48507 9.84369
									10.3907C9.84369 11.2963 10.5787 12.0313 11.4844 12.0313Z"
									fill="white"
								/>
							</svg>
						</a>
					)}
				</StyledHeader>
			</StyledArticle>
		))}
	</StyledSection>
);

export default TeamGrid;
