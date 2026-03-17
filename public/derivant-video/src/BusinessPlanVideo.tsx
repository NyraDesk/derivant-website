import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
  spring,
} from "remotion";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadSpaceGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

const { fontFamily: antonFont } = loadAnton();
const { fontFamily: spaceFont } = loadSpaceGrotesk();

// Colors
const BG = "#C9BFAE";
const DARK = "#2A2218";
const ORANGE = "#D4622B";
const TEXT = "#6B6155";
const DIM = "rgba(42,34,24,0.45)";
const CARD_BG = "rgba(42,34,24,0.07)";

// ── Scene 1: Cover ──
const CoverScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleY = interpolate(frame, [0, 1 * fps], [60, 0], {
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [0, 0.8 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const taglineOpacity = interpolate(frame, [0.6 * fps, 1.4 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame, [0.6 * fps, 1.4 * fps], [30, 0], {
    extrapolateRight: "clamp",
  });
  const subtitleOpacity = interpolate(frame, [1.2 * fps, 2 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const lineWidth = interpolate(frame, [1 * fps, 1.8 * fps], [0, 400], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        justifyContent: "center",
        padding: 100,
      }}
    >
      <div
        style={{
          fontFamily: antonFont,
          fontSize: 140,
          textTransform: "uppercase",
          lineHeight: 1.1,
          color: DARK,
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
        }}
      >
        <span style={{ color: "#ffffff" }}>SLIDE</span>
        <span style={{ color: "#b0cfe0" }}>RUN</span>
        <span style={{ color: "rgba(255,255,255,0.5)" }}>.AI</span>
      </div>

      <div
        style={{
          width: lineWidth,
          height: 4,
          backgroundColor: ORANGE,
          marginTop: 32,
          marginBottom: 32,
        }}
      />

      <div
        style={{
          fontFamily: antonFont,
          fontSize: 52,
          textTransform: "uppercase",
          lineHeight: 1.2,
          color: DARK,
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
        }}
      >
        L'AI Art Director per
        <br />
        presentazioni <span style={{ color: ORANGE }}>professionali</span>
      </div>

      <div
        style={{
          fontFamily: spaceFont,
          fontSize: 28,
          fontWeight: 500,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: TEXT,
          marginTop: 48,
          opacity: subtitleOpacity,
        }}
      >
        Business Plan 2026-2030
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 2: The Problem ──
const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 0.6 * fps], [40, 0], {
    extrapolateRight: "clamp",
  });

  const stats = [
    { num: "20", label: "ore/mese perse per risorsa", delay: 0.8 },
    { num: "40%", label: "del tempo senior in riformattazione", delay: 1.3 },
    { num: "70%", label: "delle medie imprese senza AI", delay: 1.8 },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        justifyContent: "center",
        padding: 100,
      }}
    >
      <div
        style={{
          fontFamily: spaceFont,
          fontSize: 18,
          fontWeight: 700,
          color: ORANGE,
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: titleOpacity,
          marginBottom: 16,
        }}
      >
        IL PROBLEMA
      </div>
      <div
        style={{
          fontFamily: antonFont,
          fontSize: 88,
          textTransform: "uppercase",
          lineHeight: 1.15,
          color: DARK,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          marginBottom: 56,
        }}
      >
        Le aziende
        <br />
        <span style={{ color: ORANGE }}>perdono</span>
        <br />
        tempo.
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {stats.map((stat, i) => {
          const statOpacity = interpolate(
            frame,
            [stat.delay * fps, (stat.delay + 0.5) * fps],
            [0, 1],
            { extrapolateRight: "clamp" }
          );
          const statX = interpolate(
            frame,
            [stat.delay * fps, (stat.delay + 0.5) * fps],
            [-40, 0],
            { extrapolateRight: "clamp" }
          );

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                opacity: statOpacity,
                transform: `translateX(${statX}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: antonFont,
                  fontSize: 64,
                  color: ORANGE,
                  minWidth: 180,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: spaceFont,
                  fontSize: 30,
                  color: TEXT,
                }}
              >
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 3: Market Opportunity ──
const MarketScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 0.6 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const bigNumScale = spring({
    frame: frame - 0.5 * fps,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.5 },
  });

  const arrowOpacity = interpolate(frame, [1.5 * fps, 2 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const targetScale = spring({
    frame: frame - 1.8 * fps,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.5 },
  });

  const cagrOpacity = interpolate(frame, [2.5 * fps, 3 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  const cardOpacity = interpolate(frame, [3 * fps, 3.5 * fps], [0, 1], {
    extrapolateRight: "clamp",
  });
  const cardY = interpolate(frame, [3 * fps, 3.5 * fps], [30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BG,
        justifyContent: "center",
        padding: 100,
      }}
    >
      <div
        style={{
          fontFamily: spaceFont,
          fontSize: 18,
          fontWeight: 700,
          color: ORANGE,
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: titleOpacity,
          marginBottom: 16,
        }}
      >
        OPPORTUNITA DI MERCATO
      </div>

      <div
        style={{
          fontFamily: antonFont,
          fontSize: 72,
          textTransform: "uppercase",
          lineHeight: 1.15,
          color: DARK,
          opacity: titleOpacity,
          marginBottom: 48,
        }}
      >
        AI Presentation
        <br />
        <span style={{ color: ORANGE }}>Generation</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            fontFamily: antonFont,
            fontSize: 120,
            color: DARK,
            transform: `scale(${bigNumScale})`,
          }}
        >
          $1.9<span style={{ fontSize: 60, color: TEXT }}>B</span>
        </div>
        <div
          style={{
            fontFamily: antonFont,
            fontSize: 60,
            color: ORANGE,
            opacity: arrowOpacity,
          }}
        >
          →
        </div>
        <div
          style={{
            fontFamily: antonFont,
            fontSize: 120,
            color: ORANGE,
            transform: `scale(${targetScale})`,
          }}
        >
          $4.8<span style={{ fontSize: 60, color: TEXT }}>B</span>
        </div>
      </div>

      <div
        style={{
          fontFamily: spaceFont,
          fontSize: 32,
          color: TEXT,
          opacity: cagrOpacity,
          marginBottom: 40,
        }}
      >
        <strong style={{ color: DARK, fontWeight: 700 }}>25.7% CAGR</strong>{" "}
        (2025-2029)
      </div>

      <div
        style={{
          display: "flex",
          background: CARD_BG,
          borderRadius: 14,
          overflow: "hidden",
          opacity: cardOpacity,
          transform: `translateY(${cardY}px)`,
        }}
      >
        <div
          style={{
            width: 5,
            backgroundColor: ORANGE,
            flexShrink: 0,
          }}
        />
        <div
          style={{
            padding: "28px 32px",
            fontFamily: spaceFont,
            fontSize: 28,
            color: TEXT,
            lineHeight: 1.4,
          }}
        >
          <strong style={{ color: DARK, fontWeight: 700 }}>
            Focus Italia:
          </strong>{" "}
          25K medie imprese, 70% senza AI.
          <br />
          SAM:{" "}
          <strong style={{ color: DARK, fontWeight: 700 }}>
            €84M
          </strong>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── Main Composition ──
export const BusinessPlanVideo: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={4 * fps}>
        <CoverScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: Math.round(0.5 * fps) })}
      />
      <TransitionSeries.Sequence durationInFrames={4 * fps}>
        <ProblemScene />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: Math.round(0.5 * fps) })}
      />
      <TransitionSeries.Sequence durationInFrames={5 * fps}>
        <MarketScene />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
