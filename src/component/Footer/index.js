import React from "react";
import "../../css/footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="footerGithub">
          <a href="https://github.com/jiukbaek">
            <i className="fa fa-github"></i>
          </a>
        </div>
        <div className="footerTop">
          <div>BAEK JIUK Portfolio</div>
          <div className="footerTopInfo">백지욱 1994.02.05</div>
        </div>
        <div className="division"></div>
        <div className="footerBottom">
          Copyright 2020. 백지욱. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
