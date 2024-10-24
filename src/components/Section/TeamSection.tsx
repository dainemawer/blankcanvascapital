"use client";

import Image from "next/image";

const TeamSection = ({ team }) => {
	return (
		<div className="grid grid-cols-3 gap-4 overflow-x-auto">
			{team?.map((member) => (
				<div className="flex-shrink-0" key={member.name}>
					<div className="flex flex-col items-center">
						<Image alt="" height={500} src={member.image} width={447} />
						<h3 className="text-lg font-bold uppercase mt-4">{member.name}</h3>
						<p className="text-gold text-base font-bold uppercase mt-2">
							{member.title}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default TeamSection;
