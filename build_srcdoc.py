"""Generate game_srcdoc.js — embeds all 16 game HTML files as srcdoc strings."""
import os, html, json

BASE = r"C:\Users\cu20425\OneDrive - University of Bristol\Desktop\Project_UoB\CreativeGame_new_pipline\project_web_CreativeGame\game_demo"
OUT  = r"C:\Users\cu20425\OneDrive - University of Bristol\Desktop\Project_UoB\CreativeGame_new_pipline\project_web_CreativeGame\game_srcdoc.js"

GAMES = ["fireboy_and_watergirl", "flappy_bird", "happy_glass", "plants_vs_zombies"]

data = {}
for g in GAMES:
    data[g] = {}
    for v in range(1, 5):
        path = os.path.join(BASE, g, f"v{v}.html")
        if os.path.exists(path):
            content = open(path, encoding="utf-8").read()
            data[g][f"v{v}"] = html.escape(content, quote=True)
            print(f"  {g}/v{v}: {len(content)//1024}KB")
        else:
            data[g][f"v{v}"] = ""
            print(f"  {g}/v{v}: MISSING")

js = "const GAME_SRCDOC = " + json.dumps(data, ensure_ascii=False) + ";\n"
open(OUT, "w", encoding="utf-8").write(js)
print(f"\nWritten: {len(js)//1024}KB -> {OUT}")
