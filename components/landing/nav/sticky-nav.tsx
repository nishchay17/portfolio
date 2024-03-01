const ITEMS = ["Home", "Projects", "Blog", "Resume", "Contact"];

function StickyNav() {
  return (
    <nav className="select-none z-50 fixed bottom-5 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-8 py-4 rounded-[2rem] border-[0.5px] border-white/20">
      <ul className="flex gap-6 justify-center items-center">
        {ITEMS.map((it) => (
          <li
            key={it}
            className="hover:text-slate-300 transition cursor-pointer font-light"
          >
            {it}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default StickyNav;
