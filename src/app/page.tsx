"use client";

import { useEffect, useMemo, useState } from "react";

export default function Home() {
  useEffect(() => {
    // Load Three.js from CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
      initHeroScene();
    };
    document.head.appendChild(script);

    // Init scroll effects immediately
    initScrollEffects();

    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <Head />
      <Lightbox />
      <Navigation />
      <HeroSection />
      <CreativeSection />
      <ProductSection />
      <ExperienceSection />
      <ContactSection />
      <SiteScripts />
    </>
  );
}

/* ============================================================
   HEAD — fonts + inline styles
   ============================================================ */
function Head() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
:root {
  --pink: #f0a0c0; --amber: #e8c878; --green: #a8e0b0;
  --blue: #88c8e8; --purple: #c0a0e0;
  --black: #0a0a0a; --dark: #111; --card: #1a1a1a;
  --border: #2a2a2a; --text: #e0e0e0; --muted: #888;
}
* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; background:var(--black); color:var(--text); }
body { font-family:'Inter',system-ui,sans-serif; overflow-x:hidden; }
body::after {
  content:''; position:fixed; top:-50%; left:-50%; right:-50%; bottom:-50%;
  width:200%; height:200%; pointer-events:none; z-index:9999; opacity:0.4;
  background:transparent url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E") repeat;
  animation:grain 8s steps(10) infinite;
}
@keyframes grain {
  0%,100%{transform:translate(0,0)} 10%{transform:translate(-5%,-10%)}
  20%{transform:translate(-15%,5%)} 30%{transform:translate(7%,-25%)}
  40%{transform:translate(-5%,25%)} 50%{transform:translate(-15%,10%)}
  60%{transform:translate(15%,0%)} 70%{transform:translate(0%,15%)}
  80%{transform:translate(3%,35%)} 90%{transform:translate(-10%,10%)}
}
.font-display { font-family:'Space Grotesk',system-ui,sans-serif; }
.font-mono { font-family:'JetBrains Mono',monospace; }
.holo-text {
  background:linear-gradient(135deg,var(--amber),var(--pink),var(--purple),var(--blue),var(--green));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}
