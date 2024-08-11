export default function Section({ name, children }) {
  return (
    <section>
      <h2>{name}</h2>
      <form>
        {children}
        {name !== "General Information" && (
          <button form={name}>Add {name}</button>
        )}
      </form>
    </section>
  );
}
