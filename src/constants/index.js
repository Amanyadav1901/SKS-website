import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  person,
  carrent,
  jobit,
  tripguide,
  threejs,
  bg1,
  bg2,
  bg3,
  bg4,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Electrical (External / Internal)",
    icon: web,
  },
  {
    title: "Sub Station up to 33 KV  Switch yard",
    icon: mobile,
  },
  {
    title: "Fire Alarming",
    icon: mobile,
  },
  {
    title: "HVAC",
    icon: mobile,
  },
];

const experiences = [
  {
    title: "Hedgewar Institutional complex",
    icon: starbucks,
    iconBg: "#383E56",
    date: "9 Months",
    points: [
      "Location: Jassola, New Delhi",
      "Client: Dr. Hedgewar Smark",
      "Client Project Head : Mr. Aruan Panthari  Mob : 9871404000",
      "Project Work : SITC of Electrical , LV & Fire Alarming system",
      "Project Worth : 52 lacs",
      "Project Duration : 9 Months",
      "Architect : TRIVIM ARCHITECTS",
    ],
  },
  {
    title: "Kay Pride Mall",
    icon: meta,
    iconBg: "#383E56",
    date: "18 Months",
    points: [
      "Location: Tadiyla Chowk , Kotdwar , UK",
      "Client: Mr. Chander Prakash Sharma",
      "Client Project Head : Mr. Chander Prakash Sharma  Mob : 9810282724",
      "Project Work : SITC of Electrical , LV & Fire Alarming system",
      "Project Worth : 1.8 Cr",
      "Project Duration : 18 Months",
      "Architect : G-Studio Grish Badola",
    ],
  },
  {
    title: "Hotel Radisson",
    icon: shopify,
    iconBg: "#383E56",
    date: "18 Months",
    points: [
      "Location: Vrindavan, Uttar Pradesh",
      "Client: Ananda Heritage Vrindavan",
      "Client Project Head : Mr. Digvijay singh  Mob : 9823337376",
      "Project Work : SITC of Electrical , LV & Fire Alarming system",
      "Project Worth : 1.6 Cr",
      "Project Duration : Work in Progress",
      "Architect : Studio Line craft, New Delhi",
      "MEP consultant : TSH consulting pvt. ltd. New Delhi",
    ],
  },
  {
    title: "Modi Farm House",
    icon: tesla,
    iconBg: "#383E56",
    date: "18 Months",
    points: [
      "Location: D-5 Ansal Villa, New Delhi",
      "Client: Mr. Manish Modi",
      "Client Project Head : Mr. Chander Prakash Sharma  Mob : 9810282724",
      "Project Work : SITC of Electrical , LV & Fire Alarming system",
      "Project Worth : 1.23 Cr",
      "Project Duration : 18 Months",
      "Architect : BEDMAR & SHI PVT LTD, Singapore MEP consultant, Shishir Sharma, Chattarpur",
    ],
  },
  {
    title: "Goenka Farm House",
    icon: meta,
    iconBg: "#383E56",
    date: "24 Months",
    points: [
      "Location: Kartik Farmhouse Plot no. 4",
      "Client: Mr. Tapeesh Goenka",
      "Client Project Head : Mr. Armaan Hussain  Mob : 9674967358",
      "Project Work : SITC of Electrical , LV & Fire Alarming system",
      "Project Worth : 1.62 Cr",
      "Project Duration : 24 Months",
      "Architect : Stephan Antoni Olmesdahn Truen (SAOTA), 109 Hatfield Street gardens Cape town , 8001 SOUTH AFRICA",
    ],
  },
  {
    title: "Pasricha Banquet & Restaurants",
    icon: starbucks,
    iconBg: "#383E56",
    date: "14 Months",
    points: [
      "Location: Jabalpur, Madhya Pradesh",
      "Client: Mr. Manjeet Pasricha",
      "Client Project Head : Mr. Akhil Pathak  Mob : 8299011280",
      "Project Work : SITC of Electrical , LV & Fire Alarming system",
      "Project Worth : 1.5 Cr",
      "Project Duration : 14 Months",
      "Architect : QUINTESSENCE & STUDIO LINE CRAFT, DELHI",
      "MEP Consultant : M.J Consultants, Nehru place, New Delhi",
    ],
  },
  {
    title: "Rukmini Birla Hospital",
    icon: shopify,
    iconBg: "#383E56",
    date: "24 Months",
    points: [
      "Location: Jaipur , Rajasthan",
      "Client: Mr. CK Birla",
      "Client Project Head : PMC L&T  Mob : 8130446117",
      "Project Work : SITC of Internal Electrical",
      "Project Worth : 8.5 Cr",
      "Project Duration : 24 Months",
      "Architect : TEAM3, SAKET, DELHI",
      "MEP Consultant : M.J Consultants, Nehru place, New Delhi",
      "Project Management Consultant: L&T Construction",
    ],
  },
  {
    title: "Sai Hermitage Resorts",
    icon: meta,
    iconBg: "#383E56",
    date: "24 Months",
    points: [
      "Location: Shirdi",
      "Client: Sai Yash Associates",
      "Client Project Head : Harihar Infraventure",
      "Project Work : SITC of External & Internal Electrical, LV and Fire Alarming System",
      "Project Worth : 6.0 Cr",
      "Project Duration : Work in Progress",
      "Architect : QUINTESSENCE & STUDIO LINE CRAFT, DELHI",
      "MEP Consultant : Milind Services, Nashik",
    ],
  },
  {
    title: "Cygnett Hotels",
    icon: shopify,
    iconBg: "#383E56",
    date: "24 Months",
    points: [
      "Location: Murthal, NH-1 Haryana",
      "Client: Mr. Rajiv Bhatia",
      "Project Work : SITC of Electrical, LV and Fire Alarming System",
      "Project Duration : Work in Progress",
      "Architect : Genesis Architect Pvt. Ltd., Delhi",
      "MEP Consultant : TSH Consulting Pvt. Ltd. Delhi",
    ],
  },
  {
    title: "ITC Green Berry Hotels",
    icon: tesla,
    iconBg: "#383E56",
    date: "24 Months",
    points: [
      "Location: Narkanda, Himachal Pradesh",
      "Client: Green Berry Hotel",
      "Project Work : SITC of Electrical, LV and Fire Alarming System",
      "Project Duration : Work in Progress",
      "Architect : ABITARE CONSULTANTS, DELHI",
      "MEP Consultant : MJ Engineering Consultants Pvt. Ltd., Nehru Place, Delhi",
      "Facility Consultant : TSH Consulting Pvt. Ltd., Delhi",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make our Hotel as beautiful as our this, but SKS Engineers proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mr. Lalit",
    title: "C.M.O",
    Exp: "Experience : 15 years",
    description: `Email : LALITKUMAR49@GMAIL.COM `,
    image: person,
  },
  {
    name: "Mr. MD Sayeed",
    title: "Project Manager",
    Exp: "Experience : 15 years",
    description: "Email : ANSARIMDSAYEED@GMAIL.COM",
    image: person,
  },
  {
    name: "Mr. Mustafa",
    title: "Project Manager",
    Exp: "Experience : 15 years",
    description: "Email : MDMUSTAFA715@GMAIL.COM ",
    image: person,
  },
  {
    name: "Mr. Ajay",
    title: "Site Incharge",
    Exp: "Experience : 15 years",
    description: "Email : THAKURAJAY1989@GMAIL.COM",
    image: person,
  },
  {
    name: "Mr. Mohan",
    title: "Site Incharge",
    Exp: "Experience : 17 years",
    description: "Email : MOHANDA8294@GMAIL.COM",
    image: person,
  },
  {
    name: "Mr. Manoj",
    title: "Chief Accounts",
    Exp: "Experience : 15 years",
    description: "Email : MANOJSHARMA7@GMAIL.COM",
    image: person,
  },
];

const backgrounds = [
  {
    image: bg1,
    caption: "San Francisco",
  },
  {
    image: bg2,
    caption: "Scotland",
  },
  {
    image: bg3,
    caption: "Scotland",
  },
  {
    image: bg4,
    caption: "Scotland",
  },
];

export { services, experiences, testimonials, projects, backgrounds };
