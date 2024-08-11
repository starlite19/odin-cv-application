export default function WorkForm({
  title,
  company,
  start,
  end,
  desc,
  present,
}) {
  return (
    <form id="form3">
      <div class="input-info">
        <label for="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          placeholder="Software Engineer"
          name="jobTitle"
          value={title.jobTitle}
          onChange={(e) => title.setJobTitle(e.target.value)}
        ></input>
      </div>

      <div class="input-info">
        <label for="employer">Employer:</label>
        <input
          type="text"
          id="employer"
          placeholder="XYZ Inc."
          name="employer"
          value={company.employer}
          onChange={(e) => company.setEmployer(e.target.value)}
        ></input>
      </div>

      <div class="dates">
        <div class="input-info">
          <label for="dateStartJob">Start Date:</label>
          <input
            type="date"
            id="dateStartJob"
            name="dateStart"
            value={start.startDate}
            onChange={(e) => start.setStartDate(e.target.value)}
          ></input>
        </div>

        <div class="input-info">
          <label for="dateEndJob">End Date:</label>
          <input
            type="date"
            id="dateEndJob"
            name="dateEnd"
            value={end.endDate}
            disabled={present.stillWorking}
            onChange={(e) => end.setEndDate(e.target.value)}
          ></input>
        </div>

        <div>
          <input
            type="checkbox"
            id="presentJob"
            checked={present.stillWorking}
            onClick={() => {
              present.setStillWorking((prev) => !prev);
              end.setEndDate("");
            }}
          ></input>
          <label for="presentJob">Still Working?</label>
        </div>
      </div>

      <div class="input-info">
        <label for="jobDescription">Description:</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          placeholder="Designed and developed websites, organized and analyzed data, etc"
          value={desc.jobDescription}
          onChange={(e) => desc.setJobDescription(e.target.value)}
        ></textarea>
      </div>
    </form>
  );
}
