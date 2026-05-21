function Navbar() {
  return (
    <nav className="bg-navy fixed top-0 w-full px-8 py-4 flex justify-between items-center border-b-2 border-black z-50">
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', letterSpacing: '0.1em' }} className="text-cream">
        Liam Cassidy
      </span>
      <ul className="flex gap-8">
        <li><a href="#about" className="text-cream hover:text-thunder transition-colors">About</a></li>
        <li><a href="#projects" className="text-cream hover:text-thunder transition-colors">Projects</a></li>
        <li><a href="#skills" className="text-cream hover:text-thunder transition-colors">Skills</a></li>
        <li><a href="#contact" className="text-cream hover:text-thunder transition-colors">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar