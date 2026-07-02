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
    fontSize: "44px",
    marginBottom: "20px",
    maxWidth: "800px",
    margin: "0 auto 20px auto",
    lineHeight: "1.4",          // Esto separa los renglones
    letterSpacing: "1.5px"      // Esto separa las letras
  },
  subtitle: {
    opacity: 0.8,
    marginBottom: "35px",
    fontSize: "20px",
    lineHeight: "1.6",          // Renglones más separados
    letterSpacing: "0.5px"      // Letras con más aire
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"                 // Más espacio entre los botones
  },
  primary: {
    padding: "14px 28px",
    background: "#FFCC00",
    border: "none",
    color: "black",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "8px",
    cursor: "pointer"
  },
  secondary: {
    padding: "14px 28px",
    background: "transparent",
    border: "2px solid #FFCC00",
    color: "#FFCC00",
    fontWeight: "bold",
    letterSpacing: "1px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};