.section-divider { height:1px; background:linear-gradient(90deg,transparent 0%,var(--purple) 20%,var(--pink) 50%,var(--amber) 80%,transparent 100%); opacity:0.4; }
.scanlines::before {
  content:''; position:absolute; top:0;left:0;right:0;bottom:0;
  background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px);
  pointer-events:none; z-index:10;
}
@keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
@keyframes glow { 0%{filter:brightness(1) drop-shadow(0 0 10px rgba(240,160,192,0.3))} 100%{filter:brightness(1.1) drop-shadow(0 0 20px rgba(136,200,232,0.5))} }
@keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
.animate-fade-up { animation:fadeUp 0.8s ease-out forwards; opacity:0; }
.delay-1 { animation-delay:0.3s; } .delay-2 { animation-delay:0.6s; }
.delay-3 { animation-delay:0.9s; } .delay-4 { animation-delay:1.2s; }
.reveal { opacity:0; transform:translateY(30px); transition:all 0.7s ease-out; }
.reveal.visible { opacity:1; transform:translateY(0); }
.parallax-shape { position:absolute; border-radius:50%; pointer-events:none; will-change:transform; filter:blur(60px); opacity:0; transition:opacity 1.5s ease; }
.parallax-shape.visible { opacity:1; }
nav { position:fixed; top:0; left:0; right:0; z-index:50; transition:all 0.5s; }
nav.scrolled { background:rgba(10,10,10,0.8); backdrop-filter:blur(20px); border-bottom:1px solid rgba(42,42,42,0.5); }
nav a { text-decoration:none; }
.nav-inner { max-width:1200px; margin:0 auto; padding:16px 24px; display:flex; align-items:center; justify-content:space-between; }
.nav-links { display:flex; gap:32px; }
.nav-link { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); transition:color 0.3s; cursor:pointer; }
.nav-link:hover,.nav-link.active { color:white; }
#hero { position:relative; min-height:100vh; display:flex; align-items:center; justify-content:center; overflow:hidden; background:var(--black); }
#hero-canvas { position:absolute; inset:0; z-index:0; display:block; }
.hero-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,rgba(10,10,10,0.4),transparent,var(--black)); z-index:1; }
.hero-content { position:relative; z-index:2; text-align:center; padding:0 24px; max-width:960px; }
.hero-logo { width:280px; max-width:80vw; margin:0 auto 32px; filter:invert(1); animation:glow 3s ease-in-out infinite alternate; }
.hero-subtitle { font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:0.3em; text-transform:uppercase; color:var(--muted); margin-bottom:24px; }
.hero-title { font-family:'Space Grotesk',system-ui,sans-serif; font-size:clamp(24px,5vw,48px); font-weight:300; letter-spacing:-0.02em; margin-bottom:32px; line-height:1.3; }
.hero-desc { color:var(--muted); font-size:14px; max-width:560px; margin:0 auto; line-height:1.8; }
.scroll-indicator { position:absolute; bottom:48px; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:8px; animation:float 2s ease-in-out infinite; }
.scroll-indicator span { font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.3em; text-transform:uppercase; color:rgba(136,136,136,0.5); }
.scroll-line { width:1px; height:32px; background:linear-gradient(to bottom,rgba(136,136,136,0.5),transparent); }
section { position:relative; padding:128px 0; overflow:hidden; }
.section-inner { max-width:1100px; margin:0 auto; padding:0 24px; position:relative; z-index:5; }
.section-label { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.4em; text-transform:uppercase; margin-bottom:12px; }
.section-title { font-family:'Space Grotesk',system-ui,sans-serif; font-size:clamp(32px,6vw,60px); font-weight:700; letter-spacing:-0.02em; margin-bottom:16px; }
.section-subtitle { font-family:'Space Grotesk',system-ui,sans-serif; font-size:clamp(16px,2vw,20px); color:var(--muted); font-weight:300; }
.card { border:1px solid rgba(42,42,42,0.3); border-radius:12px; padding:32px 40px; background:rgba(26,26,26,0.2); backdrop-filter:blur(4px); transition:all 0.5s; }
.card:hover { border-color:rgba(136,200,232,0.2); }
.stat-card { border:1px solid rgba(42,42,42,0.5); border-radius:12px; padding:24px; text-align:center; background:rgba(26,26,26,0.3); }
.stat-value { font-family:'Space Grotesk',system-ui,sans-serif; font-size:clamp(28px,4vw,40px); font-weight:700; margin-bottom:8px; }
.stat-label { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.2em; text-transform:uppercase; color:var(--muted); }
.release-card { border:1px solid rgba(42,42,42,0.3); border-radius:12px; overflow:hidden; transition:all 0.5s; position:relative; }
.release-card:hover { border-color:rgba(232,200,120,0.3); transform:translateY(-4px); box-shadow:0 16px 60px rgba(0,0,0,0.55); }
.release-art { aspect-ratio:1; background:linear-gradient(135deg,var(--card),var(--dark)); display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
.release-art img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.6s ease, filter 0.35s ease; filter:brightness(0.78) saturate(0.9); }
.release-card:hover .release-art img { transform:scale(1.05); filter:brightness(0.9) saturate(1); }
.release-overlay { position:absolute; bottom:0; left:0; right:0; padding:16px; opacity:0; transform:translateY(6px); transition:opacity 0.3s ease, transform 0.3s ease; background:linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0) 100%); z-index:2; pointer-events:none; }
.release-card:hover .release-overlay { opacity:1; transform:translateY(0); pointer-events:auto; }
.release-badge { position:absolute; top:10px; left:10px; padding:4px 8px; border-radius:999px; background:rgba(0,0,0,0.55); border:1px solid rgba(255,255,255,0.12); font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.78); opacity:0; transition:opacity 0.3s ease; z-index:3; }
.release-card:hover .release-badge { opacity:1; }
.release-info { padding:16px; }
.pill { display:inline-block; padding:8px 16px; border:1px solid rgba(42,42,42,0.4); border-radius:999px; font-family:'JetBrains Mono',monospace; font-size:11px; color:rgba(224,224,224,0.7); transition:all 0.3s; margin:4px; }
.pill:hover { border-color:rgba(232,200,120,0.4); color:var(--amber); }
.product-link { display:block; border:1px solid rgba(42,42,42,0.2); border-radius:12px; padding:20px; background:rgba(10,10,10,0.4); transition:all 0.3s; text-decoration:none; color:inherit; }
.product-link:hover { border-color:rgba(136,200,232,0.3); background:rgba(26,26,26,0.3); }
.timeline { position:relative; padding-left:64px; }
.timeline::before { content:''; position:absolute; left:0; top:0; bottom:0; width:1px; background:linear-gradient(to bottom,rgba(192,160,224,0.3),rgba(192,160,224,0.1),transparent); }
.timeline-dot { position:absolute; left:-64px; top:8px; width:8px; height:8px; transform:translateX(-3.5px); border-radius:50%; background:rgba(192,160,224,0.6); box-shadow:0 0 0 4px var(--black); }
.timeline-item { position:relative; margin-bottom:64px; }
.timeline-item:last-child { margin-bottom:0; }
.highlight { display:flex; align-items:flex-start; gap:12px; margin-bottom:12px; }
.highlight-dot { width:4px; height:4px; border-radius:50%; flex-shrink:0; margin-top:8px; }
.highlight-text { color:rgba(224,224,224,0.6); font-size:14px; line-height:1.7; }
.contact-btn { display:inline-block; padding:12px 32px; border:1px solid rgba(42,42,42,0.5); border-radius:999px; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--text); text-decoration:none; transition:all 0.3s; }
.contact-btn:hover { border-color:rgba(240,160,192,0.5); color:var(--pink); }
.social-link {
  display:inline-flex; align-items:center; justify-content:center;
  width:36px; height:36px;
  border:1px solid rgba(42,42,42,0.35);
  border-radius:999px;
  color:var(--muted);
  text-decoration:none;
  transition:color 0.3s, border-color 0.3s, background 0.3s;
}
.social-link:hover { color:white; border-color:rgba(255,255,255,0.22); background:rgba(255,255,255,0.03); }
.social-link:focus-visible { outline:2px solid rgba(136,200,232,0.55); outline-offset:3px; }
.social-link svg { width:18px; height:18px; display:block; }
.social-link .x-glyph { font-family:system-ui,-apple-system,'Inter',sans-serif; font-size:16px; line-height:1; font-weight:700; }
.grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:24px; }
.grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
.grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; }
@media(max-width:768px) {
  .grid-2,.grid-3,.grid-4 { grid-template-columns:1fr; }
  .nav-links { display:none; }
  .timeline { padding-left:32px; }
  .timeline::before { left:0; }
  .timeline-dot { left:0; }
  .video-grid { grid-template-columns:1fr !important; }
  .two-col { grid-template-columns:1fr !important; }
}
@media(max-width:1024px) and (min-width:769px) {
  .video-grid { grid-template-columns:repeat(2,1fr) !important; }
}
.rec-indicator { position:absolute; top:32px; right:32px; font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.15em; z-index:10; }
.rec-dot { display:inline-block; width:6px; height:6px; background:rgba(255,50,50,0.6); border-radius:50%; margin-left:4px; animation:pulse 2s infinite; }
@keyframes pulse { 0%,100%{opacity:0.6} 50%{opacity:0.2} }
.bg-video-wrapper { position:absolute; top:0; left:0; right:0; bottom:0; overflow:hidden; z-index:0; }
.bg-video-wrapper iframe { position:absolute; top:50%; left:50%; width:180%; height:180%; transform:translate(-50%,-50%); pointer-events:none; opacity:0.15; filter:grayscale(40%) blur(1px); }
.bg-video-overlay { position:absolute; inset:0; background:linear-gradient(to bottom, var(--black) 0%, rgba(10,10,10,0.65) 12%, rgba(13,10,8,0.5) 50%, rgba(10,10,10,0.65) 88%, var(--black) 100%); z-index:1; }
.video-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.video-card { position:relative; border-radius:8px; overflow:hidden; cursor:pointer; border:1px solid rgba(42,42,42,0.2); transition:all 0.4s cubic-bezier(0.25,0.46,0.45,0.94); background:var(--card); }
.video-card:hover { border-color:rgba(232,200,120,0.4); transform:translateY(-4px); box-shadow:0 12px 40px rgba(0,0,0,0.5); }
.video-thumb { position:relative; aspect-ratio:16/9; overflow:hidden; }
.video-thumb img { width:100%; height:100%; object-fit:cover; transition:transform 0.6s ease,filter 0.4s ease; filter:brightness(0.7) saturate(0.8); }
.video-card:hover .video-thumb img { transform:scale(1.05); filter:brightness(0.85) saturate(1); }
.play-btn { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) scale(0.9); width:48px; height:48px; background:rgba(255,255,255,0.12); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; transition:all 0.3s ease; opacity:0; }
.video-card:hover .play-btn { opacity:1; transform:translate(-50%,-50%) scale(1); }
.play-btn svg { width:18px; height:18px; fill:white; margin-left:2px; }
.video-duration { position:absolute; bottom:8px; right:8px; background:rgba(0,0,0,0.7); padding:2px 6px; border-radius:4px; font-family:'JetBrains Mono',monospace; font-size:10px; color:rgba(255,255,255,0.8); letter-spacing:0.05em; }
.video-info { padding:12px 14px 14px; }
.video-title { font-family:'Space Grotesk',system-ui,sans-serif; font-size:13px; font-weight:500; color:rgba(255,255,255,0.9); margin-bottom:6px; line-height:1.3; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.video-meta { display:flex; align-items:center; gap:8px; }
.video-role { font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(232,200,120,0.6); }
.video-views { font-family:'JetBrains Mono',monospace; font-size:9px; color:var(--muted); letter-spacing:0.05em; }
.video-meta-dot { width:2px; height:2px; border-radius:50%; background:rgba(136,136,136,0.4); }
.media-toolbar { display:flex; align-items:flex-end; justify-content:space-between; gap:16px; margin:8px 0 24px; flex-wrap:wrap; }
.media-toolbar h3 { font-family:'Space Grotesk',system-ui,sans-serif; font-size:14px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(232,200,120,0.75); }
.media-count { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:0.15em; color:rgba(136,136,136,0.7); margin-top:8px; }
.chips { display:flex; gap:10px; flex-wrap:wrap; }
.chip { appearance:none; background:rgba(10,10,10,0.35); border:1px solid rgba(42,42,42,0.35); color:rgba(224,224,224,0.65); border-radius:999px; padding:8px 12px; font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.18em; text-transform:uppercase; cursor:pointer; transition:all 0.25s ease; }
.chip:hover { border-color:rgba(232,200,120,0.35); color:white; }
.chip.active { border-color:rgba(232,200,120,0.55); color:rgba(255,255,255,0.95); background:rgba(232,200,120,0.08); }
.media-grid { display:grid; grid-template-columns:repeat(12,1fr); gap:16px; }
.media-tile { grid-column:span 4; width:100%; padding:0; text-align:left; background:rgba(10,10,10,0.4); border:1px solid rgba(42,42,42,0.25); border-radius:14px; overflow:hidden; cursor:pointer; transition:transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease; color:inherit; position:relative; }
.media-tile:hover { transform:translateY(-4px); border-color:rgba(232,200,120,0.35); background:rgba(26,26,26,0.35); box-shadow:0 16px 60px rgba(0,0,0,0.55); }
.media-tile:focus-visible { outline:2px solid rgba(136,200,232,0.55); outline-offset:3px; }
.media-thumb { position:relative; aspect-ratio:4/3; overflow:hidden; background:black; }
.media-thumb img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.6s ease, filter 0.35s ease; filter:brightness(0.78) saturate(0.9); }
.media-tile:hover .media-thumb img { transform:scale(1.05); filter:brightness(0.9) saturate(1); }
.media-gradient { position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 100%); opacity:0.95; }
.media-badge { position:absolute; top:10px; left:10px; padding:4px 8px; border-radius:999px; background:rgba(0,0,0,0.55); border:1px solid rgba(255,255,255,0.12); font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.78); opacity:0; transition:opacity 0.3s ease; z-index:3; }
.media-tile:hover .media-badge { opacity:1; }
.media-duration { position:absolute; top:10px; right:10px; padding:3px 6px; border-radius:6px; background:rgba(0,0,0,0.65); font-family:'JetBrains Mono',monospace; font-size:10px; color:rgba(255,255,255,0.8); letter-spacing:0.06em; opacity:0; transition:opacity 0.3s ease; z-index:3; }
.media-tile:hover .media-duration { opacity:1; }
.media-meta { position:absolute; bottom:0; left:0; right:0; padding:14px 14px 16px; opacity:0; transform:translateY(6px); transition:opacity 0.3s ease, transform 0.3s ease; background:linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0) 100%); pointer-events:none; z-index:2; }
.media-tile:hover .media-meta { opacity:1; transform:translateY(0); pointer-events:auto; }
.media-title { font-family:'Space Grotesk',system-ui,sans-serif; font-size:14px; font-weight:600; color:rgba(255,255,255,0.9); margin-bottom:6px; letter-spacing:-0.01em; }
.media-sub { font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(232,200,120,0.6); }
.media-note { font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:0.12em; color:rgba(136,136,136,0.65); margin-top:10px; }
@media(max-width:1024px) and (min-width:769px) { .media-tile { grid-column:span 6; } }
@media(max-width:768px) { .media-tile { grid-column:span 12; } }
.lightbox-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.92); z-index:10000; display:flex; align-items:center; justify-content:center; opacity:0; pointer-events:none; transition:opacity 0.3s ease; backdrop-filter:blur(12px); }
.lightbox-overlay.active { opacity:1; pointer-events:all; }
.lightbox-content { width:90%; max-width:960px; aspect-ratio:16/9; position:relative; transform:scale(0.95); transition:transform 0.3s ease; }
.lightbox-overlay.active .lightbox-content { transform:scale(1); }
.lightbox-content iframe { width:100%; height:100%; border:none; border-radius:8px; }
.lightbox-content img { width:100%; height:100%; border:none; border-radius:8px; object-fit:contain; background:black; display:none; }
.lightbox-content video { width:100%; height:100%; border:none; border-radius:8px; object-fit:contain; background:black; display:none; }
.lightbox-close { position:absolute; top:-48px; right:0; width:36px; height:36px; background:none; border:1px solid rgba(255,255,255,0.15); border-radius:50%; color:white; font-size:18px; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.3s; }
.lightbox-close:hover { border-color:rgba(255,255,255,0.4); background:rgba(255,255,255,0.05); }
.lightbox-title { position:absolute; bottom:-40px; left:0; font-family:'Space Grotesk',system-ui,sans-serif; font-size:14px; color:rgba(255,255,255,0.6); }
::-webkit-scrollbar { width:6px; }
::-webkit-scrollbar-track { background:var(--black); }
::-webkit-scrollbar-thumb { background:#333; border-radius:3px; }
          `,
        }}
      />
    </>
  );
}

/* ============================================================
   NANA SVG LOGO (reusable)
   ============================================================ */
const NanaLogo = ({ className = "", width = 32 }: { className?: string; width?: number }) => (
  <svg width={width} viewBox="0 0 488.37 437.66" fill="white" className={className}>
    <path d="M347.71,211.52c5.41-13.69,10.45-27.55,16.34-41.03,7.32-16.77,14.77-33.52,23.19-49.75,11.28-21.76,23.61-42.97,35.32-64.5,7.36-13.52,14.89-27.11,26.43-37.38,8.2-7.3,18.16-12.63,27.33-18.84l1.9,1.16c0,3.9.54,7.89-.09,11.68-3.77,22.87-12.55,44.13-22.89,64.6-12.15,24.04-26.1,47.16-38.29,71.19-9.49,18.7-18.02,37.93-25.98,57.33-9.77,23.83-18.44,48.11-27.67,72.17-6.38,16.64-12.82,33.25-19.39,49.82-2.67,6.73-5.39,13.48-8.73,19.88-2.5,4.8-6.01,4.83-9.2.12-5.3-7.83-10.83-15.52-15.91-23.49-1.32-2.07-1.86-4.96-1.87-7.48-.09-31.88-.15-63.76.14-95.63.06-6.59,1.71-13.15,2.44-19.75.21-1.85-.22-3.77-.46-7.18-31.16,54.48-61.47,107.5-91.91,160.72-9.22-7.09-9.61-7.53-5.54-17.01,15.06-35.07,30.06-70.17,45.69-104.99,6.96-15.49,15.63-30.21,23.07-45.5,10.54-21.64,20.75-43.44,30.91-65.26,1.94-4.18,3.17-8.73,4.4-13.2,2.39-8.63,9.87-10.77,16.87-13.55,1.87-.74,3.84-1.69,5.77-1.7,3.09,0,6.61-.11,9.17,1.28,4.86,2.65,9.25,6.23,7.91,13.01-.52,2.63-.81,5.31-1.1,7.97-1.65,14.84-3.32,29.68-4.87,44.53-1.03,9.8-1.79,19.64-2.83,29.44-.58,5.51-1.55,10.97-2.2,16.47-.17,1.45.18,2.96.3,4.44.58.14,1.17.29,1.75.43Z" />
    <path d="M88.64,188.18c-28.15,50.48-56.3,100.96-84.54,151.39-.37.65-1.97.61-3.76,1.11-1.52-8.42,2.49-15.11,5.38-21.65,16.98-38.56,34.23-77.01,51.65-115.37,12.48-27.47,25.01-54.92,38.3-82,4.22-8.61,10.51-16.13,9.39-26.54-.08-.72.71-1.58,1.2-2.31,3.28-4.84,18.73-10.1,24.21-8.27,8.27,2.77,12.07,12.43,8.6,21.72-.7,1.86-1.46,3.78-1.69,5.72-1.8,15.46-3.38,30.94-5.24,46.39-1.47,12.17-3.16,24.31-4.93,36.44-.37,2.53-1.52,4.94-.92,7.96,7.78-13.26,15.56-26.53,23.35-39.79,8.7-14.81,17.52-29.56,26.09-44.45,5.84-10.14,11.33-20.49,17.02-30.73,5.15-9.27,10.27-18.56,15.56-27.75,5.61-9.75,10.99-19.67,17.26-28.99,6.09-9.04,12.75-17.81,20.02-25.92,4.49-5,19.9-5.9,24.98-2.81,4.39,2.67,6.73,10.64,4.28,16.79-4.79,12.06-9.28,24.31-15.19,35.82-4.43,8.63-11.3,15.97-16.36,24.32-8.91,14.69-17.3,29.7-25.87,44.59-6.27,10.89-12.59,21.76-18.68,32.75-9.17,16.56-18.2,33.2-27.21,49.85-12.57,23.22-25.43,46.29-37.46,69.79-7.89,15.42-14.5,31.49-21.72,47.24-.73,1.59-1.67,3.09-2.62,4.56-3.16,4.88-5.61,4.23-9.8.23-8.08-7.71-12.36-17.39-16.65-27.19-.77-1.76-.7-3.96-.7-5.95-.06-17.18-.55-34.38.12-51.54.41-10.41,2.72-20.73,4.06-31.11,1.05-8.08,1.92-16.17,2.87-24.26-.33-.02-.66-.04-.99-.06Z" />
    <path d="M476.47,336.61c-4.76-6.18-9.28-11.21-12.86-16.84-9.35-14.7-13.6-31.04-15.11-48.32-1.22-13.91-3.09-27.77-4.92-41.62-.63-4.76-2.03-9.41-3.41-15.56-4.6,9.21-8.66,17.33-12.71,25.45-8.27,16.59-16.72,33.1-24.76,49.81-9.3,19.32-18.07,38.89-27.39,58.19-7.25,15.02-14.96,29.83-22.55,44.69-6.62,12.96-13.41,25.83-20.05,38.77-3.45,6.72-7.74,8.45-10.76,4.06-.76-1.1-1.28-3.03-.85-4.18,7.01-18.52,14.42-36.88,21.26-55.46,5.68-15.46,10.26-31.33,16.17-46.69,9.95-25.87,20.71-51.43,30.84-77.24,5.87-14.96,10.84-30.27,16.78-45.2,9.09-22.86,18.23-45.73,28.32-68.15,2.82-6.26,6.95-11.58,6.98-19.01.02-5.29,4.81-7.67,9.09-9.56,4.62-2.04,9.43-3.65,14.19-5.36,5.68-2.04,15.54,4.25,16.1,10.32.9,9.78,2.66,19.6,2.27,29.34-.56,14.02-3.5,27.96-3.97,41.98-.47,13.84.88,27.75,1.42,41.63.09,2.25-.02,4.53.27,6.76,1.58,11.86,3.51,23.68,4.84,35.56,1.25,11.1,3.61,22.47,2.33,33.35-1.26,10.75-3.4,22.14-11.53,33.29Z" />
    <path d="M231.97,266.73v-74.66c-6.06,11.47-11.47,21.93-17.09,32.28-4.42,8.14-8.99,16.2-13.67,24.19-5.04,8.61-10.37,17.04-15.41,25.65-5.99,10.23-11.9,20.5-17.68,30.85-6.55,11.74-12.89,23.59-19.39,35.36-6.74,12.21-13.4,24.46-20.39,36.53-6.65,11.49-13.68,22.76-20.51,34.15-1.5,2.5-2.7,5.2-4.31,7.62-3.72,5.58-3.78,5.54-10.46,7.42-3.05-7.71,2.28-13.61,4.87-19.74,12.48-29.54,25.59-58.82,38.39-88.23,12.23-28.09,23.92-56.42,36.66-84.27,10.56-23.1,22.33-45.65,33.49-68.48,5.62-11.5,10.85-23.19,16.63-34.6,5.07-10.02,10.6-19.8,16.04-29.63,3.28-5.93,9.7-7.09,15.29-7.9,3.33-.48,6.19-3.44,10.92-.97,7.89,4.12,10.74,8.94,10.14,17.81-1.44,21.06-1.41,42.22-2.92,63.27-.99,13.78-6.33,26.3-12.95,38.62-8.36,15.58-14.71,32.24-22.14,48.33-1.02,2.21-3.28,3.86-5.51,6.4Z" />
  </svg>
);

/* ============================================================
   SECTION COMPONENTS
   ============================================================ */
function Lightbox() {
  return (
    <div className="lightbox-overlay" id="lightbox">
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={() => closeLightbox()}>×</button>
        <iframe id="lightbox-iframe" src="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <img id="lightbox-image" src="" alt="" />
        <video id="lightbox-video" controls playsInline />
        <div className="lightbox-title" id="lightbox-title"></div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <nav id="mainNav">
      <div className="nav-inner">
        <a href="#hero" style={{ display: "flex", alignItems: "center" }}>
          <NanaLogo width={32} className="" />
        </a>
        <div className="nav-links">
          <a href="#hero" className="nav-link active">NANA</a>
          <a href="#creative" className="nav-link">Creative</a>
          <a href="#product" className="nav-link">Product</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero">
      <canvas id="hero-canvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="parallax-shape visible" data-speed="0.03" style={{ width: 400, height: 400, background: "rgba(240,160,192,0.06)", top: "10%", right: -100 }}></div>
      <div className="parallax-shape visible" data-speed="0.05" style={{ width: 300, height: 300, background: "rgba(136,200,232,0.05)", bottom: "20%", left: -80 }}></div>
      <div className="hero-content">
        <div className="animate-fade-up">
          <NanaLogo className="hero-logo" width={280} />
        </div>
        <p className="hero-subtitle animate-fade-up delay-1">Sean Nana</p>
        <h1 className="hero-title animate-fade-up delay-2">
          <span style={{ whiteSpace: "nowrap" }}><span className="holo-text" style={{ fontWeight: 500 }}>Creative</span> Enabler. <span className="holo-text" style={{ fontWeight: 500 }}>Experience</span> Builder.</span><br />
          Culture <span style={{ color: "var(--muted)", fontWeight: 300 }}>×</span> Technology.
        </h1>
        <p className="hero-desc animate-fade-up delay-3">
          17+ years across tech, entertainment, retail, and web3. Building at the intersection of culture, creativity, and emerging technology.
        </p>
        <div className="scroll-indicator animate-fade-up delay-4">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
}

function CreativeSection() {
  type MediaType = "all" | "video" | "photo" | "web3";
  type MediaItem = {
    key: string;
    type: Exclude<MediaType, "all">;
    title: string;
    subtitle?: string;
    thumbSrc?: string;
    duration?: string;
    videoId?: string;
    localVideoSrc?: string;
    href?: string;
  };

  const [activeType, setActiveType] = useState<MediaType>("all");

  const videos = [
    { id: "4ZLu5G12kAY", title: "Rush", role: "Director & Producer", views: "77K", duration: "3:24" },
    { id: "ECTwG4yb_BY", title: "NIGHTCAP", role: "Producer", views: "26K", duration: "3:53" },
    { id: "2w-yQ_Sp5WE", title: "Electric", role: "Producer", views: "59K", duration: "3:50" },
    { id: "JwE1hSu5FMw", title: "Summertime Shine", role: "Director", views: "20K", duration: "4:00" },
    { id: "VdzEdMzrlcE", title: "NESS", role: "Director & Producer", views: "", duration: "" },
    { id: "CCcjm7hz5W8", title: "Mona Lisa", role: "Director & Producer", views: "50K", duration: "2:50" },
    { id: "XXWFJhYZslo", title: "VICE (ft. Autumn in June)", role: "Director & DP", views: "", duration: "" },
    { id: "VjA5YoKVc1w", title: "Euphoria ft. ATOSA", role: "Producer", views: "", duration: "" },
    { id: "u-XltTtOtdU", title: "MPH (Lyric Video)", role: "Producer", views: "", duration: "" },
  ];

  const mediaItems: MediaItem[] = useMemo(() => {
    const videoItems: MediaItem[] = videos.map((v) => ({
      key: `video-${v.id}`,
      type: "video",
      title: v.title,
      subtitle: v.role,
      duration: v.duration || undefined,
      videoId: v.id,
      thumbSrc: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    }));

    const photoItems: MediaItem[] = [];
    const web3Items: MediaItem[] = [];

    return [...videoItems, ...photoItems, ...web3Items];
  }, [videos]);

  const filteredItems = useMemo(() => {
    if (activeType === "all") return mediaItems;
    return mediaItems.filter((m) => m.type === activeType);
  }, [activeType, mediaItems]);

  return (
    <section id="creative" className="scanlines" style={{ background: "linear-gradient(to bottom,var(--black),#0d0a08,var(--black))" }}>
      <div className="bg-video-wrapper">
        <iframe id="bg-video" src="https://www.youtube.com/embed/VdzEdMzrlcE?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=VdzEdMzrlcE&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <div className="bg-video-overlay"></div>
      </div>
      <div className="parallax-shape" data-speed="0.04" style={{ width: 500, height: 500, background: "rgba(232,200,120,0.04)", top: "5%", left: -150 }}></div>
      <div className="parallax-shape" data-speed="0.06" style={{ width: 350, height: 350, background: "rgba(240,160,192,0.04)", bottom: "10%", right: -100 }}></div>
      <div className="rec-indicator" style={{ color: "rgba(232,200,120,0.3)" }}>REC <span className="rec-dot"></span></div>
      <div className="section-inner">
        <div className="reveal">
          <p className="section-label" style={{ color: "rgba(232,200,120,0.6)" }}>01 / Creative</p>
          <h2 className="section-title"><span className="holo-text">MEDIA</span></h2>
          <p className="section-subtitle">NANA LIFESTYLE</p>
        </div>
        <div className="reveal two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, margin: "48px 0 64px" }}>
          <p style={{ color: "rgba(224,224,224,0.8)", fontSize: 14, lineHeight: 1.8 }}>Co-founded an independent label and creative collective that powered MIKNNA to 10M+ streams, international tours, and collaborations with the Free Nationals, Terrace Martin, Far East Movement, Big K.R.I.T., and TDE.</p>
          <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.8, borderLeft: "1px solid rgba(232,200,120,0.2)", paddingLeft: 24 }}>Creative Director &amp; CEO via NANA LIFESTYLE — artist development, brand identity, content production, business strategy, touring, merchandising, and publishing.</p>
        </div>
        <div className="grid-4 reveal" style={{ marginBottom: 80 }}>
          <div className="stat-card"><div className="stat-value holo-text">10M+</div><div className="stat-label">Streams</div></div>
          <div className="stat-card"><div className="stat-value holo-text">2</div><div className="stat-label">Continental Tours</div></div>
          <div className="stat-card"><div className="stat-value holo-text">13+</div><div className="stat-label">Years</div></div>
          <div className="stat-card"><div className="stat-value holo-text">5+</div><div className="stat-label">Releases</div></div>
        </div>
        <div className="reveal">
          <div className="media-toolbar">
            <div>
              <h3>Media</h3>
              <div className="media-count">{filteredItems.length} items</div>
            </div>
            <div className="chips" role="tablist" aria-label="Media filters">
              {([
                { id: "all" as const, label: "All" },
                { id: "video" as const, label: "Video" },
                { id: "photo" as const, label: "Photo" },
                { id: "web3" as const, label: "Web3" },
              ]).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={"chip" + (activeType === t.id ? " active" : "")}
                  onClick={() => setActiveType(t.id)}
                  aria-selected={activeType === t.id}
                  role="tab"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="media-grid">
            {filteredItems.map((m) => {
              if (m.type === "web3" && m.href) {
                return (
                  <a
                    key={m.key}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="media-tile"
                    aria-label={m.title}
                  >
                  <div className="media-thumb">
                    {m.thumbSrc && <img src={m.thumbSrc} alt={m.title} loading="lazy" />}
                      <div className="media-gradient"></div>
                      <div className="media-badge">Web3</div>
                    </div>
                    <div className="media-meta">
                      <div className="media-title">{m.title}</div>
                      {m.subtitle && <div className="media-sub">{m.subtitle}</div>}
                    </div>
                  </a>
                );
              }

              return (
                <button
                  key={m.key}
                  type="button"
                  className="media-tile"
                  onClick={() => {
                    if (m.type === "video" && m.videoId) openLightbox(m.videoId, m.title);
                    else if (m.type === "video" && m.localVideoSrc) openLocalVideoLightbox(m.localVideoSrc, m.title);
                    if (m.type === "photo" && m.thumbSrc) openImageLightbox(m.thumbSrc, m.title);
                  }}
                  aria-label={m.type === "video" ? `Play ${m.title}` : m.title}
                >
                  <div className="media-thumb">
                    {m.thumbSrc && <img src={m.thumbSrc} alt={m.title} loading="lazy" />}
                    <div className="media-gradient"></div>
                    <div className="media-badge">{m.type}</div>
                    {m.duration && <div className="media-duration">{m.duration}</div>}
                  </div>
                  <div className="media-meta">
                    <div className="media-title">{m.title}</div>
                    {m.subtitle && <div className="media-sub">{m.subtitle}</div>}
                  </div>
                </button>
              );
            })}
          </div>
          {activeType !== "video" && (
            <div className="media-note">
              Photo + Web3 tiles are ready — drop assets into `public/` and add items when you’re ready.
            </div>
          )}
        </div>
        <div className="reveal" style={{ marginTop: 80 }}>
          <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(232,200,120,0.6)", marginBottom: 32 }}>Discography</p>
          <div className="grid-3" style={{ marginBottom: 64 }}>
            {[
              { title: "Escape (Deluxe)", sub: "MIKNNA · 2021", type: "Album", img: "/escape-deluxe.jpg" },
              { title: "Pool Haus EP", sub: "MIKNNA x SATICA · 2020", type: "EP", extra: "3M+ streams worldwide", img: "/pool-haus-ep.png" },
              { title: "50|50 (Side A)", sub: "MIKNNA · 2016", type: "EP", img: "/5050-side-a.jpg" },
            ].map((r) => (
              <div key={r.title} className="release-card">
                <div className="release-art">
                  {r.img ? <img src={r.img} alt={r.title} /> : <div style={{ padding: 24, textAlign: "center" }}><div className="font-display" style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 4 }}>{r.title}</div><div className="font-mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--muted)" }}>{r.sub}</div></div>}
                  <div className="release-badge">{r.type}</div>
                  <div className="release-overlay">
                    <div className="font-display" style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 4 }}>{r.title}</div>
                    <div className="font-mono" style={{ fontSize: 9, letterSpacing: "0.1em", color: "rgba(232,200,120,0.7)" }}>{r.sub}</div>
                    {r.extra && <div className="font-mono" style={{ fontSize: 9, color: "var(--muted)", marginTop: 6 }}>{r.extra}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal">
          <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(232,200,120,0.6)", marginBottom: 24 }}>Collaborators &amp; Partners</p>
          <div>{["Free Nationals", "Terrace Martin", "Far East Movement", "Big K.R.I.T.", "Top Dawg Entertainment", "SATICA"].map((c) => <span key={c} className="pill">{c}</span>)}</div>
        </div>
      </div>
      <div className="section-divider" style={{ position: "absolute" as const, bottom: 0, left: 0, right: 0 }}></div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="product" style={{ background: "linear-gradient(to bottom,var(--black),#080a0d,var(--black))" }}>
      <div className="parallax-shape" data-speed="0.035" style={{ width: 450, height: 450, background: "rgba(136,200,232,0.04)", top: "15%", right: -120 }}></div>
      <div className="parallax-shape" data-speed="0.055" style={{ width: 280, height: 280, background: "rgba(192,160,224,0.03)", bottom: "25%", left: -80 }}></div>
      <div className="section-inner">
        <div className="reveal">
          <p className="section-label" style={{ color: "rgba(136,200,232,0.6)" }}>02 / Product</p>
          <h2 className="section-title"><span className="holo-text">CR3 Labs</span></h2>
          <p className="section-subtitle">Web3, 3D &amp; AI Product Studio</p>
        </div>
        <div className="card reveal" style={{ margin: "48px 0 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, marginBottom: 24 }}>
            <div><h3 className="font-display" style={{ fontSize: 22, fontWeight: 600, color: "white", marginBottom: 4 }}>Head of Experience</h3><p className="font-display" style={{ fontSize: 15, color: "rgba(136,200,232,0.8)" }}>CR3 Labs</p></div>
            <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--muted)" }}>Jan 2024 - Present</span>
          </div>
          <p style={{ color: "rgba(224,224,224,0.7)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>Product experience, creator partnerships, BD, community growth, and creative direction on a lean team of four.</p>
          <div style={{ marginBottom: 32 }}>
            {[
              "Grew the platform to 500+ communities and thousands of active creators and collectors, generating 20,000+ onchain transactions",
              "Built strategic partnerships with major web3 brands and IPs in Ethereum, ApeChain, and Base ecosystems",
              "Embedded AI and agentic capabilities into core product experience",
              "Designed and provided self-serve enablement resources such as product documentation, support content, and user guides for OpenPage (docs.op.xyz), covering creator tools, collector flows, avatars & wearables, developer APIs, and troubleshooting",
            ].map((h, i) => (
              <div key={i} className="highlight"><span className="highlight-dot" style={{ background: "rgba(136,200,232,0.6)" }}></span><span className="highlight-text">{h}</span></div>
            ))}
          </div>
          <div className="grid-2">
            <a href="https://op.xyz" target="_blank" rel="noopener noreferrer" className="product-link">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <img
                  src="/op-logotype-url-white.svg"
                  alt="OpenPage"
                  style={{ height: 32, width: "auto", display: "block" }}
                />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--muted)" }}>
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(136,200,232,0.5)", marginBottom: 8 }}>Universal Avatar Platform</p>
              <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.6 }}>Turning followers into superfans. Verify fans, prove engagement, reward loyalty.</p>
            </a>
            <a href="https://doppel.fun" target="_blank" rel="noopener noreferrer" className="product-link">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <img
                  src="/doppel-logo.png"
                  alt="Doppel"
                  style={{ height: 32, width: "auto", display: "block" }}
                />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--muted)" }}>
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(136,200,232,0.5)", marginBottom: 8 }}>AI-Agent Built 3D Spaces</p>
              <p style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.6 }}>Intersection of 3D, blockchain, and AI agents.</p>
            </a>
          </div>
        </div>
        <div className="card reveal" style={{ marginTop: 32 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" as const, marginBottom: 24 }}>
            <div><h3 className="font-display" style={{ fontSize: 22, fontWeight: 600, color: "white", marginBottom: 4 }}>Founder</h3><p className="font-display" style={{ fontSize: 15, color: "rgba(136,200,232,0.8)" }}>Other Space FM</p></div>
            <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--muted)" }}>Jul 2022 - Present</span>
          </div>
          <p style={{ color: "rgba(224,224,224,0.7)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>Community platform for creators, builders, and artists in web3 and AI. Acquired by CR3 Labs in 2024.</p>
          <div style={{ marginBottom: 24, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(42,42,42,0.8)", background: "black" }}>
            <video
              id="osfm-video"
              src="/osfm-abducted-062625.mov"
              muted
              playsInline
              loop
              preload="metadata"
              style={{ width: "100%", display: "block" }}
            />
          </div>
          <div>
            {["Created weekly X Spaces and livestreams featuring builders and creators", "Community network became the pipeline for OpenPage partnerships and core creators", "Platform acquired by CR3 Labs in 2024"].map((h, i) => (
              <div key={i} className="highlight"><span className="highlight-dot" style={{ background: "rgba(136,200,232,0.6)" }}></span><span className="highlight-text">{h}</span></div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider" style={{ position: "absolute" as const, bottom: 0, left: 0, right: 0 }}></div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" style={{ background: "linear-gradient(to bottom,var(--black),#0a0a0c,var(--black))" }}>
      <div className="parallax-shape" data-speed="0.04" style={{ width: 400, height: 400, background: "rgba(192,160,224,0.04)", top: "20%", left: -120 }}></div>
      <div className="parallax-shape" data-speed="0.025" style={{ width: 350, height: 350, background: "rgba(168,224,176,0.03)", bottom: "15%", right: -100 }}></div>
      <div className="section-inner">
        <div className="reveal">
          <p className="section-label" style={{ color: "rgba(192,160,224,0.6)" }}>03 / Experience</p>
          <h2 className="section-title"><span className="holo-text">Enterprise</span></h2>
          <p className="section-subtitle">L&amp;D, Enablement &amp; Experience Design</p>
        </div>
        <p className="reveal" style={{ color: "rgba(224,224,224,0.7)", fontSize: 14, lineHeight: 1.8, maxWidth: 720, margin: "48px 0 64px" }}>17+ years designing learning experiences and scaling enablement programs at some of the most recognized brands in tech.</p>
        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" as const, marginBottom: 4 }}><h3 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "white" }}>Enjoy Inc.</h3><span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--muted)" }}>Jul 2016 - Sep 2022</span></div>
              <p className="font-display" style={{ fontSize: 15, color: "rgba(192,160,224,0.7)", marginBottom: 8 }}>Sr. Learning &amp; Development Manager</p>
              <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(136,136,136,0.6)", textTransform: "uppercase" as const }}>$350M+ funded | $1.2B SPAC IPO</p>
            </div>
            <div>
              {["First L&D hire — built the learning function from scratch", "Scaled from 4 U.S. markets to 54+ across three countries", "Led sales enablement contributing to 25% revenue lift", "Cut new hire ramp time by 33% for ~100-person cohorts", "Managed 8 regional facilitators across US and Canada", "Developed partner training with Apple, AT&T, Google, Sonos, Rogers, Magic Leap"].map((h, i) => (
                <div key={i} className="highlight"><span className="highlight-dot" style={{ background: "rgba(192,160,224,0.4)" }}></span><span className="highlight-text">{h}</span></div>
              ))}
            </div>
          </div>
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" as const, marginBottom: 4 }}><h3 className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "white" }}>Apple Inc.</h3><span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "var(--muted)" }}>Jul 2005 - Jun 2016</span></div>
              <p className="font-display" style={{ fontSize: 15, color: "rgba(192,160,224,0.7)", marginBottom: 8 }}>Creative / Instructional Designer / Facilitator</p>
              <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(136,136,136,0.6)", textTransform: "uppercase" as const }}>11 years | 100 → 490 stores | 20+ countries</p>
            </div>
            <div>
              {["Designed Facilitation Skills learning experience for Global Retail Training", "Developed Apple Business training deployed globally in 11+ languages", "Facilitated New Store Openings at Grand Central (NYC) and Covent Garden (London)", "Trained teams at Cupertino HQ with participants from 10+ countries", "Certified in Final Cut Pro, Logic Pro, and Aperture"].map((h, i) => (
                <div key={i} className="highlight"><span className="highlight-dot" style={{ background: "rgba(192,160,224,0.4)" }}></span><span className="highlight-text">{h}</span></div>
              ))}
            </div>
          </div>
        </div>
        <div className="reveal" style={{ marginTop: 80, paddingTop: 48, borderTop: "1px solid rgba(42,42,42,0.2)" }}>
          <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "rgba(192,160,224,0.4)", marginBottom: 16 }}>Education</p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" as const }}><h4 className="font-display" style={{ fontSize: 18, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>San Diego State University</h4><span style={{ color: "var(--muted)", fontSize: 14 }}>B.A. in Art, emphasis in Multimedia (2007)</span></div>
        </div>
      </div>
      <div className="section-divider" style={{ position: "absolute" as const, bottom: 0, left: 0, right: 0 }}></div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" style={{ padding: "128px 0", background: "linear-gradient(to bottom,var(--black),#050505)" }}>
      <div className="parallax-shape visible" data-speed="0.03" style={{ width: 300, height: 300, background: "rgba(240,160,192,0.03)", top: "30%", left: -80 }}></div>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" as const, position: "relative" as const, zIndex: 5 }}>
        <div className="reveal">
          <NanaLogo width={96} className="" />
          <h2 className="font-display" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24, marginTop: 32 }}><span className="holo-text">Let&apos;s Build Together</span></h2>
          <p style={{ color: "var(--muted)", fontSize: 14, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.8 }}>Open to creative collaborations, product roles, and conversations about culture, technology, and what&apos;s next.</p>
        </div>
        <div className="reveal" style={{ marginBottom: 64 }}><a href="mailto:holler.back@me.com" className="contact-btn">holler.back@me.com</a></div>
        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 80 }}>
          <a href="https://x.com/seannana" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
            <span className="x-glyph" aria-hidden="true">𝕏</span>
          </a>
          <a href="https://www.linkedin.com/in/seannana/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2" />
              <path d="M2 9h4v12H2z" />
              <path d="M4 4a2 2 0 1 0 0.01 0" />
            </svg>
          </a>
          <a href="https://instagram.com/seannana" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" />
              <path d="M12 11a4 4 0 1 0 0 0.01" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>
        <div style={{ borderTop: "1px solid rgba(42,42,42,0.2)", paddingTop: 32 }}>
          <p className="font-mono" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "rgba(136,136,136,0.4)" }}>© 2026 NANA LIFESTYLE. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CLIENT-SIDE SCRIPTS
   ============================================================ */
function SiteScripts() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
// This runs after hydration via useEffect in Home component
        `,
      }}
    />
  );
}

