const ITEMS = [
  { name: "Home", selector: "#home" },
  { name: "Projects", selector: "#projects" },
  { name: "Skills", selector: "#skills" },
  { name: "Blog", selector: "#blog" },
  { name: "Resume", selector: "#resume" },
  { name: "Contact", selector: "#contact" },
];

function StickyNav() {
  return (
    <nav className="select-none z-50 fixed bottom-5 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-8 py-4 rounded-[2rem] border-[0.5px] border-white/20">
      <ul className="flex gap-6 justify-center items-center">
        {ITEMS.map((it) => (
          <li
            key={it.name}
            onClick={() =>
              document
                ?.querySelector(it.selector)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hover:text-slate-300 transition cursor-pointer font-light"
          >
            {it.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default StickyNav;
