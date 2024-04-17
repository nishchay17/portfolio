import { Button } from "@/components/ui/button";
import ResumeCard from "./resume-card";
import Link from "next/link";

function ResumeSection() {
  return (
    <section className="relative pt-[10vh] pb-[20vh] md:pt-[25vh] md:pb-[50vh] ">
      <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_60%_30%,#465bfa9a,transparent)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_40%_50%,#6533ee75,transparent)] -z-10" />
      <div className="flex flex-col gap-8 mx-6">
        <div className="relative mx-auto max-w-[400px] group">
          <ResumeCard className="transition-all duration-700 group-hover:-rotate-0 md:rotate-1" />
          <div
            className={
              "absolute inset-0 -z-10 bg-slate-100 rounded-lg shadow-lg" +
              " transition-all duration-500 md:group-hover:rotate-3 md:-rotate-3"
            }
          />
          <div
            className={
              "absolute inset-0 -z-20 bg-slate-200 rounded-lg" +
              " transition-all md:group-hover:rotate-1 md:-rotate-1"
            }
          />
        </div>
        <Button variant="cfa" className="mx-auto" asChild>
          <Link
            target="_blank"
            rel="noreferrer"
            href={process.env.NEXT_PUBLIC_RESUME ?? "#"}
          >
            Download My Resume
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default ResumeSection;
