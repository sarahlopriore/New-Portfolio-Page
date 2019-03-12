import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => (
    <div className="profile-div">
    <div className="row center-xs center-sm start-md start-lg">
    <div className="col-md-offset-1 col-lg-offset-1 col-md-6 box-1">
        <img className="profile-image" src="./IMG_17322.JPG" alt="Sarah Lopriore" />
        </div>
        </div>
        <div className="row center-xs center-sm">
        <div className="col-md-offset-6 col-lg-offset-6 text-container">
            <div className="profile-text box">
            I am just beginning my career as a developer, I recently finished school and I have learned a lot. So far I have learned HTML, CSS, JavaScript, JQuery, NodeJS, 
            MySQL, Express, and MongoDB. I have worked in the software world previously as a Quality Assurance Associate at Hyland Software. 
            While I was there I developed skills with SQL and working with databases directly. I also have a lot of experience with debugging and resolving issues. 
            I have also worked with Agile methodologies, including SCRUM. I love learning and I am excited to continue to advance my skills and knowledge in this field.
            </div>
            </div>
            {/* <div className="row center-xs center-sm center-md center-lg"> */}
            <div className="col-md-offset-1">
            <div className="profile-text box-2">
            On a more personal note, I have two amazing dogs, Mikey, a border collie mix and Tia, a pitbull mix. I love to travel, to cook, and to go horseback riding. 
            Animals are one of my passions, and I try to spend some of my free time voluntering with rescue horses. 
            My boyfriend and I love hiking and the mountains, so we do hope to be able to move out west soon. 
            This is one of the many reasons I hope to be able to find a remote job opportunity.
            </div>
            </div>
        {/* </div> */}
        </div>
    </div>
)

export default ProfileInfo;