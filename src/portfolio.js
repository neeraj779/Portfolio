import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2200
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Neeraj",
  title: "Hi, I'm Neeraj",
  subTitle: emoji([
    "currently a 3rd-year student at Sathyabama Institute of Science and Technology, undertaking my Bachelor in Electronics and Communications Engineering. Love to explore how things work behind the scenes in software & applications. Always up for a conversation about new technologies and exciting projects. Happy reading 🍻"
  ]),
  resumeLink:
    "https://drive.google.com/file/d/1DYZMkCtK8Qn_IS1EL299WoJEjzwNFde5/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/neeraj779",
  gmail: "neeraj79108@gmail.com",
  linkedin: "https://www.linkedin.com/in/neeraj779/",
  twitter: "https://twitter.com/neeraj_779",
  instagram: "https://www.instagram.com/neeraj779_/",
  display: true
};

const skillsSection = {
  title: "Languages and Tools:",
  subTitle: "",
  skills: [],

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fa-brands fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fa-brands fa-aws"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstap",
      fontAwesomeClassname: "fa-brands fa-bootstrap"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "figma",
      fontAwesomeClassname: "fa-brands fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sathyabama University",
      logo: require("./assets/images/sist_logo.png"),
      subHeader: "B.E. in Electronics and Communications Engineering",
      duration: "2020 - Present | Chennai, India"
    },

    {
      schoolName: "Govt. Boys Sr. Sec. School",
      logo: require("./assets/images/gbsss_logo.jpg"),
      subHeader: "Intermediate | Science",
      duration: "2018 - 2020 | CBSE | Delhi, India"
    }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C/C++",
      progressPercentage: "80%"
    },
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "67%"
    },
    {
      Stack: "Server Side Deployment",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Subject Matter Expert (SME)",
      company: "Chegg",
      companylogo: require("./assets/images/chegg_logo.png"),
      date: "Oct 2021 - Nov 2021",
      descBullets: [
        "I was working as a Subject Matter Expert in Computer Science",
        "Solved approximately 100+ questions related to Data Structures and Algorithms and CS Subjects asked by students all across the globe.",
        "Got around 50+ upvotes for answers from students."
      ]
    },
    {
      role: "Goldman Sachs Engineering Virtual Program Internship",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/Goldman_Sachs.png"),
      date: "Jun 2022 - Jul 2022",
      descBullets: [
        "Implemented password encryption logic using Hashcat tool to secure the database.",
        "Worked on solving the problem by using sha256 on the basis of the database provided to avoid data breaches."
      ]
    },
    {
      role: "J.P. Morgan Software Engineering Internship",
      company: "J.P. Morgan",
      companylogo: require("./assets/images/jp_logo.png"),
      date: "Jul 2022 - Aug 2022",
      descBullets: [
        "Worked on a stock price data feed for Financial Data",
        "Worked With JPMorgan Chase frameworks and tools and Implemented the perspective open source code in preparation for data visualization using React js and TypeScript",
        "Displayed data visually for traders on the dashboard"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Events that i have attended",
  subtitle: "Amazon Web Services",
  projects: [
    {
      projectName: "AWS Builders Online Series",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Certificate",
          url: "https://aws.amazon.com/"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Kickstart 2022",
      subtitle: "Global Rank 4888/14K in Google Kickstart Round D’22",
      image: require("./assets/images/google.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/kickstar'22.jpg"
        }
      ]
    },
    {
      title: "Techzamia",
      subtitle:
        "won the best project in the Language 'C /C ++'in the event Techzamia",
      image: require("./assets/images/techzamia_logo.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/Techzamia.png"
        }
      ]
    },
    {
      title: "Problem Solving (Basic)",
      subtitle:
        "Completed Certifcation from HackerRank for problem solving(Basic)",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://www.hackerrank.com/certificates/9e703de22020"
        }
      ]
    },

    {
      title: "Problem Solving (Intermediate)",
      subtitle:
        "Completed Certifcation from HackerRank for Problem Solving (Intermediate)",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://www.hackerrank.com/certificates/2c16e99e8c47"
        }
      ]
    },
    {
      title: "Java",
      subtitle: "Completed Certifcation from HackerRank for Java",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://www.hackerrank.com/certificates/ccbe3d458054"
        }
      ]
    },
    {
      title: "Python",
      subtitle: "Completed Certifcation from HackerRank for Python",
      image: require("./assets/images/HackerRank_logo.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://www.hackerrank.com/certificates/00a15769d2c0"
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "Completed Certifcation from Coursera for Machine Learning",
      image: require("./assets/images/coursera_logo.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://coursera.org/share/424b8e213456a824507b59cb26755f80"
        }
      ]
    },
    {
      title: "Amazon Web Services",
      subtitle: "Attended AWS Builders Online Series",
      image: require("./assets/images/amazon-web-services.png"),
      footerLink: [
        {
          name: "View Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/amazon-web-services.png"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "neeraj79108@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo
};
