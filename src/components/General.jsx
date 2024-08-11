import "../styles/General.css";

export default function General() {
  return (
    <section>
      <h2>General Information</h2>
      <form id="form1">
        <div class="fullName">
          <div class="input-info">
            <label for="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              placeholder="John"
              name="firstName"
            ></input>
          </div>

          <div class="input-info">
            <label for="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Smith"
              name="lastName"
            ></input>
          </div>
        </div>

        <div class="contact">
          <div class="input-info">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="john.smith@email.com"
              name="email"
            ></input>
          </div>

          <div class="input-info">
            <label for="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              placeholder="(222) 333-444"
              name="phone"
            ></input>
          </div>
        </div>
      </form>
    </section>
  );
}
