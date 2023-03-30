export default function Image({ id, color, urls, alt_description }) {
  return (
    <div
      id={id}
      style={{
        padding: "3rem",
        backgroundColor: color,
        border: "7px solid hlsa(0 0 0 0.2)",
      }}
    >
      <img
        src={urls.small}
        alt={alt_description}
        style={{ border: "7px solid hlsa(0 0 0 0.2)" }}
      />
    </div>
  );
}
