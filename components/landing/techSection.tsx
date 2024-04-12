import TECH from "@/config/tech";
import { useNav } from "@/context/nav-context";
import { useIntersectionObserver } from "@/hooks/use-intersector";
import StaggerText from "@/ui/staggerText";

function Tech() {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: false,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav("Skills");
  }
  return (
    <section
      className="container px-6 py-20 md:py-0 md:px-12 min-h-screen flex lg:-mt-10"
      id="skills"
      ref={ref}
    >
      <div className="max-w-[1400px] m-auto">
        <StaggerText text="Skills" className="text-heading font-medium mb-10" />
        <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
          {TECH.map((it) => (
            <div
              className="border px-4 md:px-8 py-4 rounded-lg hover:border-white/20 hover:shadow-inner transition-all"
              key={it.id}
            >
              <p className="underline underline-offset-2 opacity-80 mb-2 select-none">
                {it.name}
              </p>
              <p className="text-para mb-1">
                {it.techs.map((it) => it).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;
