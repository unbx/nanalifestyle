import StudioHero from "@/components/studio/StudioHero";
import SurfaceIndex from "@/components/studio/SurfaceIndex";
import DoppleCaseStudy from "@/components/studio/DoppleCaseStudy";
import OpenPageCaseStudy from "@/components/studio/OpenPageCaseStudy";
import NanaCaseStudy from "@/components/studio/NanaCaseStudy";
import StudioFooter from "@/components/studio/StudioFooter";

export default function WorkPage() {
  return (
    <main>
      <StudioHero />
      <SurfaceIndex />
      <OpenPageCaseStudy index={1} />
      <DoppleCaseStudy index={2} />
      <NanaCaseStudy index={3} />
      <StudioFooter />
    </main>
  );
}
