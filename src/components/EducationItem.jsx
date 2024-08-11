import { useState } from "react";
import EducationForm from "./EducationForm.jsx";
import Experience from "./Experience.jsx";

export default function EducationItem({
  educationItem,
  education,
  setEducation,
}) {
  const [editing, setEditing] = useState(false);
  const [schoolName, setSchoolName] = useState(educationItem.school);
  const [degree, setDegree] = useState(educationItem.degree);
  const [startDate, setStartDate] = useState(educationItem.startDate);
  const [endDate, setEndDate] = useState(educationItem.endDate);
  const [stillAttending, setStillAttending] = useState(educationItem.present);

  // function onEditing() {
  //   setEditing(true);
  // }

  function onSave(itemId) {
    const educationCopy = [...education];
    // const newItem = educationCopy.find((e) => e.id == itemId);
    educationCopy[itemId] = {
      id: itemId,
      school: schoolName,
      degree,
      startDate,
      endDate,
      present: stillAttending,
    };
    setEducation(educationCopy);
    setEditing(false);
  }

  function onCancel() {
    setEditing(false);
    setSchoolName(educationItem.school);
    setDegree(educationItem.degree);
    setStartDate(educationItem.startDate);
    setEndDate(educationItem.endDate);
    setStillAttending(educationItem.present);
  }

  // TODO add ids to EducationForm and Experience so Save can function properly?
  if (editing) {
    return (
      <>
        <EducationForm
          school={{ schoolName, setSchoolName }}
          degree={{ name: degree, setDegree }}
          start={{ startDate, setStartDate }}
          end={{ endDate, setEndDate }}
          present={{ stillAttending, setStillAttending }}
        />
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </>
    );
  } else {
    return (
      <Experience
        role={educationItem.degree}
        company={educationItem.school}
        start={educationItem.startDate}
        end={educationItem.endDate}
        present={educationItem.present}
        setEditing={setEditing}
      />
    );
  }
}
