import { motion } from 'framer-motion'

const skills = {
  Languages: ["Java", "Python", "C/C++", "Rust", "SQL", "React"],
  Tools: ["Git", "GitHub", "Scrumboard", "MySQL"],
  Concepts: ["Object Oriented Programming", "Functional Programming", "Software Testing", "Version Control", "Agile Developement"],
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-24 px-16 md:px-32">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: .5 }}
      >
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', letterSpacing: '0.1em' }}className="font-bold text-2xl text-navy">Skills</h2>
      <div className="flex flex-col sm:flex-row gap-12">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mt-3 text-lg leading-relaxed">
            <h3 className="font-bold">{category}</h3>
            <ul className="text-lg leading-relaxed">
              {items.map((skill) => (
                <li key={skill} className="">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  )
}

export default Skills
