import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  staticFile,
  Easing,
} from "remotion";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: inter } = loadInter();

// ─── CONSTANTS ───────────────────────────────
const BG = "#000";
const WHITE = "#fff";
const DIM = "rgba(255,255,255,0.35)";
const GRADIENT =
  "linear-gradient(135deg, #B8A4C9 0%, #E8B4A0 50%, #E8A4B8 100%)";
const cl = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

// ─── SLIDE ASSETS ────────────────────────────
const S = {
  velvet1: staticFile("slides/velvet-1.png"),
  velvet3: staticFile("slides/velvet-3.png"),
  editorial1: staticFile("slides/editorial-1.png"),
  editorial3: staticFile("slides/editorial-3.png"),
  brief1: staticFile("slides/brief-1.png"),
  brief2: staticFile("slides/brief-2.png"),
  atelier1: staticFile("slides/atelier-1.png"),
  atelier3: staticFile("slides/atelier-3.png"),
  bold1: staticFile("slides/bold-1.png"),
  bold3: staticFile("slides/bold-3.png"),
  redbull: staticFile("slides/redbull.png"),
  blend1: staticFile("slides/blend-1.png"),
  showcase1: staticFile("slides/showcase-1.png"),
  marketdata: staticFile("slides/marketdata.png"),
  campagne: staticFile("slides/campagne.png"),
  investimento: staticFile("slides/investimento.png"),
  yoga: staticFile("slides/yoga.png"),
  brandlaunch: staticFile("slides/brandlaunch.png"),
};
const LOGO = staticFile("logo/sliderun-logo.png");

// ─── Cross-dissolve helper ───
// Each scene fades in over first N frames, fades out over last N frames.
// Overlapping Sequences create smooth cross-dissolves.
const useSceneOpacity = (dur: number, fadeIn = 12, fadeOut = 12) => {
  const frame = useCurrentFrame();
  const fi = interpolate(frame, [0, fadeIn], [0, 1], cl);
  const fo = interpolate(frame, [dur - fadeOut, dur], [1, 0], cl);
  return Math.min(fi, fo);
};

// ════════════════════════════════════════════════
// SCENE 1: TEXT HOOK (0–80)
//
// Clean, minimal. Two lines on black:
// "Dall'idea al pitch deck."
// "In un prompt."
//
// Tells the WHOLE story in 2 lines.
// ════════════════════════════════════════════════
const TextHook: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = useSceneOpacity(80, 8, 14);

  // Line 1: subtle lift + fade in
  const l1Op = interpolate(frame, [8, 16], [0, 1], cl);
  const l1Y = interpolate(frame, [8, 16], [24, 0], {
    ...cl,
    easing: Easing.out(Easing.cubic),
  });

  // Line 2: appears 0.5s later
  const l2Op = interpolate(frame, [22, 30], [0, 1], cl);
  const l2Y = interpolate(frame, [22, 30], [24, 0], {
    ...cl,
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: BG,
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            opacity: l1Op,
            transform: `translateY(${l1Y}px)`,
            fontFamily: inter,
            fontSize: 72,
            fontWeight: 800,
            color: WHITE,
            letterSpacing: "-0.04em",
          }}
        >
          Dall'idea al pitch deck.
        </div>
        <div
          style={{
            opacity: l2Op,
            transform: `translateY(${l2Y}px)`,
            fontFamily: inter,
            fontSize: 56,
            fontWeight: 700,
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.03em",
          }}
        >
          In un prompt.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ════════════════════════════════════════════════
