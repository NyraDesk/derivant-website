import { Composition } from "remotion";
import { DerivantPromo } from "./DerivantPromo";
import { DerivantVideo } from "./DerivantVideo";
import { BusinessPlanVideo } from "./BusinessPlanVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BusinessPlan"
        component={BusinessPlanVideo}
        durationInFrames={360}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DerivantPromo"
        component={DerivantPromo}
        durationInFrames={660}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DerivantVideo"
        component={DerivantVideo}
        durationInFrames={665}
        fps={30}
        width={1080}
        height={1350}
      />
      <Composition
        id="DerivantTikTok"
        component={DerivantVideo}
        durationInFrames={665}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="DerivantLinkedIn"
        component={DerivantVideo}
        durationInFrames={665}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
