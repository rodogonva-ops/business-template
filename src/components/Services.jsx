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
  { title: "Playeras Personalizadas", img: "/playeras1.jpg" },
  { title: "Diseños para Eventos", img: "/playeras2.jpg" },
  { title: "Stickers y Papelería", img: "/stickers.jpg" }
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
    fontSize: "32px",
    marginBottom: "40px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
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
    padding: "20px",
    margin: 0,
    fontSize: "20px"
  }
};