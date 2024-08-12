import "../styles/Education.css";
import EducationForm from "./EducationForm.jsx";
import EducationItem from "./EducationItem.jsx";
import { useState } from "react";

const addEducation = "Add Education";
let nextId = 0;

export default function Education({ education, setEducation }) {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [stillAttending, setStillAttending] = useState(false);

  function onAddEducation() {
    const newEducationObject = {
      id: nextId++,
      school: schoolName,
      degree,
      startDate,
      endDate,
      present: stillAttending,
    };
    setEducation([...education, newEducationObject]);
    setSchoolName("");
    setDegree("");
    setStartDate("");
    setEndDate("");
    setStillAttending(false);
  }
  return (
    <section>
      <h2>Educational Experience</h2>
      {education.map((e) => (
        <EducationItem
          educationItem={e}
          education={education}
          setEducation={setEducation}
        />
      ))}
      <EducationForm
        school={{ schoolName, setSchoolName }}
        degree={{ name: degree, setDegree }}
        start={{ startDate, setStartDate }}
        end={{ endDate, setEndDate }}
        present={{ stillAttending, setStillAttending }}
      />
      <button type="button" onClick={onAddEducation}>
        {addEducation}
      </button>
    </section>
  );
}
