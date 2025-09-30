import { motion } from "framer-motion";

const variants = [
  { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 } },
  { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 } },
  { initial: { opacity: 0, x: -60 }, whileInView: { opacity: 1, x: 0 } },
  { initial: { opacity: 0, rotate: -10 }, whileInView: { opacity: 1, rotate: 0 } },
];

function getRandomVariant() {
  return variants[Math.floor(Math.random() * variants.length)];
}

export default function Section({ id, title, subtitle, children }) {
  const anim = getRandomVariant();
  return (
    <motion.section
      id={id}
      className="section"
      initial={anim.initial}
      whileInView={anim.whileInView}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p className="muted" style={{marginTop: -8, marginBottom: 16}}>{subtitle}</p>}
        {children}
      </div>
    </motion.section>
  );
}
