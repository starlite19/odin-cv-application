export default function EducationForm({ school, degree, start, end, present }) {
  return (
    <form id="form2">
      <div class="input-info">
        <label for="school">School Name:</label>
        <input
          type="text"
          id="school"
          placeholder="University of Toronto"
          name="school"
          value={school.schoolName}
          onChange={(e) => school.setSchoolName(e.target.value)}
        ></input>
      </div>

      <div class="input-info">
        <label for="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          placeholder="BASc Software Engineering"
          name="degree"
          value={degree.name}
          onChange={(e) => degree.setDegree(e.target.value)}
        ></input>
      </div>

      <div class="dates">
        <div class="input-info">
          <label for="dateStartEducation">Start Date:</label>
          <input
            type="date"
            id="dateStartEducation"
            name="dateStart"
            value={start.startDate}
            onChange={(e) => start.setStartDate(e.target.value)}
          ></input>
        </div>

        <div class="input-info">
          <label for="dateEndEducation">End Date:</label>
          <input
            type="date"
            id="dateEndEducation"
            name="dateEnd"
            value={end.endDate}
            disabled={present.stillAttending}
            onChange={(e) => end.setEndDate(e.target.value)}
          ></input>
        </div>

        <div>
          <input
            type="checkbox"
            id="presentEducation"
            checked={present.stillAttending}
            onClick={() => {
              present.setStillAttending((prev) => !prev);
              end.setEndDate("");
            }}
          ></input>
          <label for="presentEducation">Still Attending?</label>
        </div>
      </div>
    </form>
  );
}
