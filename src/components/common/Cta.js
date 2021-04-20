import React from "react"
import Cta from "../../images/Meeting - CTA.png"
import Coffee from "../../images/coffee.svg"
import Joel from "../../images/Joel.png"
import qleft from "../../images/quotes-left.png"
import qright from "../../images/quotes-right.png"


const CtaQuote = ()=>(
    <div className="Cta-Container">
        <div className="ctaSection">
        <a target='_blank' href="https://calendly.com/zac-harris/30-minute-private?month=2020-06"><img src={Cta} className="desktop-img"></img></a>
            {/* <div class="hide-indesk">
                     <img src={Coffee} className="coffee"></img>
                        <h4 className="mobile-cta">Want to talk <br>
                            </br>marketing?</h4>
                            <a target='_blank' href="https://calendly.com/zac-harris/30-minute-private?month=2020-06"><button className="mobile-btn">grab a zoom coffee with me</button></a>
            </div>  */}
        </div>

        <div className="quote-container">
            <div className="quote">
            <img className="joel-img" src={Joel}></img>
            <h5> <img src={qleft} width="35px" height="35px"></img> Zac cares deeply about getting things right -- not only with SEO, but
            with marketing, user experience, and conversion too. I worked directly
            with Zac on an audit of SpyFu. He approached it with an open mind
            and a sincere desire to find the right path forward<span className="orange-dot"> .</span><img src={qright} width="35px" height="35px"></img></h5>
            <p>Joel Klettke, Founder at Case Study Buddy</p>
            </div>

        </div> 
        </div>
        )
