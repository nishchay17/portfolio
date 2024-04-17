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
      className="container px-6 pt-48 pb-24 md:px-12 flex flex-col"
      id="skills"
      ref={ref}
    >
      <StaggerText text="Skills" className="text-heading font-medium mb-10" />
      <div className="flex flex-col gap-4 md:gap-6 mb-10">
        {TECH.map((it) => (
          <div
            className="border-b py-4 hover:border-white/25 group transition-all"
            key={it.id}
          >
            <div className="h-7 overflow-hidden">
              <p className="opacity-90 mb-2 text-xl select-none -translate-y-14 group-hover:translate-y-0 transition-all duration-500">
                {it.name}
              </p>
              <p className="opacity-50 mb-2 text-xl select-none -translate-y-9 group-hover:translate-y-0 transition-all duration-500">
                {it.name}
              </p>
            </div>
            <p className="text-para group-hover:text-yellow-400 transition-all duration-500">
              {it.techs.map((it) => it).join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech;
