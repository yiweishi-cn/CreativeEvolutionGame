const demoCases = [
  {
    id: "flappy-bird-cold-start",
    filter: "cold-start",
    title: "Case A · Flappy Bird",
    role: "Cold Start Baseline",
    summary:
      "A single-input arcade baseline (M019 continuous forward motion + M020 timed jump traversal) chosen to contrast cold-start generation with mechanic-guided iteration. The base game deliberately keeps mechanics at their minimal form so that evolution deltas are unambiguous.",
    variant: "variant-cold",
    stages: [
      {
        title: "Base",
        chip: "initial",
        delta: "tap-to-flap baseline",
        note:
          "The base loop is unambiguous: one input, one axis of control, and a single obstacle pattern. Identity is clear but the creative ceiling of the loop is very low.",
        mechanics: ["tap-to-flap", "continuous forward motion", "pipe avoidance"],
        status: ["playable", "minimal identity"],
        scores: { creativity: "4.2", playability: "7.8", reward: "0.14", plan: "n/a" },
        playUrl: "./game_demo/flappy_bird/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        delta: "gap-width variation added",
        note:
          "Variable pipe gaps introduce difficulty rhythm, but the control model is unchanged. The version is slightly richer yet still reads as a decorated variant of the baseline loop.",
        mechanics: ["tap-to-flap", "gap-width variation", "score zone"],
        status: ["playable", "marginal delta"],
        scores: { creativity: "5.6", playability: "7.4", reward: "0.22", plan: "0.45" },
        playUrl: "./game_demo/flappy_bird/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        delta: "gravity reversal transforms input model",
        note:
          "A second tap now switches the gravity axis. The same single-button model produces two distinct traversal states, meaningfully expanding the challenge structure beyond pipe spacing alone.",
        mechanics: ["gravity switch", "pipe avoidance", "timed flip"],
        status: ["playable", "mechanic shift visible"],
        scores: { creativity: "6.8", playability: "7.0", reward: "0.34", plan: "0.67" },
        playUrl: "./game_demo/flappy_bird/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        delta: "gravity-rhythm loop integrated",
        note:
          "Obstacles are now beat-synced and gravity state is coupled to rhythm cues. The iteration reads as a new mechanic identity rather than a reskinned Flappy Bird, illustrating how cold-start lineages can converge toward coherent creative hooks with enough structured iteration.",
        mechanics: ["gravity rhythm", "beat-sync obstacles", "dual-axis traversal"],
        status: ["playable", "best version"],
        scores: { creativity: "7.6", playability: "6.8", reward: "0.41", plan: "0.79" },
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
      "A tower-defense lineage built on the M029+M030+M031 mechanic cluster (wave defense, lane-based placement, resource generation). The three mechanics form a tightly coupled economy that makes structural preservation mandatory — additions must integrate with the existing loop rather than sit alongside it.",
    variant: "variant-defense",
    stages: [
      {
        title: "Base",
        chip: "initial",
        delta: "lane defense with sun economy",
        note:
          "The base preserves the canonical PvZ mechanic cluster: lane placement, wave pressure, and sun-based resource generation. The loop is complete and well-balanced but its creative potential remains close to the original design.",
        mechanics: ["lane placement", "wave defense", "sun economy"],
        status: ["playable", "baseline"],
        scores: { creativity: "4.7", playability: "8.3", reward: "0.19", plan: "n/a" },
        playUrl: "./game_demo/plants_vs_zombies/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        delta: "environmental lane type constrains placement",
        note:
          "A water lane mechanic is added: certain lanes require aquatic plants, forcing the player to adapt their economy and placement strategy. The new mechanic is present but not yet deeply woven into the wave timing structure.",
        mechanics: ["lane placement", "water lane", "adaptive placement"],
        status: ["playable", "partial integration"],
        scores: { creativity: "6.0", playability: "7.9", reward: "0.28", plan: "0.52" },
        playUrl: "./game_demo/plants_vs_zombies/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        delta: "cross-lane synergy becomes structural",
        note:
          "Plants now affect adjacent lanes through area effects and chain triggers. The wave defense structure must account for lateral interactions, turning placement into a two-dimensional tactical problem rather than a per-lane decision.",
        mechanics: ["cross-lane synergy", "wave defense", "resource timing"],
        status: ["playable", "structural improvement"],
        scores: { creativity: "7.0", playability: "7.6", reward: "0.38", plan: "0.74" },
        playUrl: "./game_demo/plants_vs_zombies/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        delta: "day-night economy and cross-lane depth integrated",
        note:
          "A day-night cycle alters the sun generation rate and zombie composition simultaneously, requiring the player to plan resource timing across two interacting loops. The version demonstrates the project goal: the three preserved mechanics now interact through the added layer rather than operating in parallel.",
        mechanics: ["day-night economy", "cross-lane synergy", "adaptive wave"],
        status: ["playable", "best version"],
        scores: { creativity: "8.1", playability: "7.5", reward: "0.47", plan: "0.89" },
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
      "A physics-puzzle lineage grounded in the M014 constructive-physics family (draw-to-create support structures, fluid routing). The same spatial drawing mechanic is progressively redirected toward a fundamentally different challenge — from simple fill completion to sequence-dependent precision routing.",
    variant: "variant-puzzle",
    stages: [
      {
        title: "Base",
        chip: "initial",
        delta: "draw line to route water into glass",
        note:
          "The base loop is direct: the player draws a path that guides water into the target glass. The mechanic boundary is clear and the spatial challenge is readable, but the goal condition imposes minimal precision requirements.",
        mechanics: ["draw line", "water routing", "glass fill"],
        status: ["playable", "clear goal"],
        scores: { creativity: "5.1", playability: "8.2", reward: "0.21", plan: "n/a" },
        playUrl: "./game_demo/happy_glass/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        delta: "routing branches across multiple targets",
        note:
          "Multiple glasses with different color requirements are introduced. The player must branch or filter the water stream, but the fill threshold remains binary — the goal structure is not yet fundamentally changed.",
        mechanics: ["draw line", "multi-glass routing", "color separation"],
        status: ["playable", "partial depth"],
        scores: { creativity: "6.1", playability: "7.6", reward: "0.29", plan: "0.53" },
        playUrl: "./game_demo/happy_glass/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        delta: "goal shifts from fill to fill-exactly",
        note:
          "The win condition changes: the player must reach a precise fill volume, not merely overflow the glass. Precision becomes load-bearing. The spatial drawing mechanic now drives a fundamentally different reasoning process — estimation, not just routing.",
        mechanics: ["volume constraint", "draw line", "pressure routing"],
        status: ["playable", "structural shift"],
        scores: { creativity: "7.2", playability: "7.2", reward: "0.39", plan: "0.77" },
        playUrl: "./game_demo/happy_glass/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        delta: "solution order determines physical outcome",
        note:
          "Pressure gates require specific fill sequences: water in glass A unlocks a valve that redirects to glass B under pressure. The challenge is now a multi-step planning problem where drawing order, volume, and routing interact. This exemplifies the project distinction between cosmetic change and genuine challenge reconfiguration.",
        mechanics: ["chain routing", "pressure gate", "sequence planning"],
        status: ["playable", "best version"],
        scores: { creativity: "8.2", playability: "7.0", reward: "0.46", plan: "0.86" },
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
      "A co-op traversal lineage built on M041 (simultaneous dual-character coordination) combined with M020 (timed jump traversal). The base game already requires joint coordination, but the two characters operate independently. The lineage shows how coupling their states more tightly produces emergent co-op challenge from the recombination rather than from new features added in parallel.",
    variant: "variant-stealth",
    stages: [
      {
        title: "Base",
        chip: "initial",
        delta: "dual character with elemental platforms",
        note:
          "The base loop requires both characters to reach their respective exits. Each character navigates independently through elemental terrain. Co-op is a constraint on movement, not yet a structural mechanic coupling.",
        mechanics: ["dual character", "elemental platform", "cooperative routing"],
        status: ["playable", "clear loop"],
        scores: { creativity: "4.5", playability: "8.0", reward: "0.17", plan: "n/a" },
        playUrl: "./game_demo/fireboy_and_watergirl/v1.html"
      },
      {
        title: "Round 2",
        chip: "checkpoint",
        delta: "action transfer introduced",
        note:
          "One character's action now directly unlocks paths for the other — a gate opened by Fireboy's pressure plate becomes passable only for Watergirl. Coordination is now mechanically enforced rather than only spatially implied.",
        mechanics: ["dual character", "action transfer", "elemental gate"],
        status: ["playable", "partial coupling"],
        scores: { creativity: "5.9", playability: "7.5", reward: "0.26", plan: "0.50" },
        playUrl: "./game_demo/fireboy_and_watergirl/v2.html"
      },
      {
        title: "Round 3",
        chip: "checkpoint",
        delta: "temporal offset makes coordination the core challenge",
        note:
          "Characters operate with a timing offset: Watergirl's position ten seconds ago becomes a physics object that Fireboy must interact with. Route planning now requires reasoning about both space and time simultaneously.",
        mechanics: ["temporal offset", "elemental coupling", "route dependency"],
        status: ["playable", "recombination visible"],
        scores: { creativity: "7.1", playability: "7.2", reward: "0.37", plan: "0.75" },
        playUrl: "./game_demo/fireboy_and_watergirl/v3.html"
      },
      {
        title: "Round 4",
        chip: "final",
        delta: "shared physics state fully recombines both characters",
        note:
          "Character element state now propagates into shared world physics: Fireboy heating a platform affects its buoyancy for Watergirl. The two independent traversal systems have become one coupled system. The lineage result is a game whose identity could not have been reached by feature addition alone.",
        mechanics: ["state coupling", "elemental sync", "dual-axis coordination"],
        status: ["playable", "high novelty"],
        scores: { creativity: "8.0", playability: "7.0", reward: "0.44", plan: "0.85" },
        playUrl: "./game_demo/fireboy_and_watergirl/v4.html"
      }
    ]
  }
];

const board = document.getElementById("demo-board");
const filters = document.querySelectorAll(".filter-chip");

function buildScoreBox(label, value) {
  return `
    <div class="score-box">
      <span class="score-label">${label}</span>
      <span class="score-value">${value}</span>
    </div>
  `;
}

function buildDemoCell(stage, variant) {
  const preview = stage.playUrl
    ? `<div class="game-preview-wrap">
         <iframe src="${stage.playUrl}" scrolling="no" class="game-preview-frame" loading="lazy" tabindex="-1"></iframe>
       </div>`
    : "";
  const playBtn = stage.playUrl
    ? `<a class="play-btn" href="${stage.playUrl}" target="_blank" rel="noopener">▶ Play</a>`
    : "";

  return `
    <article class="demo-cell">
      <div class="demo-stage">
        <h4>${stage.title}</h4>
        <span class="stage-chip" data-chip="${stage.chip}">${stage.chip}</span>
      </div>
      <div class="demo-visual ${variant}">
        ${preview}
        ${playBtn}
      </div>
      <div class="demo-mechanics">
        ${stage.mechanics.map((item) => `<span class="token">${item}</span>`).join("")}
      </div>
      <p><strong>Delta:</strong> ${stage.delta}</p>
      <p>${stage.note}</p>
      <div class="demo-status">
        ${stage.status.map((item) => `<span class="token status">${item}</span>`).join("")}
      </div>
      <div class="scores">
        ${buildScoreBox("Creativity", stage.scores.creativity)}
        ${buildScoreBox("Playability", stage.scores.playability)}
        ${buildScoreBox("Reward", stage.scores.reward)}
        ${buildScoreBox("Plan Match", stage.scores.plan)}
      </div>
    </article>
  `;
}

function buildDemoRow(item) {
  return `
    <section class="demo-row" data-filter="${item.filter}">
      <div class="demo-row-head">
        <div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
        </div>
        <span class="role-badge">${item.role}</span>
      </div>
      <div class="demo-grid">
        ${item.stages.map((stage) => buildDemoCell(stage, item.variant)).join("")}
      </div>
    </section>
  `;
}

function renderBoard(filter = "all") {
  board.innerHTML = demoCases.map(buildDemoRow).join("");
  const rows = board.querySelectorAll(".demo-row");
  rows.forEach((row) => {
    const matched = filter === "all" || row.dataset.filter === filter;
    row.hidden = !matched;
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderBoard(button.dataset.filter);
  });
});

renderBoard();
