const Section = ({ bgColor, children }) => (
	<section
		className={`relative ${bgColor === "#292929" ? "text-white" : ""} bg-${
			bgColor || "white"
		} py-8 md:py-16`}
	>
		{children}
	</section>
);

export default Section;
