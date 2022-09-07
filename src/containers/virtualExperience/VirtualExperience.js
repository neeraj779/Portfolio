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
              <h1 className="experience-heading">Projects</h1>
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
