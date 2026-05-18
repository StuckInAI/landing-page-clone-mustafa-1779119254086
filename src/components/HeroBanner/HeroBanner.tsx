import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* Left content */}
        <div className={styles.content}>
          <h1 className={styles.donateText}>Donate</h1>
          <button type="button" className={styles.ctaBtn}>
            Join us and help Gaza
          </button>
        </div>

        {/* Right illustration - dotted hands */}
        <div className={styles.illustration}>
          <div className={styles.handsWrapper}>
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.handsSvg}
              aria-hidden="true"
            >
              {/* Dotted/stipple art representation of cupped hands */}
              <defs>
                <radialGradient id="handGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#cccccc" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#cccccc" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Stipple dots forming hands shape */}
              <StippleHands />
              {/* Small pebble/seed in center */}
              <ellipse cx="245" cy="290" rx="18" ry="12" fill="#a8c5b5" opacity="0.8" transform="rotate(-20 245 290)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollBar}></div>
      </div>
    </section>
  );
}

function StippleHands() {
  const dots: { cx: number; cy: number; r: number }[] = [];

  // Generate a stipple pattern forming cupped hands shape
  const handPoints = [
    // Left palm
    ...generateDotCluster(160, 320, 90, 70, 400),
    // Right palm  
    ...generateDotCluster(340, 310, 90, 70, 400),
    // Left fingers
    ...generateDotCluster(130, 220, 40, 60, 150),
    ...generateDotCluster(160, 190, 35, 55, 130),
    ...generateDotCluster(195, 175, 35, 55, 130),
    ...generateDotCluster(230, 180, 35, 50, 120),
    // Right fingers
    ...generateDotCluster(340, 200, 40, 60, 150),
    ...generateDotCluster(370, 185, 35, 55, 130),
    ...generateDotCluster(310, 185, 35, 55, 130),
    ...generateDotCluster(280, 185, 35, 50, 120),
    // Wrists
    ...generateDotCluster(150, 400, 40, 30, 100),
    ...generateDotCluster(350, 395, 40, 30, 100),
  ];

  dots.push(...handPoints);

  return (
    <g opacity="0.6">
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="#888888" />
      ))}
    </g>
  );
}

function generateDotCluster(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  count: number
): { cx: number; cy: number; r: number }[] {
  const dots: { cx: number; cy: number; r: number }[] = [];
  // Use a seeded-like deterministic approach
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 * 7.3;
    const dist = Math.sqrt((i % 17) / 17);
    const x = cx + Math.cos(angle) * rx * dist;
    const y = cy + Math.sin(angle) * ry * dist;
    const r = 0.4 + ((i * 13) % 7) * 0.15;
    dots.push({ cx: x, cy: y, r });
  }
  return dots;
}
