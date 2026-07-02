import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" style={styles.hero}>
      {/* TÍTULO ANIMADO */}
      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Mariscos frescos con sabor auténtico
      </motion.h1>

      {/* SUBTÍTULO ANIMADO */}
      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Calidad, frescura y experiencia en cada platillo
      </motion.p>

      {/* BOTONES ANIMADOS */}
      <motion.div
        style={styles.buttons}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button style={styles.primary}>Ver Menú</button>
        <button style={styles.secondary}>WhatsApp</button>
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    padding: "100px 20px",
    textAlign: "center"
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px"
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: "25px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  primary: {
    padding: "12px 22px",
    background: "#38bdf8",
    border: "none",
    color: "black",
    fontWeight: "bold",
    borderRadius: "10px",
    cursor: "pointer"
  },
  secondary: {
    padding: "12px 22px",
    background: "transparent",
    border: "1px solid #38bdf8",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer"
  }
};