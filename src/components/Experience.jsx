import "../styles/Experience.css";

export default function Experience({
  role,
  company,
  start,
  end,
  description = "",
}) {
  return (
    <div>
      <h3>
        {role} at {company}
      </h3>
      <div>
        {start} - {end}
      </div>
      <div>{description}</div>
    </div>
  );
}
