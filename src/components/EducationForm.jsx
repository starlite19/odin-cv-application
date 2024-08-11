export default function EducationForm() {
  return (
    <form id="form2">
      <div class="input-info">
        <label for="school">School Name:</label>
        <input
          type="text"
          id="school"
          placeholder="University of Toronto"
          name="school"
        ></input>
      </div>

      <div class="input-info">
        <label for="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          placeholder="BASc Software Engineering"
          name="degree"
        ></input>
      </div>

      <div class="dates">
        <div class="input-info">
          <label for="dateStartEducation">Start Date:</label>
          <input type="date" id="dateStartEducation" name="dateStart"></input>
        </div>

        <div class="input-info">
          <label for="dateEndEducation">End Date:</label>
          <input type="date" id="dateEndEducation" name="dateEnd"></input>
        </div>
      </div>
    </form>
  );
}
