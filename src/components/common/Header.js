import React from "react";
import Moji from "../../images/zac-moji.png"
import Instagram from "../../images/instagram.svg"
import Linkedin from "../../images/linkedin.svg"
import Twitter from "../../images/twitter.svg"
import Medium from "../../images/medium.svg"
import Spyfu from "../../images/spyfu.svg"
import Jeffery from "../../images/Jeff2.svg"
import Nacho from "../../images/nacho.svg"
import Northcutt from "../../images/northcutt.svg"

const Header = () => (
    <div className="HeadContainer">
            <div className="greeting">
                <img src={Moji} width="40%"></img>
                <h2>I'm Zac, a <span className="underline">SaaS marketer</span>, Designer, and <br>
                </br>two-time founder. I'm the Chief Revenue<br>
                </br>Officer at Northcutt by day, and design my <br>
                </br>my own projects by night.</h2>
            </div>
          <div className="icons">
                   <a target='_blank' href="https://www.linkedin.com/in/zacharris36/"> <img src={Linkedin} ></img></a>
                   <a target='_blank' href="https://twitter.com/zac_t_harris"><img src={Twitter} ></img></a>
                   <a target='_blank' href="https://medium.com/@zacthefounder"><img src={Medium} ></img></a>
                   <a target='_blank' href="https://www.instagram.com/harrisz_36/"><img src={Instagram} ></img></a>
                      <div class="whereIWorked">
                          <p>places i've worked</p>
                              <div className="workLogos">
                                  <img src={Spyfu}></img>
                                  <img src={Jeffery}></img>
                                  <img src={Nacho} ></img>
                                  <img src={Northcutt}></img>
                              </div>
                      </div>
          </div>
          </div>
)

    export default Header;