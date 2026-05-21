import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 px-16 md:px-32">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: .5 }}
      >
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', letterSpacing: '0.1em' }}className="font-bold text-2xl text-navy">Contact Me</h2>
      <p className="">I am currently open to pursuing any and all opportunites, feel free to reach out:</p>
      <div className="py-4 flex gap-4">
        <a className = "border border-gray-900 text-gray-900 hover:bg-parchment hover:text-black px-6 py-3 rounded-xl font-bold transition-colors" 
        href="mailto:lcassid413@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        <a className = "border border-gray-900 text-gray-900 hover:bg-parchment hover:text-black px-6 py-3 rounded-xl font-bold transition-colors" 
        href="https://github.com/liam-cassidy11" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className = "border border-gray-900 text-gray-900 hover:bg-parchment hover:text-black px-6 py-3 rounded-xl font-bold transition-colors"
        href="https://www.linkedin.com/in/liam-cassidy-486982250" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      </motion.div>
    </section>
  )
}

export default Contact