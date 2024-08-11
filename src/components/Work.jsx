import "../styles/Work.css";
import WorkForm from "./WorkForm.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";

export default function Work({ workExperience, setWorkExperience }) {
  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [stillWorking, setStillWorking] = useState(false);

  function onAddWork() {
    const newWorkObject = {
      title: jobTitle,
      company: employer,
      startDate,
      endDate: stillWorking ? "Present" : endDate,
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
        <Experience
          role={w.title}
          company={w.company}
          start={w.startDate}
          end={w.endDate}
          description={w.jobDescription}
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
        Add Work Experience
      </button>
    </section>
  );
}
