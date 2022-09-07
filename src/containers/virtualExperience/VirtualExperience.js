import React, {useContext} from "react";
import "./VirtualExperience.scss";
import VExperienceCard from "../../components/vExperienceCard/VExperienceCard";
import {virtualExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function VirtualExperience() {
  const {isDark} = useContext(StyleContext);
  if (virtualExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="virtualExperience">
            <div>
              <div className="vexperience-header">
                <h1
                  className={
                    isDark
                      ? "dark-mode heading vexperience-heading"
                      : "headingvexperience-heading"
                  }
                >
                  Big Projects
                </h1>
                <p
                  className={
                    isDark
                      ? "dark-mode subTitle vexperience-subtitle"
                      : "subTitle vexperience-subtitle"
                  }
                >
                  some companies that i have completed online virtual experience
                  program with are listed below.
                </p>
              </div>
              <div className="experience-cards-div">
                {virtualExperiences.experience.map((card, i) => {
                  return (
                    <VExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        footer: card.footerLink
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
