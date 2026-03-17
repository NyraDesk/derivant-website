import {
  AbsoluteFill,
  Img,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  spring,
  staticFile,
} from "remotion";

const BG = "#000000";
const WHITE = "#FFFFFF";
const cl = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

// Scene 2 carousel — solo 4 slide originali
const slides = [
  staticFile("slides/strategic.png"),
  staticFile("slides/ai-integration.png"),
  staticFile("slides/vertex.png"),
  staticFile("slides/gomarket.png"),
];

// Scene 5 — 6 slide in griglia 2x3
const allSlides = [
  staticFile("slides/ai-integration.png"),
  staticFile("slides/priorita.png"),
  staticFile("slides/chisiamo.png"),
  staticFile("slides/strategic.png"),
  staticFile("slides/agenda.png"),
  staticFile("slides/investimenti.png"),
  staticFile("slides/vendite.png"),
];

// ── SCENA 1: "Trasforma i tuoi brief..." + pausa nera ──
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();
  const vOff = height >= 1350 ? (height - 1350) / 2 : 0;

  const text = "Trasforma i tuoi brief...";
  const endFrame = Math.ceil(text.length * 1.7);
  const typed = Math.floor(
    interpolate(frame, [0, endFrame], [0, text.length], cl)
  );
  const cursorOp = frame % 15 < 8 ? 1 : 0;
  const fadeOut = interpolate(frame, [44, 53], [1, 0], cl);

  return (
    <AbsoluteFill style={{ backgroundColor: BG, opacity: fadeOut }}>
      <div style={{ position: "absolute", top: 80 + vOff, left: 60, right: 60 }}>
        <div
          style={{
            fontSize: 86,
            fontWeight: 900,
            color: WHITE,
            fontFamily: "Arial, sans-serif",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          {text.slice(0, typed)}
          <span
            style={{
              display: "inline-block",
              width: 4,
              height: 72,
              backgroundColor: WHITE,
              opacity: cursorOp,
              marginLeft: 3,
              verticalAlign: "text-bottom",
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENA 2: Slide una alla volta con zoom-in + testo typing ──
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();
  const vOff = height >= 1350 ? (height - 1350) / 2 : 0;

  // Ogni slide dura 24 frame (~0.8s), con 6 frame di crossfade
  const SLIDE_DURATION = 24;
  const CARD_W = 960;
  const CARD_H = 540;
  const CARD_X = (1080 - CARD_W) / 2;
  const CARD_Y = 420 + vOff;

  // Testo typing — parte subito
  const text = "...in un deck che guida la decisione.";
  const textStart = 10;
  const textEnd = textStart + Math.ceil(text.length * 1.5);
  const typed = Math.floor(
    interpolate(frame, [textStart, textEnd], [0, text.length], cl)
  );
  const cursorOp = frame % 15 < 8 ? 1 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {/* Slide carousel — una alla volta con zoom */}
      {slides.map((src, i) => {
        const slideStart = i * SLIDE_DURATION;
        const localFrame = frame - slideStart;

        // Entrata: scale da 0.85 a 1.0 + opacity
        const enterProgress = spring({
          frame: localFrame,
          fps,
          config: { damping: 14, stiffness: 100 },
        });

        // Uscita: fade out negli ultimi 6 frame della slide
        const exitFrame = SLIDE_DURATION - 6;
        const exitOpacity = i < slides.length - 1
          ? interpolate(localFrame, [exitFrame, SLIDE_DURATION], [1, 0], cl)
          : 1;

        // Slow zoom continuo (ti porta "dentro" la slide)
        const zoom = interpolate(
          localFrame,
          [0, SLIDE_DURATION],
          [1.0, 1.06],
          cl
        );

        const scale = interpolate(enterProgress, [0, 1], [0.85, 1], cl) * zoom;
        const opacity = enterProgress * exitOpacity;

        // Non renderizzare slide troppo lontane
        if (localFrame < -10 || localFrame > SLIDE_DURATION + 10) return null;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: CARD_X,
              top: CARD_Y,
              width: CARD_W,
              height: CARD_H,
              borderRadius: 16,
              overflow: "hidden",
              transform: `scale(${scale})`,
              opacity,
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
              zIndex: i,
            }}
          >
            <Img
              src={src}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        );
      })}

      {/* Testo sopra */}
      {frame >= textStart && (
        <div style={{ position: "absolute", top: 80 + vOff, left: 60, right: 60, zIndex: 10 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 900,
              color: WHITE,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {text.slice(0, typed)}
            <span
              style={{
                display: "inline-block",
                width: 4,
                height: 72,
                backgroundColor: WHITE,
                opacity: cursorOp,
                marginLeft: 3,
                verticalAlign: "text-bottom",
              }}
            />
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

// ── SCENA 3: Chat + Web Research — stile Apple ──
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();
  const vOff = height >= 1350 ? (height - 1350) / 2 : 0;

  // Input bar appare subito + prompt typing
  const inputStart = 5;
  const inputOpacity = interpolate(frame, [inputStart, inputStart + 12], [0, 1], cl);
  const inputY = interpolate(frame, [inputStart, inputStart + 12], [30, 0], cl);

  const prompt = "Create an investor pitch deck for a biotech startup";
  const typingStart = 12;
  const typingEnd = typingStart + Math.ceil(prompt.length * 1.2);
  const promptTyped = Math.floor(
    interpolate(frame, [typingStart, typingEnd], [0, prompt.length], cl)
  );
  const cursorOp = frame % 15 < 8 ? 1 : 0;

  // FASE 2: Web Research + fonti appaiono (frame 70+)
  const researchStart = 70;
  const researchOpacity = interpolate(frame, [researchStart, researchStart + 15], [0, 1], cl);

  const sourceNames = [
    "statista.com",
    "mckinsey.com",
    "grandviewresearch.com",
    "nature.com",
    "iqvia.com",
    "pitchbook.com",
    "crunchbase.com",
    "fiercepharma.com",
  ];


  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>

      {/* Glass pill "Web Research attiva." */}
      {frame >= researchStart - 5 && (() => {
        const pillOpacity = interpolate(frame, [researchStart - 5, researchStart + 10], [0, 1], cl);
        const pillY = interpolate(frame, [researchStart - 5, researchStart + 10], [20, 0], cl);
        // Rotazione del gradiente sul bordo
        const angle = ((frame - researchStart) * 4) % 360;
        const glowPulse = 0.2 + Math.sin((frame - researchStart) * 0.1) * 0.1;
        const BORDER = 2;

        return (
          <div
            style={{
              position: "absolute",
              top: 120 + vOff,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              opacity: pillOpacity,
              transform: `translateY(${pillY}px)`,
            }}
          >
            {/* Outer — rotating gradient border */}
            <div
              style={{
                borderRadius: 24,
                padding: BORDER,
                background: `conic-gradient(from ${angle}deg, #e8845a, #d4654a, rgba(232,132,90,0.1), rgba(255,255,255,0.05), rgba(232,132,90,0.1), #d4654a, #e8845a)`,
                boxShadow: `0 0 50px rgba(232,132,90,${glowPulse}), 0 0 100px rgba(232,132,90,${glowPulse * 0.5})`,
              }}
            >
              {/* Inner — pill contenuto */}
              <div
                style={{
                  backgroundColor: "rgba(15,15,20,0.95)",
                  borderRadius: 22,
                  padding: "32px 60px",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <span
                  style={{
                    fontSize: 52,
                    fontWeight: 800,
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "-0.02em",
                    color: WHITE,
                  }}
                >
                  Web Research{" "}
                </span>
                <span
                  style={{
                    fontSize: 52,
                    fontWeight: 800,
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "-0.02em",
                    color: "#e8845a",
                  }}
                >
                  attiva.
                </span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Input bar — bianca, pulita, centrata */}
      {frame >= inputStart && (
        <div
          style={{
            position: "absolute",
            top: 340 + vOff,
            left: 60,
            right: 60,
            opacity: inputOpacity,
            transform: `translateY(${inputY}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: WHITE,
              borderRadius: 18,
              padding: "30px 36px",
              boxShadow: "0 8px 40px rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                fontSize: 34,
                color: "#111",
                fontFamily: "Arial, sans-serif",
                fontWeight: 500,
                minHeight: 42,
              }}
            >
              {prompt.slice(0, promptTyped)}
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: 32,
                  backgroundColor: "#111",
                  opacity: cursorOp,
                  marginLeft: 2,
                  verticalAlign: "text-bottom",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Web Research — card con query che scendono in sequenza */}
      {frame >= researchStart && (() => {
        const queries = [
          { query: "biotech startup investor landscape 2026", sources: "pitchbook.com, crunchbase.com" },
          { query: "biotech market size growth projections", sources: "grandviewresearch.com, statista.com" },
          { query: "biotech venture capital trends analysis", sources: "nature.com, fiercepharma.com" },
          { query: "biotech IPO performance strategic insig...", sources: "reuters.com, mckinsey.com" },
        ];

        const fadeIn = interpolate(frame, [researchStart, researchStart + 12], [0, 1], cl);

        return (
          <div
            style={{
              position: "absolute",
              top: 480 + vOff,
              left: 60,
              right: 60,
              opacity: fadeIn,
            }}
          >
            {/* Card container */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "28px 32px",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: 24 }}>
                <span
                  style={{
                    fontSize: 24,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Web research · <span style={{ color: "rgba(255,255,255,0.8)" }}>8 sources</span>
                </span>
              </div>

              {/* Query rows — appaiono in sequenza */}
              {queries.map((q, i) => {
                const rowDelay = researchStart + 10 + i * 12;
                const p = spring({
                  frame: frame - rowDelay,
                  fps,
                  config: { damping: 16, stiffness: 100 },
                });

                if (frame < rowDelay - 3) return null;

                return (
                  <div
                    key={i}
                    style={{
                      marginBottom: i < queries.length - 1 ? 20 : 0,
                      opacity: p,
                      transform: `translateY(${(1 - p) * 20}px)`,
                    }}
                  >
                    {/* Query line */}
                    <div style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
                      <span
                        style={{
                          fontSize: 18,
                          color: "rgba(255,255,255,0.35)",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          backgroundColor: "rgba(255,255,255,0.06)",
                          padding: "4px 12px",
                          borderRadius: 6,
                          marginRight: 14,
                          letterSpacing: "0.03em",
                        }}
                      >
                        Query
                      </span>
                      <span
                        style={{
                          fontSize: 22,
                          color: "rgba(255,255,255,0.85)",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {q.query}
                      </span>
                    </div>
                    {/* Source line */}
                    <div style={{ display: "flex", alignItems: "center", paddingLeft: 0 }}>
                      <span
                        style={{
                          fontSize: 18,
                          color: "rgba(255,255,255,0.25)",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 600,
                          backgroundColor: "rgba(255,255,255,0.04)",
                          padding: "4px 12px",
                          borderRadius: 6,
                          marginRight: 14,
                          letterSpacing: "0.03em",
                        }}
                      >
                        Source
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          color: "rgba(255,255,255,0.4)",
                          fontFamily: "Arial, sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {q.sources}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

    </AbsoluteFill>
  );
};

// ── SCENA 4: "Generate" typing + bottone con linea contorno ──
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const text = "Generate.";
  const typingEnd = Math.ceil(text.length * 2);
  const typed = Math.floor(
    interpolate(frame, [5, 5 + typingEnd], [0, text.length], cl)
  );
  const cursorOp = frame % 15 < 8 ? 1 : 0;

  // Colori caldi per ogni lettera
  const warmColors = [
    "#ffffff",
    "#f5e6d3",
    "#ecc9a0",
    "#e8a96e",
    "#e8845a",
    "#d4654a",
    "#c44e38",
    "#e8845a",
    "#d4654a",
  ];

  // I colori appaiono dopo il typing
  const colorRevealStart = 5 + typingEnd + 8;

  // Linea contorno bottone — appare dopo i colori
  const borderStart = colorRevealStart + 20;
  const borderP = spring({
    frame: frame - borderStart,
    fps,
    config: { damping: 14, stiffness: 80 },
  });

  // Press animation dopo la linea
  const pressStart = borderStart + 25;
  const pressScale = frame >= pressStart
    ? interpolate(frame, [pressStart, pressStart + 4, pressStart + 12], [1, 0.94, 1], cl)
    : 1;

  // Light sweep veloce dentro il testo
  const sweepStart = pressStart + 14;
  const sweepX = interpolate(frame, [sweepStart, sweepStart + 8], [-200, 1200], cl);
  const sweepOpacity = frame >= sweepStart && frame <= sweepStart + 10 ? 1 : 0;

  // ZOOM-IN potente dentro la scritta (dopo sweep)
  const zoomStart = sweepStart + 6;
  const zoomScale = interpolate(frame, [zoomStart, zoomStart + 14], [1, 20], {
    ...cl,
    easing: (t: number) => t * t, // accelerazione esponenziale
  });
  const zoomOpacity = interpolate(frame, [zoomStart + 4, zoomStart + 14], [1, 0], cl);

  return (
    <AbsoluteFill style={{ backgroundColor: BG, opacity: zoomOpacity }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            transform: `scale(${pressScale * zoomScale})`,
          }}
        >
          {/* Bordo/linea bottone */}
          <div
            style={{
              position: "absolute",
              top: -28,
              left: -48,
              right: -48,
              bottom: -28,
              borderRadius: 24,
              border: "2px solid rgba(232,132,90,0.5)",
              opacity: borderP,
              boxShadow: frame >= pressStart
                ? "0 0 30px rgba(232,132,90,0.2)"
                : "none",
            }}
          />

          {/* Light sweep */}
          {sweepOpacity > 0 && (
            <div
              style={{
                position: "absolute",
                top: -10,
                bottom: -10,
                width: 120,
                left: sweepX,
                background: "linear-gradient(90deg, transparent, rgba(232,132,90,0.6), rgba(255,255,255,0.8), rgba(232,132,90,0.6), transparent)",
                zIndex: 10,
                filter: "blur(8px)",
              }}
            />
          )}

          {/* Testo */}
          <div
            style={{
              fontSize: 130,
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              overflow: "hidden",
            }}
          >
            {text.slice(0, typed).split("").map((char, i) => {
              const charColorProgress = interpolate(
                frame,
                [colorRevealStart + i * 3, colorRevealStart + i * 3 + 8],
                [0, 1],
                cl
              );
              const color = charColorProgress > 0 ? warmColors[i] || "#e8845a" : WHITE;
              return (
                <span key={i} style={{ color }}>
                  {char}
                </span>
              );
            })}
            {frame < borderStart && (
              <span
                style={{
                  display: "inline-block",
                  width: 5,
                  height: 100,
                  backgroundColor: WHITE,
                  opacity: cursorOp,
                  marginLeft: 4,
                  verticalAlign: "text-bottom",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── SCENA 5: Slide in griglia 2 colonne — entrano dai lati ──
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, height } = useVideoConfig();
  const vOff = height >= 1350 ? (height - 1350) / 2 : 0;

  // Griglia 2 colonne sfalsate — card grandi
  const PADDING = 40;
  const GAP = 16;
  const CARD_W = (1080 - PADDING * 2 - GAP) / 2;
  const CARD_H = CARD_W * 9 / 16;
  const ROW_GAP = CARD_H + GAP;

  // Colonna destra sfalsata in basso di mezzo card
  const OFFSET_Y = CARD_H / 2 + 8;
  const COL_LEFT_TOP = 80 + vOff;
  const COL_RIGHT_TOP = COL_LEFT_TOP + OFFSET_Y;

  // Posizioni sfalsate: sx parte più in alto, dx sfalsata in basso
  const getSlidePos = (i: number) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const baseY = col === 0 ? COL_LEFT_TOP : COL_RIGHT_TOP;
    return {
      x: PADDING + col * (CARD_W + GAP),
      y: baseY + row * ROW_GAP,
    };
  };

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      {/* Slide grid sfalsate — entrano dai lati, escono dopo */}
      {allSlides.map((src, i) => {
        // Entrata
        const delay = 8 + i * 5;
        const sp = spring({
          frame: frame - delay,
          fps,
          config: { damping: 16, stiffness: 70 },
        });

        // Uscita (frame 90+)
        const exitStart = 90 + i * 3;
        const exitP = spring({
          frame: frame - exitStart,
          fps,
          config: { damping: 14, stiffness: 80 },
        });

        const pos = getSlidePos(i);
        const col = i % 2;
        const slideFrom = col === 0 ? -600 : 600;

        // Entrata: da fuori → posizione / Uscita: posizione → fuori
        const enterX = interpolate(sp, [0, 1], [slideFrom, 0], cl);
        const exitX = interpolate(exitP, [0, 1], [0, slideFrom], cl);
        const translateX = frame < exitStart ? enterX : exitX;

        const opacity = frame < exitStart ? sp : 1 - exitP;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: CARD_W,
              height: CARD_H,
              borderRadius: 12,
              overflow: "hidden",
              opacity,
              transform: `translateX(${translateX}px)`,
              boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            }}
          >
            <Img
              src={src}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ── SCENA 6: Tagline + derivant.ai ──
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Tagline fade in
  const tagP = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  // "derivant.ai" appare dopo
  const brandP = spring({
    frame: frame - 40,
    fps,
    config: { damping: 14, stiffness: 70 },
  });

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 50,
        }}
      >
        {/* Tagline — sopra, grande */}
        <div
          style={{
            opacity: tagP,
            transform: `translateY(${(1 - tagP) * 30}px)`,
            textAlign: "center",
            marginBottom: 60,
          }}
        >
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "-0.03em",
              lineHeight: 1.25,
            }}
          >
            Presenta meglio.
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "Arial, sans-serif",
              letterSpacing: "-0.03em",
              lineHeight: 1.25,
            }}
          >
            Più velocemente.
          </div>
        </div>

        {/* derivant.ai — sotto */}
        <div
          style={{
            opacity: brandP,
            transform: `translateY(${(1 - brandP) * 20}px)`,
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              letterSpacing: "-0.03em",
              color: WHITE,
            }}
          >
            Slide
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              letterSpacing: "-0.03em",
              color: "#b0cfe0",
            }}
          >
            Run
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              fontFamily: "Arial, sans-serif",
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            .ai
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── MAIN ──
export const DerivantVideo: React.FC = () => {
  const { width, height } = useVideoConfig();
  const hOff = width > 1080 ? (width - 1080) / 2 : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <div
        style={{
          position: "absolute",
          left: hOff,
          top: 0,
          width: Math.min(width, 1080),
          height,
          overflow: "hidden",
        }}
      >
        <Sequence from={0} durationInFrames={54}>
          <Scene1 />
        </Sequence>
        <Sequence from={54} durationInFrames={115}>
          <Scene2 />
        </Sequence>
        <Sequence from={169} durationInFrames={150}>
          <Scene3 />
        </Sequence>
        <Sequence from={319} durationInFrames={105}>
          <Scene4 />
        </Sequence>
        <Sequence from={424} durationInFrames={121}>
          <Scene5 />
        </Sequence>
        <Sequence from={545} durationInFrames={120}>
          <Scene6 />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
