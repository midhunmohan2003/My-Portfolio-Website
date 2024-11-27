import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi, accusantium vero architecto vitae dolorem dolorum eos totam nemo dolore asperiores iusto reprehenderit cupiditate, perferendis animi natus sint quaerat iste?</span>
        <div className="skillBars">
            <div className="skillBar">

                <img src={UIDesign} alt="ui design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, write your own content here</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="web design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text, write your own content here</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={AppDesign} alt="app design" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text, write your own content here</p>
                </div>
            </div>

        </div>
      </section>
    </>
  )
}

export default Skills
