import React from "react";

function SkillsItem({ type, skills }) {
  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "실무";
      case 2:
        return "토이";
      case 3:
        return "기초";
    }
  };
  return (
    <div className="skillsItem">
      <div className="skillsItemTop">
        <img src={`/static/${type.toLowerCase()}.png`} />
        <p>{type}</p>
      </div>
      <div className="skillsItemList">
        {skills.map((skill, index) => (
          <div className="skillItem" key={index}>
            <img src={`/static/icons/${skill.name.toLowerCase()}.png`} />
            <div>
              <div className={`skillLevel level${skill.level}`}>
                {getLevel(skill.level)}
              </div>
              <div className="skillName">{skill.name}</div>
            </div>
            <div className="clear"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsItem;
