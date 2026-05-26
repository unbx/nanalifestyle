import AiHero from "@/components/studio/ai/AiHero";
import AiBrief from "@/components/studio/ai/AiBrief";
import AiStackIndex from "@/components/studio/ai/AiStackIndex";
import FusedSection from "@/components/studio/ai/FusedSection";
import DoppelSection from "@/components/studio/ai/DoppelSection";
import OtherPageGrantSection from "@/components/studio/ai/OtherPageGrantSection";
import StudioFooter from "@/components/studio/StudioFooter";

export default function AiPage() {
  return (
    <main>
      <AiHero />
      <AiBrief />
      <AiStackIndex />
      <FusedSection index={1} />
      <DoppelSection index={2} />
      <OtherPageGrantSection index={3} />
      <StudioFooter />
    </main>
  );
}
