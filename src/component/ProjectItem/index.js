import React from "react";
import { Link } from "react-router-dom";
function ProjectItem({ project }) {
  return (
    <div className="projectItem">
      <div className="projectItemThumnail">
        <img src={project.thumnail} />
      </div>
      <div className="projectItemInfo">
        <div className="projectItemType">{project.type}</div>
        <div className="projectItemTitle">{project.title}</div>
        <div className="projectItemDate">
          {project.start_date} ~ {project.end_date}
        </div>
        <div className="projectItemDetail">
          <a href={`/project/${project.id}`} target="_blank">
            자세히 >
          </a>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}

export default ProjectItem;
