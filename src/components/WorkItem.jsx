import { useState } from "react";
import WorkForm from "./WorkForm.jsx";
import Experience from "./Experience.jsx";
import "../styles/Item.css";

export default function WorkItem({
  workItem,
  workExperience,
  setWorkExperience,
}) {
  const [editing, setEditing] = useState(false);
  const [jobTitle, setJobTitle] = useState(workItem.title);
  const [employer, setEmployer] = useState(workItem.company);
  const [startDate, setStartDate] = useState(workItem.startDate);
  const [endDate, setEndDate] = useState(workItem.endDate);
  const [jobDescription, setJobDescription] = useState(workItem.jobDescription);
  const [stillWorking, setStillWorking] = useState(workItem.present);

  function onSave(e) {
    const itemId = e.target.id.replace("work", "");
    const workCopy = [...workExperience];
    workCopy[itemId] = {
      id: itemId,
      title: jobTitle,
      company: employer,
      startDate,
      endDate: endDate,
      present: stillWorking,
      jobDescription,
    };
    setWorkExperience(workCopy);
    setEditing(false);
  }

  function onCancel() {
    setEditing(false);
    setJobTitle(workItem.title);
    setEmployer(workItem.company);
    setStartDate(workItem.startDate);
    setEndDate(workItem.endDate);
    setJobDescription(workItem.jobDescription);
    setStillWorking(workItem.present);
  }

  if (editing) {
    return (
      <>
        <WorkForm
          title={{ jobTitle, setJobTitle }}
          company={{ employer, setEmployer }}
          start={{ startDate, setStartDate }}
          end={{ endDate, setEndDate }}
          desc={{ jobDescription, setJobDescription }}
          present={{ stillWorking, setStillWorking }}
        />
        <div class="editButtons">
          <button class="cancel" onClick={onCancel}>
            Cancel
          </button>
          <button id={"work" + workItem.id} class="save" onClick={onSave}>
            Save
          </button>
        </div>
      </>
    );
  } else {
    return (
      <Experience
        role={workItem.title}
        company={workItem.company}
        start={workItem.startDate}
        end={workItem.endDate}
        present={workItem.present}
        setEditing={setEditing}
        description={workItem.jobDescription}
      />
    );
  }
}
