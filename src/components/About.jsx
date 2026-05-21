import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 px-16 md:px-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: .5 }}
      >
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', letterSpacing: '0.1em' }}className="font-bold text-2xl text-navy">About Me</h2>
      <div className="">
        <p className="text-lg leading-relaxed mt-6">I recently graduated from University at Buffalo with a B.S. in Computer Science and am actively looking for opportunities in software development or related tech fields. Throughout my time at UB I built a strong foundation in algorithms, data structures, object-oriented and functional programming, and software engineering working across languages including Java, Python, C, React and more. </p>
        <p className="text-lg leading-relaxed mt-6">  I've applied these skills across a range of team and individual projects, from building this personal portfolio website to teaming up with a group of four and implementing a gamified productivity app using agile development in my final semester. </p>
        <p className="text-lg leading-relaxed mt-6">  Outside of academics I have competed as a co-captain on basketball and cross-country teams which has shaped the way I approach teamwork and leadership. I am passionate about solving real problems through software and am eager to bring that drive into a professional environment.</p>
      </div>
      </motion.div>
    </section>
  )
}

export default About