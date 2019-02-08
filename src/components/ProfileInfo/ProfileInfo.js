import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => (
    <div className="profile-div">
        <img className="profile-image" src="./IMG_1732.JPG" alt="Sarah Lopriore" />
        <div className="profile-text">
            <p>
            I am just beginning my career as a developer, I recently finished school and I have learned a lot. So far I have learned HTML, CSS, JavaScript, JQuery, NodeJS, 
            MySQL, Express, and MongoDB. I have worked in the software world previously as a Quality Assurance Associate at Hyland Software. 
            While I was there I developed skills with SQL and working with databases directly. I also have a lot of experience with debugging and resolving issues. 
            I have also worked with Agile methodologies, including SCRUM. I love learning and I am excited to continue to advance my skills and knowledge in this field.
            </p>
            <br />
            <p>
            On a more personal note, I have two amazing dogs, Mikey, a border collie mix and Tia, a pitbull mix. I love to travel, to cook, and to go horseback riding. 
            Animals are one of my passions, and I try to spend some of my free time voluntering with rescue horses. 
            My boyfriend and I love hiking and the mountains, so we do hope to be able to move out west soon. 
            This is one of the many reasons I hope to be able to find a remote job opportunity.
            </p>
        </div>
    </div>
)

export default ProfileInfo;