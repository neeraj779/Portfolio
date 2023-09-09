import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Neeraj",
  title: "Hi, I'm Neeraj",
  subTitle: emoji([
    "Former Software Development Intern at IIT Bombay, currently in my final year at Sathyabama Institute of Science and Technology pursuing a Bachelor's degree in ECE. I am a passionate learner who is always eager to acquire new knowledge and work across various technologies and domains. I enjoy exploring emerging technologies and utilizing them to solve real-life problems. Happy reading! 🍻"
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      logo: require("./assets/images/sistLogo.png"),
      subHeader: "B.E. in Electronics and Communications Engineering",
      duration: "2020 - 2024 | Chennai, India"
    },

    {
      schoolName: "Govt. Boys Sr. Sec. School",
      logo: require("./assets/images/gbsssLogo.jpg"),
      subHeader: "Intermediate | Science",
      duration: "2018 - 2020 | CBSE | Delhi, India"
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Intern",
      company: "IIT Bombay",
      companylogo: require("./assets/images/iitbLogo.png"),
      date: "Sep 2022 - Present",
      descBullets: [
        "Developed IIT Bombay's Leap OCR Tool and Udaan Translation Tool, benefiting 500+ users in India and abroad for document OCR and translation.",
        "Managed a team of 5 developers, collaborated with 4 teams, and oversaw development, deployment, problem-solving, testing, and design.",
        "Improved reliability, database management, implemented async tasks, web sockets, and enhanced security mechanisms."
      ],
      footerLink: [
        {
          name: "Letter of Recommendation",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/LOR_IITB.jpg"
        },
        {
          name: "Letter of completion",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/LoC_IITB.jpg"
        }
      ]
    },

    {
      role: "Backend Development Intern",
      company: "SIMMI Foundation",
      companylogo: require("./assets/images/simmiLogo.png"),
      date: "Aug 2022 - Nov 2022",
      descBullets: [
        "Worked on development and testing of new system components/services.",
        "Conducted code and design reviews to ensure quality and reliability of systems.",
        "Programmed backend of website using Django.",
        "Integrated backend and frontend using Django Rest API."
      ],
      footerLink: [
        {
          name: "LoR",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/Neeraj_LOR.jpg"
        },
        {
          name: "Certificate of Appreciation",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/Appreciation-certificate-simmi.png"
        },
        {
          name: "Certificate of Completion",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/certificate-simmi.png"
        }
      ]
    },

    {
      role: "Subject Matter Expert (SME)",
      company: "Chegg",
      companylogo: require("./assets/images/cheggLogo.png"),
      date: "Oct 2021 - Nov 2021",
      descBullets: [
        "Worked as a Subject Matter Expert in Computer Science.",
        "Solved approximately 50+ questions related to Data Structures and Algorithms and CS Subjects asked by students all across the globe."
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

const virtualExperiences = {
  display: true,
  experience: [
    {
      role: "Developer Virtual Experience Program",
      company: "Accenture",
      companylogo: require("./assets/images/accentureLogo.png"),
      date: "Sep 2022 - Aug 2022",
      descBullets: [
        "Worked on tasks like Architecture, Programming, Testing, Security, Artificial Intelligence.",
        "Design changes to an existing architecture,",
        "Securing the software development lifecycle (SDLC)",
        "Scale on-premise system infrastructure to the cloud",
        "Scale on-premise system infrastructure to the cloud"
      ],
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/accenture_certificate.jpg"
        },
        {
          name: "Project",
          url: "https://github.com/neeraj779/Accenture-Nordics-Developer-Virtual-Program"
        }
      ]
    },
    {
      role: "Software Engineering Virtual Experience Program",
      company: "J.P. Morgan",
      companylogo: require("./assets/images/jpMorganLogo.png"),
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
        },
        {
          name: "Project",
          url: "https://github.com/neeraj779/JPMorgan-Chase-Virtual-Software-Engineering-Internship"
        }
      ]
    },
    {
      role: "Software Engineering Virtual Experience Program",
      company: "Goldman Sachs",
      companylogo: require("./assets/images/goldmanSachsLogo.png"),
      date: "Jun 2022 - Jul 2022",
      descBullets: [
        "Implemented password encryption logic using Hashcat tool to secure the database.",
        "Worked on solving the problem by using sha256 on the basis of the database provided to avoid data breaches."
      ],
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/Goldman-Sachs-completion-certificate.jpg"
        },
        {
          name: "Project",
          url: "https://github.com/neeraj779/Goldman-Sachs-Engineering-Virtual-Program"
        }
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Kickstart 2022",
      subtitle: "Global Rank 3602 in Google Kickstart Round H’22",
      image: require("./assets/images/googleLogo.png"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://neeraj-certificate.s3.ap-south-1.amazonaws.com/00000000008caba4.jpg"
        }
      ]
    },

    {
      title: "Techzamia",
      subtitle:
        "Won the Best Project in Language C/C++ in the Event Techzamia.",
      image: require("./assets/images/techzamiaLogo.png"),
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
      title: "NPTEL",
      subtitle:
        "Completed Certification from NPTEL for Data Structures and Algorithms",
      image: require("./assets/images/nptel.png"),
      imageAlt: "AWS",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS92S6447218710069847"
        }
      ]
    },
    {
      title: "HackerRank",
      subtitle:
        "Completed Certifications from HackerRank for Problem Solving, Python, SQL, Java",
      image: require("./assets/images/hackerrankLogo.png"),
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
      subtitle: "Completed Certification from Coursera for Machine Learning",
      image: require("./assets/images/courseraLogo.png"),
      imageAlt: "Coursera",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://coursera.org/share/424b8e213456a824507b59cb26755f80"
        }
      ]
    },
    {
      title: "Eduonix",
      subtitle: "Completed Certification from Eduonix for Software Testing",
      image: require("./assets/images/eduonix.png"),
      imageAlt: "AWS",
      footerLink: [
        {
          name: "Certifcate",
          url: "https://www.eduonix.com/certificate/c9f6bfaf7a"
        }
      ]
    }
  ],
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/accentureLogo.png"),
      projectName: "Saayahealth",
      projectDesc: [
        "Design changes to an existing architecture, Scale on-premise system infrastructure to the cloud",
        "Security maturity assessment 2. IAM policies and permissions",
        "Shaping the Problem. Data and privacy protection"
      ],
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Learning New Things, I love to write and teach others what I have learnt.",
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
  workExperiences,
  virtualExperiences,
  openSource,
  bigProjects,
  blogSection,
  achievementSection,
  contactInfo
};
