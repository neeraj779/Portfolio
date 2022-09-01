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
  display: true
};

const educationInfo = {
  display: true,
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
  viewSkillBars: true,
  experience: [
    {
      Stack: "C/C++",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "75%"
    },
    {
      Stack: "Java",
      progressPercentage: "67%"
    },
    {
      Stack: "Git/GitHub",
      progressPercentage: "85%"
    },
    {
      Stack: "Server Side Deployment",
      progressPercentage: "65%"
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Python Backend Developer intern",
      company: "SIMMI Foundation",
      companylogo: require("./assets/images/simmi_logo.png"),
      date: "Aug 2022 - Present",
      descBullets: [
        "Working on the development and testing of new system components/services, code and design reviews",
        "Working on programming the backend for a website as Django as backend and React as front end, integrating using Django, Rest API"
      ],
      footerLink: [
        {
          name: "Offer letter",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/simmi_foundation_OL.jpg"
        }
      ]
    },
    {
      role: "Software Engineering",
      company: "J.P. Morgan",
      companylogo: require("./assets/images/jp_logo.png"),
      date: "Jul 2022 - Aug 2022",
      descBullets: [
        "Worked on a stock price data feed for Financial Data",
        "Worked With JPMorgan Chase frameworks and tools and Implemented the perspective open source code in preparation for data visualization using React js and TypeScript",
        "Displayed data visually for traders on the dashboard"
      ],
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/J.P.Morgan-completion-certificate.jpg"
        }
      ]
    },
    {
      role: "Software Engineering",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/Goldman_Sachs.png"),
      date: "Jun 2022 - Jul 2022",
      descBullets: [
        "Implemented password encryption logic using Hashcat tool to secure the database.",
        "Worked on solving the problem by using sha256 on the basis of the database provided to avoid data breaches."
      ],
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/Goldman-Sachs-completion-certificate.jpg"
        }
      ]
    },
    {
      role: "Subject Matter Expert (SME)",
      company: "Chegg",
      companylogo: require("./assets/images/chegg_logo.png"),
      date: "Oct 2021 - Nov 2021",
      descBullets: [
        "I was working as a Subject Matter Expert in Computer Science",
        "Solved approximately 100+ questions related to Data Structures and Algorithms and CS Subjects asked by students all across the globe.",
        "Got around 50+ upvotes for answers from students."
      ],
      footerLink: [
        {
          name: "Work Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/Chegg-Work-Certificate.jpg"
        }
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

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
      ]
    }
  ],
  display: false
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Kickstart 2022",
      subtitle: "Global Rank 4888/14K in Google Kickstart Round D’22",
      image: require("./assets/images/google.png"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/kickstar'22.jpg"
        }
      ]
    },
    {
      title: "Techzamia",
      subtitle:
        "won the best project in the Language 'C /C ++'in the event Techzamia",
      image: require("./assets/images/techzamia_logo.png"),
      imageAlt: "Techzamia",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/Techzamia.png"
        },
        {
          name: "Project",
          url: "https://github.com/neeraj779/Student-DBMS"
        }
      ]
    },
    {
      title: "Problem Solving (Basic)",
      subtitle:
        "Completed Certifcation from HackerRank for problem solving(Basic)",
      image: require("./assets/images/HackerRank_logo.png"),
      imageAlt: "HackerRank",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://www.hackerrank.com/certificates/9e703de22020"
        }
      ]
    },

    {
      title: "Problem Solving (Intermediate)",
      subtitle:
        "Completed Certifcation from HackerRank for Problem Solving (Intermediate)",
      image: require("./assets/images/HackerRank_logo.png"),
      imageAlt: "Hackerrank",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://www.hackerrank.com/certificates/2c16e99e8c47"
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "Completed Certifcation from Coursera for Machine Learning",
      image: require("./assets/images/coursera_logo.png"),
      imageAlt: "Coursera",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://coursera.org/share/424b8e213456a824507b59cb26755f80"
        }
      ]
    },
    {
      title: "Java",
      subtitle: "Completed Certifcation from HackerRank for Java",
      image: require("./assets/images/HackerRank_logo.png"),
      imageAlt: "Hackerrank",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://www.hackerrank.com/certificates/ccbe3d458054"
        }
      ]
    },
    {
      title: "Python",
      subtitle: "Completed Certifcation from HackerRank for Python",
      image: require("./assets/images/HackerRank_logo.png"),
      imageAlt: "Hackerrank",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://www.hackerrank.com/certificates/00a15769d2c0"
        }
      ]
    },
    {
      title: "Amazon Web Services",
      subtitle: "Attended AWS Builders Online Series",
      image: require("./assets/images/amazon-web-services.png"),
      imageAlt: "AWS",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/amazon-web-services.png"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Learning and Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://medium.com/@neeraj779/how-to-set-up-django-nginx-and-gunicorn-on-ubuntu-22-04-52c3c2d375b4",
      title: "How To Set Up Django Nginx, and Gunicorn on Ubuntu 22.04",
      description:
        "Django is a powerful web framework that can help you get your Python application or website off the ground. Django includes a simplified development server for testing your code locally, but for for anything even slightly production related"
    },
    {
      url: "https://medium.com/@neeraj779/how-to-install-ubuntu-on-oracle-virtualbox-a8ea610c79aa",
      title: "How to Install Ubuntu on Oracle VirtualBox",
      description:
        "Oracle VirtualBox is a cross-platform virtualization application. It installs on your existing Intel or AMD-based computers, whether they are running Windows, Mac or Linux operating systems. VirtualBox can create and run a “guest” operating system"
    },
    {
      url: "https://medium.com/@neeraj779/how-to-change-screen-resolution-of-a-ubuntu-vm-in-virtualbox-8c7d43119884",
      title: "How to Change Screen Resolution of a Ubuntu VM in VirtualBox",
      description:
        "Before starting to change the resolution of a ubuntu VM we need to install the VirtualBox Guest Addition image. To install guest additional image in your Virtual Machine, Open the terminal of the operating system and execute the command provided below to install some necessary packages for installing Guest Addition Image..."
    },
    {
      url: "https://medium.com/@neeraj779/how-to-create-ec2-instance-in-aws-64592392ffcb",
      title: "How to Create EC2 Instance in AWS",
      description:
        "An EC2 instance is a virtual server. It stands for Elastic Compute Cloud. It is a web service where an AWS subscriber can request and provision a compute server in the AWS cloud. An on-demand EC2 instance is an offering from AWS where the subscriber/user can rent the virtual server per hour and use it to deploy his/her own applications."
    }
  ],
  display: true
};

const contactInfo = {
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all."
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
  blogSection,
  achievementSection,
  contactInfo
};
