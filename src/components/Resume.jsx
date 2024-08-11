import General from "./General.jsx";
import Education from "./Education.jsx";
import Work from "./Work.jsx";
import { useState } from "react";

const generateResume = "Generate Resume";

export default function Resume() {
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  return (
    <>
      <General />
      <Education education={education} setEducation={setEducation} />
      <Work
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
      />
      <div class="submitInfo">
        <button id="generateResume" type="submit">
          {generateResume}
        </button>
      </div>
    </>
  );
}
