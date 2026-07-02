export default function Services() {
  return (
    <section id="menu" style={styles.section}>
      <h2>Especialidades</h2>

      <div style={styles.grid}>
        {items.map((item) => (
          <div key={item} style={styles.card}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

const items = [
  "🦐 Camarones",
  "🐟 Pescados",
  "🐙 Pulpo",
  "🦀 Mariscada"
];

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    padding: "25px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
    cursor: "pointer"
  }
};