// Global functions for lightbox
function openLightbox(id: string, title: string) {
  const overlay = document.getElementById("lightbox");
  const iframe = document.getElementById("lightbox-iframe") as HTMLIFrameElement;
  const image = document.getElementById("lightbox-image") as HTMLImageElement | null;
  const video = document.getElementById("lightbox-video") as HTMLVideoElement | null;
  const titleEl = document.getElementById("lightbox-title");
  if (overlay && iframe && titleEl) {
    if (image) {
      image.style.display = "none";
      image.src = "";
      image.alt = "";
    }
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.style.display = "none";
    }
    iframe.style.display = "";
    iframe.src = "https://www.youtube.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1";
    titleEl.textContent = "MEDIA — " + title;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function openImageLightbox(src: string, title: string) {
  const overlay = document.getElementById("lightbox");
  const iframe = document.getElementById("lightbox-iframe") as HTMLIFrameElement;
  const image = document.getElementById("lightbox-image") as HTMLImageElement | null;
  const video = document.getElementById("lightbox-video") as HTMLVideoElement | null;
  const titleEl = document.getElementById("lightbox-title");
  if (overlay && iframe && image && titleEl) {
    iframe.src = "";
    iframe.style.display = "none";
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      video.style.display = "none";
    }
    image.src = src;
    image.alt = title;
    image.style.display = "block";
    titleEl.textContent = title;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function openLocalVideoLightbox(src: string, title: string) {
  const overlay = document.getElementById("lightbox");
  const iframe = document.getElementById("lightbox-iframe") as HTMLIFrameElement;
  const image = document.getElementById("lightbox-image") as HTMLImageElement | null;
  const video = document.getElementById("lightbox-video") as HTMLVideoElement | null;
  const titleEl = document.getElementById("lightbox-title");
  if (overlay && iframe && video && titleEl) {
    iframe.src = "";
    iframe.style.display = "none";
    if (image) {
      image.src = "";
      image.alt = "";
      image.style.display = "none";
    }
    video.src = src;
    video.style.display = "block";
    titleEl.textContent = title;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    video.play().catch(() => {});
  }
}

function closeLightbox() {
  const overlay = document.getElementById("lightbox");
  const iframe = document.getElementById("lightbox-iframe") as HTMLIFrameElement;
  const image = document.getElementById("lightbox-image") as HTMLImageElement | null;
  const video = document.getElementById("lightbox-video") as HTMLVideoElement | null;
  if (overlay && iframe) {
    overlay.classList.remove("active");
    iframe.src = "";
    iframe.style.display = "";
    if (image) {
      image.src = "";
      image.alt = "";
      image.style.display = "none";
    }
     if (video) {
       video.pause();
       video.removeAttribute("src");
       video.load();
       video.style.display = "none";
     }
    document.body.style.overflow = "";
  }
}

function initScrollEffects() {
  if (typeof window === "undefined") return;

  const observer = new IntersectionObserver(
    (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
    { threshold: 0.1, rootMargin: "-50px" }
  );
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    document.querySelectorAll(".parallax-shape").forEach((el) => observer.observe(el));
  }, 100);

  // Other Space FM video autoplay on scroll
  const osfmVideo = document.getElementById("osfm-video") as HTMLVideoElement | null;
  if (osfmVideo) {
    let soundEnabled = false;

    osfmVideo.style.cursor = "pointer";
    osfmVideo.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      osfmVideo.muted = !soundEnabled;
      if (soundEnabled) osfmVideo.volume = 1;
      osfmVideo.play().catch(() => {});
    });

    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            osfmVideo.muted = !soundEnabled;
            osfmVideo.play().catch(() => {});
          } else {
            osfmVideo.pause();
          }
        });
      },
      { threshold: 0.6 }
    );
    videoObserver.observe(osfmVideo);
  }

  // Lightbox keyboard
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
  document.getElementById("lightbox")?.addEventListener("click", (e) => { if (e.target === e.currentTarget) closeLightbox(); });

  // Scroll handler
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;
        // Nav
        const nav = document.getElementById("mainNav");
        nav?.classList.toggle("scrolled", scrollY > 100);
        // Active section
        const sections = ["hero", "creative", "product", "experience", "contact"];
        let active = "hero";
        sections.forEach((id) => {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 200) active = id;
        });
        document.querySelectorAll(".nav-link").forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === "#" + active);
        });
        // Parallax shapes
        document.querySelectorAll<HTMLElement>(".parallax-shape").forEach((shape) => {
          const speed = parseFloat(shape.dataset.speed || "0.03");
          const rect = shape.parentElement?.getBoundingClientRect();
          if (rect) shape.style.transform = "translateY(" + -(rect.top * speed) + "px)";
        });
        // Section parallax
        document.querySelectorAll<HTMLElement>(".section-inner").forEach((inner) => {
          const rect = inner.getBoundingClientRect();
          const diff = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.015;
          inner.style.transform = "translateY(" + diff + "px)";
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true } as AddEventListenerOptions);
}

