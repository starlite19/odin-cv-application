import "../styles/Experience.css";

export default function Experience({
  role,
  company,
  start,
  end,
  present,
  description = "",
  setEditing,
}) {
  return (
    <div class="experience">
      <div class="left">
        <h3>
          {role} at {company}
        </h3>
        <div>
          {start} - {present ? "Present" : end}
        </div>
        <div class="description">{description}</div>
      </div>
      <div class="right">
        <img
          class="edit"
          src="../edit-button.svg"
          onClick={() => setEditing(true)}
        ></img>
      </div>
    </div>
  );
}
