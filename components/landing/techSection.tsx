import TECH from "@/config/tech";
import StaggerText from "@/ui/staggerText";

function Tech() {
  return (
    <section className="container px-12 h-screen flex -mt-10">
      <div className="max-w-[1400px] m-auto" id="skills">
        <StaggerText text="Skills" className="text-heading font-medium mb-20" />
        <div className="flex flex-wrap gap-6">
          {TECH.map((it) => (
            <div
              className="border px-8 py-6 rounded-lg hover:border-white/20 hover:shadow-inner transition-all"
              key={it.id}
            >
              <h3 className="underline underline-offset-2 opacity-80 mb-2 select-none">
                {it.name}
              </h3>
              <p className="text-para">{it.techs.map((it) => it).join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;
