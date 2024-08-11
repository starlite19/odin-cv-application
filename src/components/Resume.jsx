import General from "./General.jsx";
import Education from "./Education.jsx";
import Work from "./Work.jsx";
import { useState } from "react";

const generateResume = "Generate Resume";

export default function Resume() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  // TODO: submit button
  return (
    <>
      <General
        first={{ firstName, setFirstName }}
        last={{ lastName, setLastName }}
        e={{ email, setEmail }}
        p={{ phone, setPhone }}
      />
      <Education education={education} setEducation={setEducation} />
      <Work
        workExperience={workExperience}
        setWorkExperience={setWorkExperience}
      />
      <div class="submitInfo">
        <button id="generateResume" type="button">
          {generateResume}
        </button>
      </div>
    </>
  );
}
