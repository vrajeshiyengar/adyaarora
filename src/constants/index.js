import {
  analytics,
  dashboarding,
  strategy,
  stakeholders,
  excel,
  ppt,
  powerbi,
  python,
  sql,
  hadoop,
  swiggy,
  lowes,
  covid,
  tnm,
  diabetic,
  genie,
  phone,
  email,
  linkedin_,
  instagram,
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
    title: "Strategy & Growth",
    icon: strategy,
  },
  {
    title: "Stakeholder Management",
    icon: stakeholders,
  },
  {
    title: "Data Science & Analytics",
    icon: analytics,
  },
  {
    title: "Dashboarding & Reporting",
    icon: dashboarding,
  },
];

const technologies = [
  {
    name: "MS Excel",
    icon: excel,
  },
  {
    name: "MS Powerpoint",
    icon: ppt,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Hadoop",
    icon: hadoop,
  },
  // {
  //   name: "Teradata",
  //   icon: teradata,
  // },
  // {
  //   name: "SAS",
  //   icon: sas,
  // },
];

const experiences = [
  {
    title: "Strategy Manager - Planning & Performance",
    company_name: "Swiggy",
    icon: swiggy,
    iconBg: "#FFFFFF",
    date: "June 2022 - Present",
    points: [
      "Driving revenue and growth strategy for Swiggy Genie – an intra-city pick up & drop off service",
      "Responsible for identifying new actionable opportunities for growth while spearheading the execution of GTM strategies to efficiently achieve business goals",
      "Spearheaded launch of Genie 2.0 – an improved pre-order journey; Achieved  2pp increase  in  conversion",
      "Owner of business performance reviews with leadership and AOP, QOP, MOP processes for Genie",
      "Defined planning and performance charter for Genie and built forecasting models for business planning",
    ],
  },
  {
    title: "Senior Data Analyst - Pricing & Promotions",
    company_name: "Lowe's Companies Inc.",
    icon: lowes,
    iconBg: "#01226a",
    date: "Jan 2021 - June 2022",
    points: [
      "Responsible for pricing products, and strategies across 1700+ stores in the USA",
      "Developed Test and Measure, a product tracking key metrics & the impact of price changes across 3000+ SKUs that generate annual revenues of around $100M annually",
      "Achieved 1.5x growth in revenue (FY 2021) by launching an A/B price testing model across item categories",
      "Implemented aggressive discount strategies for professional customers, increasing private label revenue by 10%",
      "Saved $20,000 in losses by initiating a tiered discounting strategy to sell dead and unsold inventory",
    ],
  },
  {
    title: "Data Analyst - DACI",
    company_name: "Lowe's Companies Inc.",
    icon: lowes,
    iconBg: "#01226a",
    date: "June 2019 - Dec 2020",
    points: [
      "Standardized 5+ measurement algorithms for Pricing & Promo platforms, increasing  adoption  by  120%",
      "Achieved 25% growth in conversion rate by eliminating 10+ user pain-points after analyzing user journeys",
      "Improved margin rate by 5% across vinyl flooring categories by identifying price leadership opportunities",
      "Saved 15+ man-hours weekly by automating weekly reporting processes across P&P and CI dashboards",
      "Winner of Employee of the month award for developing a clustering algorithm based on store profiles",
      "1/12 analysts to receive fast-track promotion to Senior Data Analyst in under 18 months",
      "Among 4/9 interns to receive a Pre-Placement Offer (PPO) after a 6 month internship",
    ],
  },
  // {
  //   title: "Data Science Intern",
  //   company_name: "Tata Elxsi",
  //   icon: elxsi,
  //   iconBg: "#FFFFFF",
  //   date: "May 2018 - July 2018",
  //   points: [
  //     "Developed a robust and scalable AI-based model that analyzes retinal scans and identifies patterns indicative of diabetic retinopathy. The solution has the potential to transform the way diabetic retinopathy is diagnosed and managed, improving patient outcomes and reducing healthcare costs",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Adya proactively seeks process improvements and simplifies problem-solving with intricate thinking. She's a reliable problem-solver and a go-to person for her colleagues and friends. Keep smiling and making the world a better place!",
    name: "Vrajesh Iyengar",
    designation: "PM",
    company: "Amazon",
    image:
      "https://media.licdn.com/dms/image/C5603AQHWpRZ3zg_5BQ/profile-displayphoto-shrink_400_400/0/1609849533667?e=1686787200&v=beta&t=_erLc2F5tiWKrLZJX693Vu4vvZSOFwKHZp2BInlCpYY",
  },
  {
    testimonial:
      "I've been Adya's colleague for 3 years. Her progress-minded attitude, curiosity, and willingness to help colleagues, mentees, and mentors is admirable. She has a bright future ahead. Keep rocking, Adya!",
    name: "Tanmay Kakati",
    designation: "APM",
    company: "Sephora",
    image:
      "https://media.licdn.com/dms/image/C5603AQGBwuYL9jpaiQ/profile-displayphoto-shrink_400_400/0/1601716326509?e=1686787200&v=beta&t=tHKmQkyt5DOD_juNLsyxbths--flvmOfyYORr5y0Nms",
  },

  {
    testimonial:
      "After Adya optimized our processes, our traffic increased by 50%. We have never had so many happy customers before! We can't thank her enough :)",
    name: "Jane Doe",
    designation: "CXO",
    company: "ABC Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Covid19 Vaccine Tracker",
    description:
      "Collaborated with Andhra Pradesh Govt. in 2020 to lead a team of 5 analysts, developing dashboards to reduce vaccine wastage and automate data loading",
    tags: [
      {
        name: "dashboards",
        color: "blue-text-gradient",
      },
      {
        name: "volunteering",
        color: "green-text-gradient",
      },
      {
        name: "non-profit",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    source_code_link: "https://www.linkedin.com/in/adyaarora/",
  },
  {
    name: "Test & Measure Tool",
    description:
      "Developed standardized pricing tool for 1700+ US stores, empowering pricing managers to reduce wasteful costs through seamless start/stop of price tests",
    tags: [
      {
        name: "a/b testing",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "product",
        color: "pink-text-gradient",
      },
    ],
    image: tnm,
    source_code_link: "https://www.linkedin.com/in/adyaarora/",
  },
  {
    name: "AI in Healthcare",
    description:
      "Developed an AI model analyzing retinal scans for diabetic retinopathy, improving outcomes for patients and lowering healthcare costs",
    tags: [
      {
        name: "tata elxsi",
        color: "blue-text-gradient",
      },
      {
        name: "data science",
        color: "green-text-gradient",
      },
      {
        name: "healthcare",
        color: "pink-text-gradient",
      },
    ],
    image: diabetic,
    source_code_link: "https://www.linkedin.com/in/adyaarora/",
  },
];

const contacts = [
  {
    id: "phone",
    name: "+91 83848 56704",
    icon: phone,
    link: null,
  },
  {
    id: "email",
    name: "aroraadya16@gmail.com",
    icon: email,
    link: "mailto:aroraadya16@gmail.com?subject=Hey! Reaching out to you via your website.&body=Hey Adya,",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: linkedin_,
    link: "https://www.linkedin.com/in/adyaarora/",
  },
  {
    id: "insta",
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/adya_arora/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
