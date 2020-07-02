import React from "react";

const Info = (props) => {
  return (
    <div>
      <div className="about">VULPIX score</div>
      <div className="aboutinfo" style={{ textDecorationColor: "white" }}>
        In order to simplify VULPIX's results to an application user, we
        summarize each application's privacy leaks into a simple VULPIX score
        based on the level of threat to an individual's privacy. The VULPIX
        Score is computed from the detected PI and has a value from 0 to 100. A
        VULPIX score of 0 means that the application is not transmitting any PI
        and is not a threat to user privacy. On the other hand, a VULPIX score
        of 100 means that the application transmits all sorts of PI that can
        uniquely identify the user.
      </div>
      <div className="aboutinfo">
        The insight behind the score is based on the level of threat impact to
        the user. If a PI is leaked and it can be used by an adversary to
        uniquely identify an individual, it is considered to have high threat
        impact.
      </div>
      <div className="aboutinfo">
        The VULPIX score assigns 25 possible points to each PI category, device
        information, SIM card information, user information and location
        information, equally. For each category, if any high-impact PI is
        leaked, we give that category a full 25 points. However, if no
        high-impact PI is transmitted, we consider the transmission of
        low-impact PI as a set. If more than four in the same category are
        transmitted, we give that category a full 25 points. We use four PI as a
        threshold because studies have reported that using four pieces of
        personal information can effectively identify individuals. The summation
        of scores from all categories is then the final VULPIX score.
      </div>
    </div>
  );
};

export default Info;
