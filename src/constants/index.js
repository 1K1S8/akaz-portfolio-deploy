import p1 from "../assets/projects/p1.jpg";
import p2 from "../assets/projects/p2.jpg";
import p3 from "../assets/projects/p3.png";
import p4 from "../assets/projects/p4.jpg";


export const HERO_CONTENT = `Highly motivated and skilled software engineer with a Master's degree in Software Engineering from Vellore Institute of Technology, completed in June 2024. My expertise spans across Java, Spring Boot, and a wide range of technologies including JavaScript, React.js, Tailwind CSS, REST API, MySQL, and Docker. I have a strong track record of developing secure and efficient applications, having successfully delivered projects such as token-based authentication systems, microservice architectures, and cloud-hosted solutions.

`;

export const ABOUT_TEXT = `Strong background in DevOps practices and AWS services, enhancing project efficiency and scalability. Certified in Java, Spring Boot, DevOps, and Data Analytics, with a track record of significant improvements in project security, efficiency, and performance. Seeking opportunities to leverage technical skills and innovative problem-solving abilities in a dynamic software engineering role.`;

export const EXPERIENCE = [
  {
    year: "2023 - Present",
    name: "Software Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "DB MySQL"],
  },
  {
    year: "2022 - 2023",
    name: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    name: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    name: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Spring Security - Token Based Authentication & Authorization Using JWT",
    image: p1,
    description:
      "Constructed a robust token-based authentication system using a 3-Way security filter chain method, Signature authentication & authorization.Process increases and enhances the overall security and integrity of the application by 75%.",
    technologies: ["HTML", "CSS", "Java", "Rest API", "H2"],
  },
  {
    title: "V-Profile Project Setup (Mannual & Automation)",
    image: p2,
    description:
      "Organized the comprehensive stack project through a blend of manual and automated processes. reduction of human effort by up to 90%, enhancing efficiency and reducing errors.",
    technologies: ["HTML", "CSS", "Vagrant", "Shell","Linux"],
  },
  {
    title: "Portfolio Website",
    image: p3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "JS", "React", "Tailwind CSS"],
  },
  {
    title: "Cloud - Website hosting in AWS and Containerizing in Docker",
    image: p4,
    description:
      "I employed AWS resources such as EC2, EBS, ELB, S3, and private DNS to securely host a personal blog application.Leveraging autoscaling ensured seamless maintenance, adapting resources to demand dynamically.",
    technologies: ["AWS", "Docker", "Java", "mySQL","git"],
  },
];

export const CONTACT = {
  address: " Vellore,Tamilnadu. ",
  phoneNo: "9361102603" ,
  email: "makash31102001@gmail.com",
};