// SCENE 2: PRODUCT DEMO (68–310, 242 frames)
//
// Phase A (0-80):   Mock browser window + typing + mood pills + loading
// Phase B (80-82):  2-frame breath (black)
// Phase C (82-150): Result slide enters HUGE from right (1400×788)
// Phase D (150-210): Main slide shrinks left, 4 cascade from right
// Phase E (210-242): Grid holds, counter "47 secondi"
//
// Cross-dissolve in (first 12f) and out (last 12f).
// ════════════════════════════════════════════════
const ProductDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = useSceneOpacity(242, 12, 12);

  const phase =
    frame < 80
      ? "app"
      : frame < 82
        ? "gap"
        : frame < 150
          ? "result"
          : frame < 210
            ? "fanout"
            : "hold";

  // ─── Phase A: Browser window ───
  const winY = interpolate(frame, [0, 24], [80, 0], {
    ...cl,
    easing: Easing.out(Easing.cubic),
  });
  const winOp = interpolate(frame, [0, 16], [0, 1], cl);
  const winExit = interpolate(frame, [78, 80], [1, 0], cl);

  // Typing
  const promptText = "Pitch deck startup fintech Series A";
  const typed = Math.floor(interpolate(frame, [18, 58], [0, promptText.length], cl));
  const cursorOn = typed < promptText.length ? Math.floor(frame / 8) % 2 : 0;

  // Mood pills
  const pillsOp = interpolate(frame, [52, 58], [0, 1], cl);
  const pillActive = frame >= 60;

  // Loading bar
  const loadP = interpolate(frame, [60, 78], [0, 1], {
    ...cl,
    easing: Easing.inOut(Easing.quad),
  });

  // ─── Phase C: Result slide ───
  const slideEnterX = interpolate(frame, [82, 102], [1920, 260], {
    ...cl,
    easing: Easing.out(Easing.cubic),
  });

  // ─── Phase D: Fan-out ───
  const mainX = frame >= 150
    ? interpolate(frame, [150, 170], [260, -20], { ...cl, easing: Easing.inOut(Easing.quad) })
    : 260;
  const mainW = frame >= 150 ? interpolate(frame, [150, 170], [1400, 560], cl) : 1400;
  const mainH = frame >= 150 ? interpolate(frame, [150, 170], [788, 315], cl) : 788;
  const mainY = frame >= 150 ? interpolate(frame, [150, 170], [146, 100], cl) : 146;

  const fanSlides = [
    { src: S.brief1, delay: 158 },
    { src: S.velvet1, delay: 164 },
    { src: S.atelier1, delay: 170 },
    { src: S.bold3, delay: 176 },
  ];

  const counterOp = interpolate(frame, [210, 220], [0, 1], cl);

  const moods = [
    { label: "Bold", active: pillActive },
    { label: "Editorial", active: false },
    { label: "Vision", active: false },
  ];

  return (
    <AbsoluteFill style={{ background: BG, opacity }}>
      {/* ── Phase A: Mock browser window ── */}
      {phase === "app" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translateY(${winY}px)`,
            opacity: winOp * winExit,
          }}
        >
          <div
            style={{
              width: 1100,
              borderRadius: "14px 14px 12px 12px",
              overflow: "hidden",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                height: 40,
                background: "#1c1c1c",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: 8,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#ff5f57" }} />
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#febc2e" }} />
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#28c840" }} />
              <span
                style={{
                  margin: "0 auto",
                  fontFamily: inter,
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                sliderun.ai
              </span>
            </div>
            {/* Content */}
            <div
              style={{
                height: 460,
                background: "#0c0c0c",
                padding: "40px 48px",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {/* Prompt bar */}
              <div
                style={{
                  height: 56,
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 24px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="2"
                  style={{ marginRight: 14, flexShrink: 0 }}
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span
                  style={{
                    fontFamily: inter,
                    fontSize: 17,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {promptText.slice(0, typed)}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 2,
                    height: 22,
                    background: WHITE,
                    opacity: cursorOn,
                    marginLeft: 1,
                    borderRadius: 1,
                  }}
                />
              </div>

              {/* Mood pills */}
              <div style={{ display: "flex", gap: 10, opacity: pillsOp }}>
                {moods.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "8px 20px",
                      borderRadius: 20,
                      border: `1px solid ${m.active ? "rgba(184,164,201,0.6)" : "rgba(255,255,255,0.1)"}`,
                      background: m.active ? "rgba(184,164,201,0.12)" : "transparent",
                      fontFamily: inter,
                      fontSize: 14,
                      fontWeight: 500,
                      color: m.active ? "#D4B8E0" : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {m.label}
                  </div>
                ))}
              </div>

              {/* Loading bar */}
              {loadP > 0 && (
                <div
                  style={{
                    height: 3,
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 2,
                    marginTop: 12,
                  }}
                >
                  <div
                    style={{
                      width: `${loadP * 100}%`,
                      height: "100%",
                      background: GRADIENT,
                      borderRadius: 2,
                    }}
                  />
                </div>
              )}

              {/* Status text */}
              {loadP > 0.15 && (
                <div
                  style={{
                    fontFamily: inter,
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.2)",
                    marginTop: 30,
                    textAlign: "center",
                  }}
                >
                  {loadP < 1 ? "Generating slides..." : "Done!"}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Phase B: gap ── */}
      {phase === "gap" && null}

      {/* ── Phase C-E: Result slide + fan ── */}
      {(phase === "result" || phase === "fanout" || phase === "hold") && (
        <>
          {/* Main slide */}
          <div
            style={{
              position: "absolute",
              left: phase === "result" ? slideEnterX : mainX,
              top: phase === "result" ? 146 : mainY,
              width: phase === "result" ? 1400 : mainW,
              height: phase === "result" ? 788 : mainH,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow:
                "0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.05)",
              zIndex: 20,
            }}
          >
            <Img
              src={S.editorial1}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Fan slides */}
          {(phase === "fanout" || phase === "hold") &&
            fanSlides.map((fs, i) => {
              const p = interpolate(frame, [fs.delay, fs.delay + 16], [0, 1], {
                ...cl,
                easing: Easing.out(Easing.cubic),
              });
              const col = i % 2;
              const row = Math.floor(i / 2);
              const tx = 570 + col * 420;
              const ty = 100 + row * 340;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: tx + (1 - p) * 250,
                    top: ty + (1 - p) * 30,
                    width: 400,
                    height: 315,
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
                    opacity: p,
                    zIndex: 10 + i,
                  }}
                >
                  <Img
                    src={fs.src}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              );
            })}

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: counterOp,
            }}
          >
            <span
              style={{
                fontFamily: inter,
                fontSize: 22,
                fontWeight: 600,
                color: DIM,
                letterSpacing: "0.02em",
              }}
            >
              47 secondi
            </span>
          </div>
        </>
      )}
    </AbsoluteFill>
  );
};

// ════════════════════════════════════════════════
// SCENE 3: SLIDE SHOWCASE (298–460, 162 frames)
//
// Horizontal filmstrip of 8 slides scrolling slowly left.
// Each slide 680×383, with shadows and slight vertical wave.
// Shows VARIETY of what Derivant creates.
// Cross-dissolve in/out.
// ════════════════════════════════════════════════
const SlideShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = useSceneOpacity(162, 12, 12);

  const slides = [
    S.editorial1,
    S.brief1,
    S.velvet1,
    S.redbull,
    S.atelier1,
    S.bold3,
    S.blend1,
    S.marketdata,
  ];

  const SLIDE_W = 680;
  const SLIDE_H = 383;
  const GAP = 28;
  const STRIP_W = slides.length * (SLIDE_W + GAP);

  // Smooth scroll right → left
  const scrollX = interpolate(frame, [10, 152], [300, -(STRIP_W - 1920 + 200)], {
    ...cl,
    easing: Easing.inOut(Easing.quad),
  });

  // Slight vertical wave for each slide
  const waveOffsets = [0, 20, -15, 30, -10, 25, -20, 15];

  return (
    <AbsoluteFill style={{ background: BG, opacity, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: `translateY(-50%)`,
          display: "flex",
          gap: GAP,
          paddingLeft: scrollX,
        }}
      >
        {slides.map((src, i) => (
          <div
            key={i}
            style={{
              width: SLIDE_W,
              height: SLIDE_H,
              flexShrink: 0,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
              transform: `translateY(${waveOffsets[i]}px)`,
            }}
          >
            <Img
              src={src}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Subtle gradient overlays on edges to feel polished */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 120,
          height: "100%",
          background: "linear-gradient(90deg, #000 0%, transparent 100%)",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 120,
          height: "100%",
          background: "linear-gradient(270deg, #000 0%, transparent 100%)",
          zIndex: 10,
        }}
      />
    </AbsoluteFill>
  );
};

// ════════════════════════════════════════════════
// SCENE 4: TIME PAYOFF (448–568, 120 frames)
//
// The key value proposition: TIME SAVED.
// "47 secondi." — huge, gradient (the wow stat)
// "Non 8 ore." — smaller, dim (the contrast)
//
// Cross-dissolve in/out.
// ════════════════════════════════════════════════
const TimePayoff: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = useSceneOpacity(120, 12, 12);

  // "47 secondi." — main stat
  const statOp = interpolate(frame, [10, 18], [0, 1], cl);
  const statY = interpolate(frame, [10, 18], [30, 0], {
    ...cl,
    easing: Easing.out(Easing.cubic),
  });

  // "Non 8 ore." — contrast
  const contrastOp = interpolate(frame, [32, 40], [0, 1], cl);
  const contrastY = interpolate(frame, [32, 40], [20, 0], {
    ...cl,
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        background: BG,
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            opacity: statOp,
            transform: `translateY(${statY}px)`,
            fontFamily: inter,
            fontSize: 140,
            fontWeight: 800,
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          47 secondi.
        </div>
        <div
          style={{
            opacity: contrastOp,
            transform: `translateY(${contrastY}px)`,
            fontFamily: inter,
            fontSize: 48,
            fontWeight: 700,
            color: DIM,
            letterSpacing: "-0.03em",
          }}
        >
          Non 8 ore.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ════════════════════════════════════════════════
// SCENE 5: CLOSING CTA (556–660, 104 frames)
//
// Phase A (0-45):  "Provalo gratis." — gradient, large
// Phase B (45-104): Logo + sliderun.ai + fade to black
//
// Cross-dissolve in, fade to black at end.
// ════════════════════════════════════════════════
const ClosingCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 12], [0, 1], cl);
  const fadeOut = interpolate(frame, [90, 104], [1, 0], cl);
  const opacity = Math.min(fadeIn, fadeOut);

  const phase = frame < 45 ? "provalo" : "logo";

  // Provalo gratis
  const provOp = interpolate(frame, [6, 12], [0, 1], cl);
  const provY = interpolate(frame, [6, 12], [20, 0], {
    ...cl,
    easing: Easing.out(Easing.cubic),
  });

  // Logo
  const logoOp = interpolate(frame, [45, 52], [0, 1], cl);
  const urlOp = interpolate(frame, [58, 64], [0, 1], cl);

  return (
    <AbsoluteFill
      style={{
        background: BG,
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      {phase === "provalo" && (
        <div
          style={{
            opacity: provOp,
            transform: `translateY(${provY}px)`,
            fontFamily: inter,
            fontSize: 110,
            fontWeight: 800,
            background: GRADIENT,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.04em",
          }}
        >
          Provalo gratis.
        </div>
      )}

      {phase === "logo" && (
        <div
          style={{
            opacity: logoOp,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <Img
            src={LOGO}
            style={{ width: 400, objectFit: "contain" }}
          />
          <span style={{ opacity: urlOp, letterSpacing: "0.03em" }}>
            <span style={{ fontFamily: inter, fontSize: 24, fontWeight: 700, color: "#ffffff" }}>Slide</span>
            <span style={{ fontFamily: inter, fontSize: 24, fontWeight: 700, color: "#b0cfe0" }}>Run</span>
            <span style={{ fontFamily: inter, fontSize: 24, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>.ai</span>
          </span>
        </div>
      )}
    </AbsoluteFill>
  );
};

// ════════════════════════════════════════════════
// MAIN COMPOSITION — 22s @ 30fps = 660 frames
//
// Sequences OVERLAP by 12 frames → smooth cross-dissolves.
// Each scene handles its own fade-in/fade-out.
//
// Scene 1: Text Hook       0–80    "Dall'idea al pitch deck."
// Scene 2: Product Demo   68–310   Browser → result → fan-out
// Scene 3: Slide Showcase 298–460  Horizontal filmstrip scroll
// Scene 4: Time Payoff    448–568  "47 secondi. Non 8 ore."
// Scene 5: Closing CTA    556–660  "Provalo gratis." + logo
// ════════════════════════════════════════════════
export const DerivantPromo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BG }}>
      <Sequence from={0} durationInFrames={80}>
        <TextHook />
      </Sequence>
      <Sequence from={68} durationInFrames={242}>
        <ProductDemo />
      </Sequence>
      <Sequence from={298} durationInFrames={162}>
        <SlideShowcase />
      </Sequence>
      <Sequence from={448} durationInFrames={120}>
        <TimePayoff />
      </Sequence>
      <Sequence from={556} durationInFrames={104}>
        <ClosingCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