function initHeroScene() {
  try {
  const THREE = (window as any).THREE;
  if (!THREE) return;
  const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 6;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geo = new THREE.IcosahedronGeometry(2, 1);
  const mat = new THREE.MeshBasicMaterial({ color: 0x1a1a2e, wireframe: true, transparent: true, opacity: 0.4 });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  // Create a soft circular star texture via canvas
  const starCanvas = document.createElement("canvas");
  starCanvas.width = 64; starCanvas.height = 64;
  const ctx = starCanvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.15, "rgba(255,255,255,0.8)");
  grad.addColorStop(0.4, "rgba(255,255,255,0.15)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const starTexture = new THREE.CanvasTexture(starCanvas);

  // Holographic near-field stars (subtle color tints)
  const count = 400;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const phases = new Float32Array(count); // for twinkle
  const holoColors = [[0.94,0.63,0.75],[0.91,0.78,0.47],[0.66,0.88,0.69],[0.53,0.78,0.91],[0.75,0.63,0.88],[1,1,1],[1,1,1]];
  for (let i = 0; i < count; i++) {
    positions[i*3] = (Math.random()-0.5)*24; positions[i*3+1] = (Math.random()-0.5)*24; positions[i*3+2] = (Math.random()-0.5)*24;
    const c = holoColors[Math.floor(Math.random()*holoColors.length)];
    colors[i*3]=c[0]; colors[i*3+1]=c[1]; colors[i*3+2]=c[2];
    sizes[i] = 0.04 + Math.random() * 0.12;
    phases[i] = Math.random() * Math.PI * 2;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  pGeo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
  const pMat = new THREE.PointsMaterial({ size: 0.12, map: starTexture, vertexColors: true, transparent: true, opacity: 0.9, sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // Deep background star field
  const sCount = 1200;
  const sPos = new Float32Array(sCount * 3);
  const sSizes = new Float32Array(sCount);
  const sPhases = new Float32Array(sCount);
  for (let i = 0; i < sCount; i++) {
    sPos[i*3] = (Math.random()-0.5)*120; sPos[i*3+1] = (Math.random()-0.5)*120; sPos[i*3+2] = (Math.random()-0.5)*120;
    sSizes[i] = 0.1 + Math.random() * 0.5;
    sPhases[i] = Math.random() * Math.PI * 2;
  }
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
  const bgStars = new THREE.Points(sGeo, new THREE.PointsMaterial({ size: 0.6, map: starTexture, color: 0xffffff, transparent: true, opacity: 0.5, sizeAttenuation: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  scene.add(bgStars);

  const animate = () => {
    requestAnimationFrame(animate);
    const t = Date.now() * 0.001;
    mesh.rotation.x = t * 0.06; mesh.rotation.y = t * 0.08;
    mesh.position.y = Math.sin(t * 0.4) * 0.1;
    points.rotation.y = t * 0.012;
    points.rotation.x = Math.sin(t * 0.008) * 0.05;
    bgStars.rotation.y = t * 0.003;
    bgStars.rotation.x = t * 0.002;
    // Twinkle effect — modulate opacity over time
    const pSizes = pGeo.attributes.size as any;
    for (let i = 0; i < count; i++) {
      const base = sizes[i];
      pSizes.array[i] = base * (0.5 + 0.5 * Math.sin(t * (1.5 + (phases[i] % 3)) + phases[i]));
    }
    pSizes.needsUpdate = true;
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  } catch (e) { console.error("Hero scene error:", e); }
}
