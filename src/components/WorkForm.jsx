export default function WorkForm() {
  return (
    <form id="form3">
      <div class="input-info">
        <label for="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          placeholder="Software Engineer"
          name="jobTitle"
        ></input>
      </div>

      <div class="input-info">
        <label for="employer">Employer:</label>
        <input
          type="text"
          id="employer"
          placeholder="XYZ Inc."
          name="employer"
        ></input>
      </div>

      <div class="dates">
        <div class="input-info">
          <label for="dateStartJob">Start Date:</label>
          <input type="date" id="dateStartJob" name="dateStart"></input>
        </div>

        <div class="input-info">
          <label for="dateEndJob">End Date:</label>
          <input type="date" id="dateEndJob" name="dateEnd"></input>
        </div>
      </div>

      <div class="input-info">
        <label for="jobDescription">Description:</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          placeholder="Designed and developed websites, organized and analyzed data, etc"
        ></textarea>
      </div>
    </form>
  );
}
