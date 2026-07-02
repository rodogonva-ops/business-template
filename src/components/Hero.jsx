import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" style={styles.hero}>
      <motion.img 
        src="/logo.png" 
        alt="Stampa Logo" 
        style={styles.logoImg}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.h1
        style={styles.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Lo que imagines lo plasmamos en <span style={{ color: "#FFCC00" }}>papel o tela</span>
      </motion.h1>

      <motion.p
        style={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Todo para tus eventos y negocio. Printing Service de alta calidad.
      </motion.p>

      <motion.div
        style={styles.buttons}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <button style={styles.primary}>Ver Trabajos</button>
        <button style={styles.secondary}>Cotizar Pedido</button>
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    padding: "80px 20px",
    textAlign: "center",
    background: "#111",
    color: "white"
  },
  logoImg: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px"
  },
  title: {
    fontSize: "42px",
    marginBottom: "15px",
    maxWidth: "800px",
    margin: "0 auto 15px auto"
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "30px",
    fontSize: "18px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },
  primary: {
    padding: "12px 25px",
    background: "#FFCC00",
    border: "none",
    color: "black",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer"
  },
  secondary: {
    padding: "12px 25px",
    background: "transparent",
    border: "2px solid #FFCC00",
    color: "#FFCC00",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer"
  }
};