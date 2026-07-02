export default function Services() {
  return (
    <section id="servicios" style={styles.section}>
      <h2 style={styles.title}>Nuestros Trabajos</h2>
      <div style={styles.grid}>
        {items.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.img} alt={item.title} style={styles.image} />
            <h3 style={styles.cardTitle}>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

const items = [
  { title: "Playeras Amarillas", img: "/playeras1.png" },
  { title: "Diseño Tiburón", img: "/playeras2.png" },
  { title: "Back to School", img: "/stickers.png" },
  { title: "Más eventos", img: "/logo.png" },
  { title: "Tarjetas primera comunion", img: "/playeras4.png" },
  { title: "Diseño Cobra Kai", img: "/playeras5.png" },
  { title: "Dia de Muertos", img: "/playeras7.png" },
  { title: "Calendario escolar", img: "/playeras8.png" },
  { title: "Etiquetas personalizadas", img: "/playeras9.png" },
  { title: "Diseño Personalizado", img: "/playeras10.png" }
];

const styles = {
  section: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#0a0a0a",
    color: "white"
  },
  title: {
    color: "#FFCC00",
    fontSize: "36px",
    marginBottom: "50px",
    letterSpacing: "2px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    maxWidth: "1000px",
    margin: "0 auto"
  },
  card: {
    background: "#1a1a1a",
    borderRadius: "15px",
    overflow: "hidden",
    border: "1px solid #333"
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover"
  },
  cardTitle: {
    padding: "25px 20px",
    margin: 0,
    fontSize: "22px",
    letterSpacing: "0.5px"
  }
};