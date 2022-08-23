import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Neeraj",
  title: "Hi, I'm Neeraj",
  subTitle: emoji(
    "I'm currently studying Electronics and Communication Engineering at Sathyabama Institute of Science and Technology. I'm on track for learning more about Cross-Platform Development, Data structures and Algorithms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DYZMkCtK8Qn_IS1EL299WoJEjzwNFde5/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/neeraj779",
  linkedin: "https://www.linkedin.com/in/neeraj779/",
  gmail: "neeraj79108@gmail.com",
  instagram: "https://www.instagram.com/neeraj779_/",
  twitter: "https://twitter.com/neeraj_779",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Languages and Tools:",
  subTitle: "",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
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

// Your top 3 proficient stacks/tech experience

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
      progressPercentage: "65%"
    },
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
      date: "July 2nd, 2022",
      descBullets: [
        "Implemented password encryption logic using Hashcat tool to secure the database.",
        "solved the problem by using sha256 on the basis of database provided to avoid data breaches."
      ]
    },
    {
      role: "J.P. Morgan Software Engineering Internship",
      company: "J.P. Morgan",
      companylogo: require("./assets/images/jp_logo.png"),
      date: "July 24th, 2022",
      descBullets: [
        "Worked on a stock price data feed for Financial Data",
        "Worked With JPMorgan Chase frameworks and tools and Implemented the perspective open source code in preparation for data visualization using React js and TypeScript",
        " Displayed data visually for traders on the dashboard"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
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
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/kickstar'22.pdf"
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

// Twitter Section

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
