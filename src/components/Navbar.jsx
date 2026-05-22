import { useState } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-navy fixed top-0 w-full px-8 py-4 flex justify-between items-center border-b-2 border-black z-50">
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', letterSpacing: '0.1em' }} className="text-cream">
        Liam Cassidy
      </span>
      <ul className="hidden sm:flex gap-8">
        <li><a href="#about" className="text-cream hover:text-thunder transition-colors">About</a></li>
        <li><a href="#projects" className="text-cream hover:text-thunder transition-colors">Projects</a></li>
        <li><a href="#skills" className="text-cream hover:text-thunder transition-colors">Skills</a></li>
        <li><a href="#contact" className="text-cream hover:text-thunder transition-colors">Contact</a></li>
      </ul>

      {/*HAMBURGER MOBILE ONLY */}
      <button
        className="sm:hidden text-cream flex flex-col gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`block w-6 h-0.5 bg-cream transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-cream transition-all ${isOpen ? 'opacity-0' : ''}`}/>
        <span className={`block w-6 h-0.5 bg-cream transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="sm:hidden absolute top-full left-0 w-full bg-navy border-b-2 border-black flex flex-col items-center gap-6 py-6">
          <li><a href="#about" onClick={() => setIsOpen(false)} className="text-cream hover:text-thunder transition-colors">About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="text-cream hover:text-thunder transition-colors">Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} className="text-cream hover:text-thunder transition-colors">Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} className="text-cream hover:text-thunder transition-colors">Contact</a></li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar
