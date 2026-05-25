import { motion } from 'framer-motion'

const projects = [
  { title: "ToDoulette", description: "Productivity app that helps people lessen their mental load by deciding which task to do next using randomness and engaging games, and encourage them with rewards", tech: [" react, ", "php"], github: "https://github.com/cse442-software-engineering-ub/s26-team-balala", demo: "https://www.youtube.com/watch?v=JX20BtHSuMQ" },
  { title: "AI email sorter", description: "Python AI email sorter and summarizer. This application sorts emails using the users' preferences and gives an AI summary of the emails that the user has received.", tech: [" python", ], github: "https://github.com/liam-cassidy11/CSE368-project", demo: "https://youtu.be/7T3xekdD6u4" },
]

function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24 px-16 md:px-32">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: .5 }}
      >
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', letterSpacing: '0.1em' }}className="font-bold text-2xl text-navy">Projects</h2>
      <div className="">
        {projects.map((project) => (
          <div key={project.title} className="">
            <h3 className="text-xl font leading-relaxed mt-6">{project.title}</h3>
            <p className="text-lg leading-relaxed mt-3">{project.description}</p>
            <div className="text-lg leading-relaxed mt-3">
                Tech stack:
              {project.tech.map((t) => (
                <span key={t} className="">{t}</span>
              ))}
            </div>
            <div className="text-lg leading-relaxed mt-3 flex gap-4">
              <a className = "text-gray-900 hover:bg-parchment hover:text-black px-6 py-3 rounded-xl font-bold transition-colors border border-gray-900" href={project.github} target="_blank" rel="noopener noreferrer">GitHub </a>
              <a className = "text-gray-900 hover:bg-parchment hover:text-black px-6 py-3 rounded-xl font-bold transition-colors border border-gray-900" href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  )
}

export default Projects
