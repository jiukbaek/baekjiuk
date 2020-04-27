import React, { useEffect, useState } from "react";
import "../../css/main.scss";
import SkillsItem from "../../component/SkillsItem";
import { getProjects } from "../../service/service";
import ProjectItem from "../../component/ProjectItem";

function Main() {
  const frontend = [
    { name: "HTML", level: 1 },
    { name: "CSS", level: 1 },
    { name: "Javascript", level: 1 },
    { name: "React", level: 2 },
    { name: "Redux", level: 2 },
    { name: "jQuery", level: 1 },
    { name: "SCSS", level: 2 },
  ];
  const backend = [
    { name: "Node", level: 2 },
    { name: "MySQL", level: 1 },
    { name: "TypeScript", level: 2 },
    { name: "PHP", level: 1 },
  ];
  const devops = [
    { name: "Git", level: 2 },
    { name: "AWS", level: 2 },
    { name: "Webpack", level: 2 },
    { name: "Babel", level: 2 },
    { name: "Docker", level: 3 },
  ];

  const [projects, setProjects] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await getProjects();
      setProjects(data.data);
    })();
  }, []);

  return (
    <div className="mainPageWrapper">
      <div className="mainBannerWrppaer">
        <div className="mainBannerText">
          HELLO
          <br />
          I'M BAEK JIUK
        </div>
      </div>
      <div className="mainAboutWrapper">
        <div className="mainInnerWrapper">
          <div className="mainSectionSubTitle">ABOUT</div>
          <div className="aboutContentWrapper">
            <div className="aboutPicture">
              <img src="/static/bju.png" />
            </div>
            <div className="aboutContent">
              <p className="aboutContentAccent">
                "느려도 괜찮으니 멈추지만 말자"
              </p>
              <p>안녕하세요, 천천히 나아가는 개발자 백지욱입니다.</p>
              <p>
                대학교 시절 웹 프로그래밍 강의를 통하여 사용만 해보던 웹
                페이지를 직접 제작하고
              </p>
              <p>
                하나의 서비스를 사용자들에게 제공할 수 있다는 매력에 빠져 웹
                개발의 길을 걷게 되었습니다.
              </p>
              <p>
                항상 "느려도 괜찮으니 멈추지만 말자" 는 신념을 가지고 문제를
                파악, 해결하고
              </p>
              <p>새로운 것들을 알아가는 과정을 통하여 성장하고 있습니다.</p>
              <p>
                특정 분야에 국한하지 않고 기획부터 배포까지 전체적으로 습득하기
                위해 노력해 나가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSkillWrapper">
        <div className="mainInnerWrapper">
          <div className="mainSectionSubTitle">SKILL</div>
          <div className="skillContent">
            <div className="skillContentText">
              <p>각 기술들은 실무, 토이, 기초로 나누었습니다.</p>
              <p>
                실무, 토이의 경우 프로젝트 사용 경험이 있고 소스코드를 이해 할
                수 있습니다.
              </p>
              <p>
                기초의 경우 관심도가 높고 프로젝트에 활용 할 계획이 있습니다.
              </p>
            </div>
            <div className="skillContentList">
              <SkillsItem type="Frontend" skills={frontend} />
              <SkillsItem type="Backend" skills={backend} />
              <SkillsItem type="Devops" skills={devops} />
            </div>
          </div>
        </div>
      </div>
      <div className="mainProjectWrapper">
        <div className="mainInnerWrapper">
          <div className="mainSectionSubTitle">PROJECT</div>
          <div className="projectContent">
            <div className="projectContentTop">
              <p>지금까지 수행한 프로젝트입니다.</p>
              <p>정렬 순서는 프로젝트 시작날짜 순입니다.</p>
            </div>
            <div className="projectContentList">
              {projects &&
                projects.map((project) => (
                  <ProjectItem project={project} key={project.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
