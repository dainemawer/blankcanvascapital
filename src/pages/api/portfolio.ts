import type { NextApiRequest, NextApiResponse } from 'next'
import type { PortfolioProps } from '../../pages/portfolio'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<PortfolioProps[]>
) {
	res
		.status(200)
		.json([
			{
				logo: '/logos/advencap.png',
				hero: '/heros/advencap-new.jpg',
				region: 'UK',
				sector: 'Digital Infrastructure',
				date: 'December 2020',
				status: 'current',
				description: "Advencap Fibre Partnership invests in Fibre to the Premises (FTTP) infrastructure in the UK.",
				category: 'Private Equity',
				id: '2',
				url: 'http://www.advencap.com',
				title: 'Advencap Fibre Partnership',
				position: 'center',
			},
			{
				region: 'South Africa',
				logo: '/logos/aie.png',
				hero: '/heros/aie.jpg',
				sector: 'Education',
				date: 'July 2017',
				status: 'current',
				description: "Academic Institute of Excellence (AIE) is a tertiary institute offering higher certificates, advanced certificates and diplomas (NQF 5 & 6). AIE started as a draughting school but now offers courses in Architecture, Draughting, Engineering, Business, IT, and Visual Design & Arts, with campuses in Midrand (JHB), Greenside (JHB) and Cape Town, as well as online learning for distance students",
				category: 'Private Equity',
				id: '1',
				url: 'https://www.aie.ac/',
				title: 'Academic Institute of Excellence',
				position: 'top',
			},
			{
				logo: '/logos/aura.png',
				hero: '/heros/new-aura.jpg',
				region: 'Global',
				sector: 'Security / Securetech',
				date: 'December 2021',
				status: 'current',
				description: "AURA is a unique technology platform, democratising access to emergency response services across the globe.AURA’s smart emergency response device instantly connects those in need to top-tier, private armed and medical responders anytime, anywhere using a connected device. AURA has partnered with companies around the world to make effective security and medical response more accessible and affordable for all.",
				category: 'Private Equity',
				id: '3',
				url: 'http://aura.services',
				title: 'Aura',
				position: 'bottom',
			},
			{
				logo: '/logos/batl.png',
				hero: '/heros/batl.jpg',
				region: 'Canada & USA',
				sector: 'Sport & Recreation',
				date: 'October 2018',
				status: 'current',
				description: "BATL offers urban axe throwing venues, with locations across USA and Canada. It is a popular recreational activity where participants can safely and competitively throw axes at wooden targets, offering a unique and thrilling experience that combines skill, camaraderie, and a touch of adventure.",
				category: 'Private Equity',
				id: '4',
				url: 'https://batlgrounds.com',
				title: 'BATL',
				position: 'top',
			},
			{
				logo: '/logos/courier-guy.png',
				hero: '/heros/courier-guy.jpg',
				region: 'South Africa',
				sector: 'Courier',
				date: 'June 2020',
				status: 'current',
				description: "The Courier Guy is a dynamic last-mile e-commerce express parcel courier, which has become a trusted name in South Africa.It also provides a parcel locker service through its Pick- Up and Drop - Off (“PUDO”) branded lockers, as well as client facing kiosks in all major and regional towns across South Africa.With a strong focus on speed, security, and customer satisfaction, The Courier Guy provides comprehensive courier solutions for individuals and businesses alike.",
				category: 'Private Equity',
				id: '5',
				url: 'http://www.thecourierguy.co.za',
				title: 'The Courier Guy',
				position: 'top',
			},
			{
				logo: '/logos/digs.png',
				hero: '/heros/new-digsconnect.jpg',
				region: 'South Africa',
				sector: 'PropTech (Student Accommodation)',
				date: 'March 2019',
				status: 'current',
				description: "DigsConnect specializes in connecting students with suitable accommodation options. With a user- friendly online platform, Digs Connect simplifies the process of finding and securing student housing by providing a comprehensive database of available properties, along with relevant information and reviews. Their innovative approach and focus on student needs have made them a trusted resource for students seeking safe and affordable accommodation during their academic journey.",
				category: 'Private Equity',
				id: '6',
				url: 'http://www.digsconnect.com',
				title: 'DigsConnect',
				position: 'bottom',
			},
			{
				logo: '/logos/dynamic-brands.png',
				hero: '/heros/new-dynamic-brands.jpg',
				region: 'South Africa',
				sector: 'Manufacturing - Drinks',
				date: 'February 2019',
				status: 'current',
				description: "Dynamic Brands is a manufacturer and distributor of a range of beverage products. With a focus on quality and innovation, they have made huge strides in the beverage market from its initial strong presence in the dilutable dairy blend market to now producing a wide range of flavourful drinks across various beverage categories including carbonated soft drinks, dilutables, fruit juices and sport and hydration drinks, with locally well- known brands such as Fusion, Delicious, Slimsy, Mr Orange, Rascals and Yello lemon juice.",
				category: 'Private Equity',
				id: '7',
				url: 'http://www.dynamicbrands.co.za',
				title: 'Dynamic Brands',
				position: 'center',
			},
			{
				logo: '/logos/elvin.png',
				hero: '/heros/elvin.jpg',
				region: 'South Africa',
				sector: 'Manufacturing - Drinks',
				date: 'November 2019',
				status: 'current',
				description: "Elvin produced a wide range of fruit nectar concentrates, dairy fruit blends and lemon juice under their own and private label brand owners. This business was acquired and merged with Dynamic Brands.",
				category: 'Private Equity',
				id: '8',
				url: 'http://www.dynamicbrands.co.za',
				title: 'Elvin',
				position: 'top',
			},
			{
				logo: '/logos/greenside.png',
				hero: '/heros/greenside.jpg',
				region: 'South Africa',
				sector: 'Education',
				date: 'July 2019',
				status: 'current',
				description: "Greenside Design Centre (GDC) is an institution in South Africa, with a 40 year history, it offers various courses and degrees up to Honours level in Visual Design and Arts, and has campuses in Midrand (JHB), Greenside (JHB) and Cape Town, as well as online learning for distance students.",
				category: 'Private Equity',
				id: '9',
				url: 'http://designcenter.co.za',
				title: 'Greenside Design Center',
				position: 'top',
			},
			{
				logo: '/logos/the-invigilator.png',
				hero: '/heros/new-invigilator.jpg',
				region: 'South Africa',
				sector: 'Education',
				date: 'July 2019',
				status: 'current',
				description: "The Invigilator is a proctoring tool that uses technology to ensure assessments are written in a controlled and monitored environment, ensuring academic integrity. The Invigilator app, available on both mobile phone and desktop/ laptop, performs various checks during an assessment in order to simulate actions venue - based invigilators would perform during an assessment.The solution works without the need for a constant internet connection on entry level devices, making education more accessible globally.",
				category: 'Private Equity',
				id: '10',
				url: 'http://invigilator.app',
				title: 'The Invigilator',
				position: 'center',
			},
			{
				logo: '/logos/loomcraft.png',
				hero: '/heros/loomcraft.jpg',
				region: 'South Africa',
				sector: 'Textiles',
				date: 'April 2019',
				status: 'current',
				description: "Loomcraft is one of South Africa's leading textile distributors. While Loomcraft acts primarily as a wholesale and distribution business to the retail and clothing manufacturing industries, Loomcraft also functions as an importer, converter, and finisher of selected fabrics.The business continues to strive to add new product lines to its wide range of products.",
				category: 'Private Equity',
				id: '11',
				url: 'http://www.loomcraft.co.za',
				title: 'Loomcraft',
				position: 'center',
			},
			{
				logo: '/logos/mg-health.png',
				hero: '/heros/mg-health.jpg',
				region: 'Lesotho',
				sector: 'Medical Cannabis',
				date: 'December 2017',
				status: 'current',
				description: "MG Health is a world class medical cannabis producer located in the pristine mountains of Lesotho. It produces pharmaceutical grade product which it sells to various global clients, and a key component in the global supply chain.",
				category: 'Private Equity',
				id: '12',
				url: 'https://mghealth.com',
				title: 'MG Health',
				position: 'bottom',
			},
			{
				logo: '/logos/nova-messenger.png',
				hero: '/heros/nova.jpg',
				region: 'Global',
				sector: 'Tech',
				date: 'February 2023',
				status: 'current',
				description: "Nova Messenger is an exciting new messaging app with a focus on communication needs of education institutions. It may be used quite simply as a social messaging app (easily downloadable via an app store).It also has the premium feature of a dashboard that can be used by an institute / corporate to control communications to certain groups within the organisation.With the recent move to online learning, an effective, low data student communication platform is needed more than ever.",
				category: 'Private Equity',
				id: '13',
				url: 'http://www.novamessenger.com',
				title: 'Nova Messenger',
				position: 'top',
			},
			{
				logo: '/logos/reflective-learning.png',
				hero: '/heros/new-reflective-learning.jpg',
				region: 'South Africa',
				sector: 'Education / EdTech',
				date: 'March 2020',
				status: 'current',
				description: "Reflective Learning specializes in providing innovative educational solutions and training programs. Reflective Learning encourages independent learning through easy to use technology where it uses powerful diagnostics to identify conceptual gaps in learning, to then produce individualised catch up content for learners to rebuild foundational gaps and backlogs. With a focus on promoting critical thinking and self- reflection, Reflective Learning's offering is designed to enhance learning.",
				category: 'Private Equity',
				id: '14',
				url: 'http://reflectivelearning.co',
				title: 'Reflective Learning',
				position: 'top',
			},
			{
				logo: '/logos/skye-education.png',
				hero: '/heros/skye-schools.jpg',
				region: 'South Africa',
				sector: 'Education',
				date: 'February 2019',
				status: 'current',
				description: "Skye Education is on a mission to provide an education to thrive, for all. Skye invests in independent schools across South Africa.",
				category: 'Private Equity',
				id: '15',
				url: 'https://www.skyecollege.co.za',
				title: 'Skye Schools',
				position: 'top',
			},
			{
				logo: '/logos/sneakerlab.png',
				hero: '/heros/sneakerlab.jpg',
				region: 'Global',
				sector: 'Manufacturing - Shoe Care',
				date: 'August 2019',
				status: 'current',
				description: "Sneaker LAB is a brand dedicated to providing high-quality, environmentally friendly and innovative solutions for sneaker care with the mission to keep sneakers looking fresh and clean for longer. Sneaker LAB's products are made using biodegradable, eco-friendly ingredients that are safe for both sneakers and the planet. Trusted globally through a devoted community and strong international partnerships, Sneaker LAB is a proudly South African brand fully focused on the goal to be the number one sneaker care brand in the world,for the world.",
				category: 'Private Equity',
				id: '16',
				url: 'http://www.sneakerlab.com',
				title: 'Sneaker LAB',
				position: 'center',
			},
			{
				logo: '/logos/teneo.png',
				hero: '/heros/teneo.jpg',
				region: 'Africa',
				sector: 'Education',
				date: 'July 2021',
				status: 'current',
				description: "Teneo Online School, founded in 2018, is an innovative educational platform that provides a comprehensive and flexible learning experience for students from Grade R through to Grade 12. Built on best in class technology, Teneo currently offers the South African IEB and SACAI curriculums as well as the Pearson EdExcel British Curriculum. Students have the flexibility to learn at their own pace, accessing the coursework from anywhere at any time, and also having the option for full time live classes. Teneo Online School fosters interactive and engaging learning through multimedia resources, virtual live classrooms, and personalized feedback from teachers.",
				category: 'Private Equity',
				id: '17',
				url: 'http://www.teneoschool.co.za',
				title: 'Teneo',
				position: 'top',
			},
			{
				logo: '/logos/vantage-data-centers.png',
				hero: '/heros/vantage.jpg',
				region: 'South Africa',
				sector: 'Data Centres',
				date: 'April 2022',
				status: 'current',
				description: "Teneo Online School, founded in 2018, is an innovative educational platform that provides a comprehensive and flexible learning experience for students from Grade R through to Grade 12. Built on best in class technology, Teneo currently offers the South African IEB and SACAI curriculums as well as the Pearson EdExcel British Curriculum. Students have the flexibility to learn at their own pace, accessing the coursework from anywhere at any time, and also having the option for full time live classes. Teneo Online School fosters interactive and engaging learning through multimedia resources, virtual live classrooms, and personalized feedback from teachers.",
				category: 'Private Equity',
				id: '18',
				url: 'http://vantage-dc.com',
				title: 'Vantage Data Centers',
				position: 'bottom',
			},
			{
				logo: '/logos/vortex.png',
				hero: '/heros/vortex.jpg',
				region: 'South Africa',
				sector: 'Sanitaryware',
				date: 'September 2017',
				status: 'current',
				description: "Vortex manufactures and distributes taps, mixers, bath and shower products under their own brand to the market",
				category: 'Private Equity',
				id: '19',
				url: 'https://vortex-za.com/',
				title: 'Vortex Sanitaryware',
				position: 'top',
			},
			{
				logo: '/logos/vuma-cam.png',
				hero: '/heros/vuma.jpg',
				region: 'South Africa',
				sector: 'Security / Digital Infrastructure',
				date: 'February 2019',
				status: 'current',
				description: "Vumacam is a pioneering security technology company in South Africa, leveraging advanced AI and a vast network of CCTV cameras to provide enhanced public safety solutions. The company is both an infrastructure provider and a platform-as-a-service business, delivering innovative cloud-based solutions to combat crime and augment the public and private security industry.",
				category: 'Private Equity',
				id: '20',
				url: 'http://www.vumacam.co.za',
				title: 'Vumacam',
				position: 'center',
			},
			{
				logo: '/logos/wcg.png',
				hero: '/heros/wcg.jpg',
				region: 'South Africa',
				sector: 'Mining',
				date: 'November 2022',
				status: 'current',
				description: "Identified by a team of geologists in 2016, Wild Coast Granite was formed to explore and develop the Wild Coast granite deposits.Since 2022, mining has been ramping up, with production progressing through boulders into solid platforms of granite.The product is a Gabbro / Dolerite, formed in similar time frames to the well - known Zimbabwe deposits. The material is fine to medium grained and dark in colour.This is one of the rare dark granites in South Africa and globally. As a result of the production and quality of the product, WCG has formed the brand of NeroNite as the product name for the black granite it mines.",
				category: 'Private Equity',
				id: '21',
				title: 'Wild Coast Granite',
				position: 'top',
			},
			{
				logo: '/real-estate/ngoya.png',
				region: 'Ghana',
				sector: 'Data Centers',
				date: 'April 2018',
				status: 'realised',
				description: "BCC partnered with a major European tier 4 data center to develop and operate a data center in Ghana.",
				category: 'Private Equity',
				id: '22',
				title: 'Ngoya Data Centers',
				position: 'bottom',
			},
			{
				hero: '/heros/aie-ct.jpg',
				logo: '/logos/real-estate/aie-ct-new.jpg',
				region: 'Cape Town, Western Cape',
				sector: 'Specialised (Education)',
				status: 'current',
				description: "This property is home to the Cape Town campus of Academic Institute of Excellence (AIE) and also offers courses through Greenside Design Centre (GDC).",
				category: 'Real Estate',
				id: '23',
				title: 'AIE Cape Town',
				position: 'bottom',
			},
			{
				hero: '/heros/aie-greenside.jpg',
				logo: '/logos/real-estate/aie-greenside-new.jpg',
				region: 'Greenside, Gauteng',
				sector: 'Specialised (Education)',
				status: 'current',
				description: "This property is home to the Greenside (Gauteng) campus of the Greenside Design Centre (GDC) and also offers courses through Academic Institute of Excellence (AIE).",
				category: 'Real Estate',
				id: '24',
				title: 'AIE Greenside',
				position: 'bottom',
			},
			{
				hero: '/heros/aie-midrand.jpg',
				logo: '/logos/real-estate/aie-midrand-new.jpg',
				region: 'Midrand, Gauteng',
				sector: 'Specialised (Education)',
				status: 'current',
				description: "This property is home to the Midrand (Gauteng) campus of Academic Institute of Excellence (AIE) as well as its Head Office.It also offers courses through Greenside Design Centre (GDC).",
				category: 'Real Estate',
				id: '25',
				title: 'AIE Midrand',
				position: 'bottom',
			},
			{
				hero: '/heros/foundry-hero.jpg',
				logo: '/logos/real-estate/oldfoundry-new.jpg',
				region: 'Cape Town, Western Cape',
				sector: 'Mixed Use (Hotel/Office/Restaurant)',
				status: 'current',
				description: "The Old Foundry building is a historic building on the cusp of Cape Town's inner city and waterfront districts.It is a mixed use building, comprised of office spaces, co-working space (Ideas Cartel), restaurants, The Old Foundry Hotel, the Academic Institute of Excellence campus, and shops.",
				category: 'Real Estate',
				id: '26',
				title: 'Old Foundry',
			},
			{
				hero: '/heros/salga-hero.jpg',
				logo: '/logos/real-estate/salga-new.jpg',
				region: 'Cape Town, Western Cape',
				sector: 'Offices / Parking',
				status: 'current',
				description: "Salga House, known as Rosebank College, is situated in the heart of Cape Town CBD. Salga House is an A grade building, and has parking, commercial office and retail shop space to let. This building has all forms of public transport near with easy access to all main highways in and out of the CBD.",
				category: 'Real Estate',
				id: '27',
				title: 'Salga House',
			},
			{
				hero: '/heros/george.jpg',
				logo: '/logos/real-estate/george-new.jpg',
				region: 'Cape Town, Western Cape',
				sector: 'Industrial',
				status: 'current',
				description: "This 15 hectare industrial park is situated on Nelson Mandela Boulevard, in the heart of George Industria and is home to various tenants including Lancewood and We Buy Cars.",
				category: 'Real Estate',
				id: '28',
				title: 'George Industrial Park',
			},
			{
				hero: '/heros/loomcraft-hero.jpg',
				logo: '/logos/real-estate/loom-new.jpg',
				region: 'Roodepoort, Gauteng',
				sector: 'Warehouse',
				status: 'current',
				description: "This property is home to the Head Office and one of many warehouses of Loomcraft, a fabrics business in the BCC Private Equity portfolio.",
				category: 'Real Estate',
				id: '29',
				title: 'Loomcraft DC',
			},
			{
				hero: '/heros/moove.jpg',
				logo: '/logos/real-estate/moove-new.jpg',
				region: 'Sunninghill, Gauteng',
				sector: 'Gym',
				status: 'current',
				description: "The property is situated in Sunninghill and is home to the Moove Gym Sunninghill branch - a fully kitted gym with various studios and classes, and outdoor recreational and fitness area, Padel court, outdoor mini golf, boardrooms and restaurant.",
				category: 'Real Estate',
				id: '30',
				title: 'Moove Gym',
			},
			{
				hero: '/heros/mweb-hero.jpg',
				logo: '/logos/real-estate/mweb-new.jpg',
				region: 'Cape Town, Western Cape',
				sector: 'Offices',
				status: 'realised',
				description: "This building, based in Goodwood, Cape Town, was home to MWEB's head office.",
				category: 'Real Estate',
				id: '31',
				title: 'MWEB Head Office',
			},
		])
}
