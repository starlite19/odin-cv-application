import { useState } from "react";
import EducationForm from "./EducationForm.jsx";
import Experience from "./Experience.jsx";

export default function EducationItem({ education }) {
  const [editing, setEditing] = useState(false);
  function handleEditing() {
    setEditing(true);
  }

  function handleSave() {}
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
        <button>Save</button>
        <button>Cancel</button>
      </>
    );
  }
}
