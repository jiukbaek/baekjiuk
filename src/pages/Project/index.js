import React, { useState, useEffect } from "react";
import { getProject } from "../../service/service";
import "../../css/project.scss";

function Project({ history, location, match }) {
  const { id } = match.params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await getProject(id);
      setProject(data.data);
    })();
  }, []);

  useEffect(() => {
    if (project && project.git_url) console.log(project.git_url.split(","));
  }, [project]);

  return (
    project && (
      <div className="projectDetailWrapper">
        <div className="projectDetailType">{project.type}</div>
        <div className="projectDetailTitle">{project.title}</div>
        <div className="projectDetailDate">
          {project.start_date} ~ {project.end_date}
        </div>
        {project.url && (
          <div className="projectDetailLink">
            <div>
              <i className="icon icon-link"></i>
            </div>
            <a href={project.url} target="_blank">
              {project.url}
            </a>
          </div>
        )}
        {project.git_url &&
          (() => {
            const gitUrlArr = project.git_url.split(",");
            return gitUrlArr.map((git_url) => {
              return (
                <div className="projectDetailLink">
                  <div>
                    <i className="fa fa-github"></i>
                  </div>
                  <a href={git_url.trim()} target="_blank">
                    {git_url.trim()}
                  </a>
                </div>
              );
            });
          })()}
        <div
          className="projectDetailContent"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
        <div className="projectDetailSkills">
          <div className="projectSkillsLabel">사용 기술</div>
          <div className="projectSkillItems">
            {project.skills.map((skill, index) => {
              return <span key={index}>{skill}</span>;
            })}
            <div className="clear"></div>
          </div>
        </div>
      </div>
    )
  );
}

export default Project;
