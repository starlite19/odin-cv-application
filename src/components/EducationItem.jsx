import { useState } from "react";
import EducationForm from "./EducationForm.jsx";
import Experience from "./Experience.jsx";
import "../styles/Item.css";

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

  function onSave(e) {
    const itemId = e.target.id.replace("education", "");
    const educationCopy = [...education];
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
        <div class="editButtons">
          <button class="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button
            id={"education" + educationItem.id}
            class="save"
            onClick={onSave}
          >
            Save
          </button>
        </div>
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
