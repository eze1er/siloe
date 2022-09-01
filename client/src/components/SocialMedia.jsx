import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/EzeKakana">
          <BsTwitter />
        </a>
      </div>
      {/* <div>
        <FaFacebook />
      </div> */}
      <div>
        <a href="https://www.linkedin.com/in/ezechiel-itimbien-4841aa92/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/channel/UC_-rI0d4c6AmGA_3p2-ls9w">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
