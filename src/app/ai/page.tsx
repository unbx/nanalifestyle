import AiHero from "@/components/studio/ai/AiHero";
import AiBrief from "@/components/studio/ai/AiBrief";
import AiStackIndex from "@/components/studio/ai/AiStackIndex";
import FusedSection from "@/components/studio/ai/FusedSection";
import OpenPageOverviewSection from "@/components/studio/ai/OpenPageOverviewSection";
import OtherPageGrantSection from "@/components/studio/ai/OtherPageGrantSection";
import StudioFooter from "@/components/studio/StudioFooter";

export default function AiPage() {
  return (
    <main>
      <AiHero />
      <AiBrief />
      <AiStackIndex />
      <FusedSection index={1} />
      <OpenPageOverviewSection index={2} />
      <OtherPageGrantSection index={3} />
      <StudioFooter />
    </main>
  );
}
