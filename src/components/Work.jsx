import "../styles/Work.css";
import WorkForm from "./WorkForm.jsx";
import WorkItem from "./WorkItem.jsx";
import { useState } from "react";

const addWork = "Add Work Experience";
let nextId = 0;

export default function Work({ workExperience, setWorkExperience }) {
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [stillWorking, setStillWorking] = useState(false);

  function onAddWork() {
    const newWorkObject = {
      id: nextId++,
      title: jobTitle,
      company: employer,
      startDate,
      endDate: endDate,
      present: stillWorking,
      jobDescription,
    };
    setWorkExperience([...workExperience, newWorkObject]);
    setJobTitle("");
    setEmployer("");
    setStartDate("");
    setEndDate("");
    setJobDescription("");
    setStillWorking(false);
  }
  return (
    <section id="work">
      <h2>Work Experience</h2>
      {workExperience.map((w) => (
        <WorkItem
          workItem={w}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
      ))}
      <WorkForm
        title={{ jobTitle, setJobTitle }}
        company={{ employer, setEmployer }}
        start={{ startDate, setStartDate }}
        end={{ endDate, setEndDate }}
        desc={{ jobDescription, setJobDescription }}
        present={{ stillWorking, setStillWorking }}
      />
      <button type="button" onClick={onAddWork}>
        {addWork}
      </button>
    </section>
  );
}
