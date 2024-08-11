import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Section from "./components/Section.jsx";
// import Input from "./components/Input.jsx";
import General from "./components/General.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";
import "./styles/index.css";

// const generalInformation = "General Information";
// const educationalExperience = "Educational Experience";
// const practicalExperience = "Practical Experience";
const generateResume = "Generate Resume";

// const generalLabels = [
//   { name: "First Name", type: "text", placeholder: "John" },
//   { name: "Last Name", type: "text", placeholder: "Smith" },
//   { name: "Email", type: "email", placeholder: "example@gmail.com" },
//   { name: "Phone Number", type: "tel", placeholder: "123-456-7890" },
// ];

// const educationLabels = [
//   { name: "School Name", type: "text", placeholder: "York University" },
//   { name: "Title of Study", type: "text", placeholder: "Chemistry" },
//   { name: "Start Date", type: "date", placeholder: "2019-09-07" },
//   { name: "End Date", type: "date", placeholder: "2019-09-07" },
// ];

// const experienceLabels = [
//   { name: "Company Name", type: "text", placeholder: "Apple Inc" },
//   { name: "Position Title", type: "text", placeholder: "Senior Manager" },
//   {
//     name: "Main Responsibilities",
//     type: "text",
//     placeholder: "Manage people, organize data",
//   },
//   { name: "Start Date", type: "date", placeholder: "2023-01-05" },
//   { name: "End Date", type: "date", placeholder: "2024-04-09" },
// ];

// general information section: name, email, phone number
// education section: school name, title of study, date of study
// practical experience: company name, position title, responsibilities, date start, date end
// edit and submit button for each section/whole cv
// submit button submits form and displays the value pf the input fields
// edit button add backs the input fields with prev values filled in
// can edit and resubmit content
// lots of useState and props

function onAddEducation() {}
function onAddWork() {}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <General />
    <Education />
    <Work />
    <div class="submitInfo">
      <button id="generateResume" type="submit">
        {generateResume}
      </button>
    </div>
  </StrictMode>
);
