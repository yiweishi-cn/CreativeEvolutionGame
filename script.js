const demoCases = [
  {
    id: "flappy-bird-cold-start",
    filter: "cold-start",
    title: "Case A · Flappy Bird",
    role: "Cold Start Baseline",
    summary:
      "Used as a simple single-input reaction-loop anchor. The lineage keeps the one-button continuous-forward-motion structure associated with Flappy Bird, but treats it as a mechanic reference rather than a cloning target, introducing rhythm-shaped gates, route threading, and denser feedback across iterations.",
    variant: "variant-cold",
    stages: [
      {
        title: "Base",
        chip: "initial",
        gameName: "Pulse Morph Run",
        delta: "rhythm-morphing gates replace static pipes",
        note:
          "Press Space or Click to flap. Gates morph shape in real time — pass through the center band to sync with the beat. Perfect passes build combo and trigger the next gate's morph pattern. Reach score 20 to complete the run.",
        mechanics: ["one-button flap", "morphing gate", "rhythm-sync obstacle"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/flappy_bird/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        gameName: "Crease Choir",
        delta: "visual route threading added",
        note:
          "Press Space or Click to flap in sync with the beat. Perfect center passes create visible wind creases that alter upcoming gate shapes. Hold and release to manipulate gate geometry ahead. Complete all four chained objectives to win.",
        mechanics: ["one-button flap", "route threading", "neon trail"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/flappy_bird/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        gameName: "Neon Route Weave",
        delta: "neon polish + impact feedback reinforced",
        note:
          "Press Space or Click to flap on the beat pulse. Neon route threads trace your path through each gate in real time. Perfect threading stitches a predictive safe route for the next gate. An echo trail from a prior failed run assists navigation.",
        mechanics: ["one-button flap", "morphing gate", "neon HUD"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/flappy_bird/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        gameName: "Neon Route Echo",
        delta: "cinematic feedback + engagement score increased to 9",
        note:
          "Press Space or Click to flap in beat-lock rhythm. Threading gates perfectly rewrites the next gate's trajectory in real time. Cinematic impact sequences and animated panels fire on perfect passes. Chain all beat-lock objectives across a full run to win.",
        mechanics: ["one-button flap", "morphing gate", "cinematic trail"],
        status: ["playable", "C=8 / E=9"],
        scores: { creativity: "8", playability: "8", reward: "0.80", plan: "1.00" },
        playUrl: "./game_demo/flappy_bird/v4.html"
      }
    ]
  },
  {
    id: "pvz-preserve-add",
    filter: "preserve-add",
    title: "Case B · Plants vs. Zombies",
    role: "Preserve + Add",
    summary:
      "Used as a resource-aware lane-defense anchor. The lineage keeps the readable lane-defense structure associated with Plants vs. Zombies, but reworks the economy through friendly-fire blockage, lane bending, and overcharge storage rather than reproducing the source game directly.",
    variant: "variant-defense",
    stages: [
      {
        title: "Base",
        chip: "initial",
        gameName: "Fireline Garden",
        delta: "friendly-fire blockage as core tension",
        note:
          "Click to place sun generators and pea shooters in lanes. Generators produce energy but physically block allied shots if misaligned. A wave forecast strip shows which lanes enemies enter next. Survive all waves without enemies breaching the base.",
        mechanics: ["lane placement", "friendly-fire blockage", "wave forecast"],
        status: ["playable", "C=7 / F=8"],
        scores: { creativity: "7", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/plants_vs_zombies/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        gameName: "Neon Bent Lanes",
        delta: "lane-bend ability added (pay to redirect entry)",
        note:
          "Click to place shooters and generators. Once per wave, spend energy to bend an enemy's entry lane to a new path. Generators still block allied shots — the forecast strip guides placement. Clear all enemy waves to win.",
        mechanics: ["lane placement", "lane-bend", "friendly-fire blockage"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/plants_vs_zombies/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        gameName: "Resonance Garden",
        delta: "blocked shots stored as overcharge burst",
        note:
          "Click to place units across lanes. Deliberately letting generators intercept allied shots builds overcharge energy. Release overcharge as a lane-wide burst to clear dense enemy groups. Bend lanes once per wave and beat all three waves to win.",
        mechanics: ["overcharge storage", "lane-bend", "wave defense"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "0.58", plan: "1.00" },
        playUrl: "./game_demo/plants_vs_zombies/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        gameName: "Resonance Garden",
        delta: "overcharge + lane-bend economy fully integrated",
        note:
          "Click to place units; use keyboard shortcuts for special abilities. Route friendly fire into generators to build charged blasts. Lane bending creates one-way ramps that redirect enemy paths. Manage block, store, and bend decisions across the wave forecast to survive.",
        mechanics: ["overcharge storage", "lane-bend", "friendly-fire economy"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "0.57", plan: "1.00" },
        playUrl: "./game_demo/plants_vs_zombies/v4.html"
      }
    ]
  },
  {
    id: "happy-glass-goal-shift",
    filter: "goal-shift",
    title: "Case C · Happy Glass",
    role: "Goal / Challenge Shift",
    summary:
      "Used as a draw-to-shape physics-puzzle anchor. The lineage retains the legible drawing interaction associated with Happy Glass, but moves quickly toward programmable ink, delayed gravity manipulation, and ritual sequencing, shifting the challenge from simple routing to temporal control.",
    variant: "variant-puzzle",
    stages: [
      {
        title: "Base",
        chip: "initial",
        gameName: "Ink Ritual Cup",
        delta: "two ink types: solid route + absorb-flip",
        note:
          "Draw with the mouse to create ink paths on screen. Solid ink guides water droplets toward the cup. Absorb ink captures droplets and releases them with a delayed gravity flip. Fill the cup and activate the ritual bloom to win.",
        mechanics: ["solid ink route", "absorb-flip ink", "ritual activation"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/happy_glass/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        gameName: "Echo Ink Ritual",
        delta: "gravity flip becomes delayed and chain-triggered",
        note:
          "Draw ink strokes to route water droplets. Absorb ink stores droplets and releases them after a set travel distance. Repel ink deflects droplets away from obstacles. Fill the cup to the target level and optionally trigger the ritual bloom.",
        mechanics: ["solid ink route", "delayed gravity flip", "ritual charge"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "0.55", plan: "1.00" },
        playUrl: "./game_demo/happy_glass/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        gameName: "Ink Chain Codex",
        delta: "history-sensitive droplets added",
        note:
          "Draw ink strokes; press C to cycle between ink types. Press Q/E to rotate gravity during the level. Absorb strokes inscribe a delayed directional gravity flip when clicked. Activate the ritual, fill the cup, and chain bonus droplets to complete.",
        mechanics: ["ink-history droplet", "chain activation", "gravity flip"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/happy_glass/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        gameName: "Ritual Ink Cup",
        delta: "gravity budget introduced as resource constraint",
        note:
          "Draw ink paths and click glyphs to inscribe gravity direction memory. Solid ink walls guide water; absorb fiber stores droplets for a later release. Click absorb strokes to rotate the release direction before triggering. Fill the cup and meet the ritual requirement to win.",
        mechanics: ["gravity budget", "ink-history droplet", "ritual sequence"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/happy_glass/v4.html"
      }
    ]
  },
  {
    id: "fireboy-watergirl-recombine",
    filter: "recombine",
    title: "Case D · Fireboy and Watergirl",
    role: "Mechanic Recombination",
    summary:
      "Used as a dual-character co-op platforming anchor. Instead of copying Fireboy and Watergirl directly, the lineage abstracts its coordination structure into swap, memory echo, inverted replay, and relay timing, turning co-op logic into a single-player mechanic recombination problem.",
    variant: "variant-stealth",
    stages: [
      {
        title: "Base",
        chip: "initial",
        gameName: "Echo Relay Temple",
        delta: "swap leaves memory echo; aura powers bridge",
        note:
          "Arrow keys to move, Space to jump, Q or Shift to swap characters. Park the inactive avatar inside the crystal aura zone to power the bridge. Swapping after moving spawns a ghost replay of your previous path. Guide both avatars to their matching elemental exits to win.",
        mechanics: ["character swap", "memory echo", "aura bridge"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/fireboy_and_watergirl/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        gameName: "Relay Glyph Temple",
        delta: "gravity glyph inverts echo playback",
        note:
          "A/D to move, W to jump, Q to swap characters. Swapping records your active path as an echo that replays automatically. If the recorded path passes through the gravity glyph, the echo replays inverted. The echo must hit floor and ceiling sensors to unlock the relay gate.",
        mechanics: ["character swap", "gravity glyph", "inverted echo"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/fireboy_and_watergirl/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        gameName: "Relay Echo Temple",
        delta: "echo becomes collision-meaningful physics object",
        note:
          "A/D to move, W to jump, Q to swap characters. The inactive body powers the cyan aura zone when parked inside it. Swapping triggers a ghost recording of the previous movement path. The ghost mirrors movement in inverted form to reach mirrored sensors and unlock the gate.",
        mechanics: ["collision echo", "gravity glyph", "aura bridge"],
        status: ["playable", "C=8 / F=7"],
        scores: { creativity: "8", playability: "7", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/fireboy_and_watergirl/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        gameName: "Memory Relay",
        delta: "full relay chain: park → record → invert → latch",
        note:
          "Arrow keys to move, Shift to swap characters. Park the inactive avatar in the aura to power the bridge for the active one. Swap to record a movement path as a ghost echo. Route the echo through the gravity glyph to invert it, latch all sensors, then guide both to their exits.",
        mechanics: ["memory relay chain", "inverted echo", "dual-sensor latch"],
        status: ["playable", "C=8 / F=8"],
        scores: { creativity: "8", playability: "8", reward: "1.00", plan: "1.00" },
        playUrl: "./game_demo/fireboy_and_watergirl/v4.html"
      }
    ]
  }
];

const board = document.getElementById("demo-board");

function buildScoreBox(label, value) {
  return `<div class="score-box"><span class="score-label">${label}</span><span class="score-value">${value}</span></div>`;
}

function getSrcdoc(playUrl) {
  if (!playUrl || typeof GAME_SRCDOC === "undefined") return null;
  // playUrl like "./game_demo/flappy_bird/v2.html"
  const m = playUrl.match(/game_demo\/([^/]+)\/(v\d+)\.html/);
  if (!m) return null;
  return GAME_SRCDOC[m[1]] && GAME_SRCDOC[m[1]][m[2]] || null;
}

function buildDemoCell(stage, isFirst) {
  const srcdoc = getSrcdoc(stage.playUrl);
  const iframe = srcdoc
    ? `<iframe srcdoc="${srcdoc}" scrolling="no" tabindex="-1"></iframe>`
    : stage.playUrl
      ? `<iframe src="${stage.playUrl}" scrolling="no" loading="lazy" tabindex="-1"></iframe>`
      : "";
  const playBtn = stage.playUrl
    ? `<a class="play-btn" href="${stage.playUrl}" target="_blank" rel="noopener">▶ Play</a>`
    : "";
  return `
    <div class="demo-card${isFirst ? " active" : ""}" onclick="activateCard(this)">
      <div class="card-collapsed">
        <span class="card-collapsed-label">${stage.gameName || stage.title}</span>
        <span class="card-collapsed-chip">${stage.chip}</span>
      </div>
      <div class="card-expanded">
        <div class="card-preview">${iframe}${playBtn}</div>
        <div class="card-info">
          <div class="card-info-top">
            <span class="demo-game-name">${stage.gameName || stage.title}</span>
            <span class="stage-chip" data-chip="${stage.chip}">${stage.chip}</span>
          </div>
          <p class="demo-delta">${stage.delta}</p>
          <div class="demo-mechanics">${stage.mechanics.map(m => `<span class="token">${m}</span>`).join("")}</div>
          <div class="scores">
            ${buildScoreBox("Creativity", stage.scores.creativity)}
            ${buildScoreBox("Functionality", stage.scores.playability)}
            ${buildScoreBox("Reward", stage.scores.reward)}
          </div>
          <ul class="card-note-list">
            ${stage.note.split(/(?<=\.)\s+/).filter(s => s.trim()).map(s => `<li>${s.trim()}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>`;
}

function fitPreview(card) {
  const preview = card.querySelector(".card-preview");
  const iframe = preview && preview.querySelector("iframe");
  if (!iframe) return;
  const w = preview.offsetWidth;
  const h = preview.offsetHeight;
  const scale = Math.min(w / 800, h / 500);
  iframe.style.transform = `scale(${scale})`;
  iframe.style.left = `${(w - 800 * scale) / 2}px`;
  iframe.style.top = `${(h - 500 * scale) / 2}px`;
}

function activateCard(el) {
  if (el.classList.contains("active")) return;
  el.closest(".demo-grid").querySelectorAll(".demo-card").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
  // wait for flex transition to finish then fit preview
  setTimeout(() => fitPreview(el), 420);
}

function fitAllActive() {
  document.querySelectorAll(".demo-card.active").forEach(fitPreview);
}

window.addEventListener("resize", fitAllActive);

function buildDemoRow(item) {
  return `
    <div class="demo-row">
      <div class="demo-row-head">
        <div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </div>
        <span class="role-badge">${item.role}</span>
      </div>
      <div class="demo-grid">${item.stages.map((s, i) => buildDemoCell(s, i === 0)).join("")}</div>
    </div>`;
}

board.innerHTML = demoCases.map(buildDemoRow).join("");
requestAnimationFrame(() => setTimeout(fitAllActive, 50));
