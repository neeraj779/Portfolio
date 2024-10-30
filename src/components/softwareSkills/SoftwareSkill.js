import React from "react";
import {
  FaPython,
  FaGithub,
  FaLinux,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaBootstrap,
  FaGitAlt,
  FaCode
} from "react-icons/fa";
import {DiPostgresql, DiHeroku} from "react-icons/di";
import {
  SiCplusplus,
  SiCsharp,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiTailwindcss,
  SiVisualstudiocode,
  SiPycharm,
  SiPostman,
  SiMicrosoftsqlserver,
  SiNetlify,
  SiVercel,
  SiNginx,
  SiGunicorn,
  SiTypescript,
  SiMysql
} from "react-icons/si";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

const iconMap = {
  "C#": <SiCsharp style={{color: "#868e96"}} />,
  "C/C++": <SiCplusplus style={{color: "#868e96"}} />,
  Python: <FaPython style={{color: "#868e96"}} />,
  JavaScript: <FaJs style={{color: "#868e96"}} />,
  HTML5: <FaHtml5 style={{color: "#868e96"}} />,
  CSS3: <FaCss3Alt style={{color: "#868e96"}} />,
  React: <FaReact style={{color: "#868e96"}} />,
  FastAPI: <SiFastapi style={{color: "#868e96"}} />,
  Django: <SiDjango style={{color: "#868e96"}} />,
  Flask: <SiFlask style={{color: "#868e96"}} />,
  Bootstrap: <FaBootstrap style={{color: "#868e96"}} />,
  "Tailwind CSS": <SiTailwindcss style={{color: "#868e96"}} />,
  Git: <FaGitAlt style={{color: "#868e96"}} />,
  GitHub: <FaGithub style={{color: "#868e96"}} />,
  "VS Code": <SiVisualstudiocode style={{color: "#868e96"}} />,
  PyCharm: <SiPycharm style={{color: "#868e96"}} />,
  Postman: <SiPostman style={{color: "#868e96"}} />,
  Linux: <FaLinux style={{color: "#868e96"}} />,
  PostgreSQL: <DiPostgresql style={{color: "#868e96"}} />,
  MySQL: <SiMysql style={{color: "#868e96"}} />,
  "SQL Server": <SiMicrosoftsqlserver style={{color: "#868e96"}} />,
  AWS: <FaAws style={{color: "#868e96"}} />,
  Heroku: <DiHeroku style={{color: "#868e96"}} />,
  Netlify: <SiNetlify style={{color: "#868e96"}} />,
  Vercel: <SiVercel style={{color: "#868e96"}} />,
  Nginx: <SiNginx style={{color: "#868e96"}} />,
  Gunicorn: <SiGunicorn style={{color: "#868e96"}} />,
  "Node.js": <FaNode style={{color: "#868e96"}} />,
  TypeScript: <SiTypescript style={{color: "#868e96"}} />
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skill.skillName}
            >
              {iconMap[skill.skillName] || <FaCode />}
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
