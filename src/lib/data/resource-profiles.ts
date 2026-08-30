export type ResourceAvailability = "free" | "free-tier" | "paid";

export type ResourceFormat =
  | "basic-rules"
  | "complete-game"
  | "playtest"
  | "quickstart"
  | "rules-preview"
  | "starter-set"
  | "test-drive"
  | "virtual-tabletop"
  | "in-person-vtt";

export interface ResourceProfile {
  id: string;
  urls: string[];
  availability: ResourceAvailability;
  format: ResourceFormat;
  genres: string[];
  platforms?: string[];
  gmReady?: boolean;
  playModes?: string[];
  features?: string[];
  lastChecked: string;
}

export const resourceProfiles: ResourceProfile[] = [
  {
    id: "ironsworn-digital-edition",
    urls: ["https://tomkinpress.com/products/ironsworn-digital-edition"],
    availability: "free",
    format: "complete-game",
    genres: ["Dark fantasy"],
    platforms: ["PDF"],
    gmReady: true,
    playModes: ["Solo", "Co-op", "Guided"],
    lastChecked: "2026-08-30",
  },
  {
    id: "shadowdark-quickstart",
    urls: [
      "https://www.thearcanelibrary.com/products/shadowdark-rpg-quickstart-set-pdf",
    ],
    availability: "free",
    format: "quickstart",
    genres: ["Fantasy"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "nimble-basic-rules",
    urls: ["https://nimblerpg.com/pages/start"],
    availability: "free",
    format: "basic-rules",
    genres: ["Fantasy"],
    platforms: ["PDF", "Web"],
    lastChecked: "2026-08-30",
  },
  {
    id: "mutant-year-zero-starter-booklet",
    urls: [
      "https://www.drivethrurpg.com/en/product/188014/mutant-year-zero-starter-booklet",
    ],
    availability: "free",
    format: "quickstart",
    genres: ["Post-apocalyptic"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "icrpg-quickstart",
    urls: [
      "https://icrpgcommunitycontent.com/product/index-card-rpg-free-quickstart/",
    ],
    availability: "free",
    format: "quickstart",
    genres: ["Multi-genre"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "dc20-free-rules",
    urls: ["https://thedungeoncoach.com/pages/dc20-free-downloads"],
    availability: "free",
    format: "playtest",
    genres: ["Fantasy"],
    platforms: ["PDF"],
    lastChecked: "2026-08-30",
  },
  {
    id: "savage-worlds-test-drive",
    urls: [
      "https://peginc.com/product/deadlands-the-weird-west-blood-on-the-range-savage-worlds-test-drive-swade",
    ],
    availability: "free",
    format: "test-drive",
    genres: ["Weird west"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "fabula-ultima-press-start",
    urls: [
      "https://www.drivethrurpg.com/en/product/411240/fabula-ultima-ttjrpg-press-start",
    ],
    availability: "free",
    format: "quickstart",
    genres: ["JRPG fantasy"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "dnd-basic-rules",
    urls: ["https://www.dndbeyond.com/sources/dnd/br-2024"],
    availability: "free",
    format: "basic-rules",
    genres: ["Fantasy"],
    platforms: ["Web"],
    lastChecked: "2026-08-30",
  },
  {
    id: "mork-borg-bare-bones",
    urls: [
      "https://drive.google.com/file/d/1GcysVYxEklrDCva3gSkYqXvS2vy3Kbdu/view?usp=sharing",
    ],
    availability: "free",
    format: "rules-preview",
    genres: ["Dark fantasy"],
    platforms: ["PDF"],
    lastChecked: "2026-08-30",
  },
  {
    id: "call-of-cthulhu-quickstart",
    urls: ["https://www.chaosium.com/cthulhu-quickstart/"],
    availability: "free",
    format: "quickstart",
    genres: ["Horror"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "daggerheart-quickstart",
    urls: ["https://www.daggerheart.com/getting-started/"],
    availability: "free",
    format: "quickstart",
    genres: ["Fantasy"],
    platforms: ["PDF", "Web"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "dragonbane-quickstart",
    urls: [
      "https://freeleaguepublishing.com/shop/dragonbane/free-quickstart-pdf/",
    ],
    availability: "free",
    format: "quickstart",
    genres: ["Fantasy"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "cyberpunk-red-easy-mode",
    urls: [
      "https://www.drivethrurpg.com/en/product/409912/cyberpunk-red-easy-mode",
    ],
    availability: "free",
    format: "quickstart",
    genres: ["Cyberpunk"],
    platforms: ["PDF"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "dnd-heroes-of-the-borderlands",
    urls: ["https://marketplace.dndbeyond.com/category/4705000"],
    availability: "paid",
    format: "starter-set",
    genres: ["Fantasy"],
    platforms: ["Physical", "Digital"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "pathfinder-beginner-box",
    urls: [
      "https://store.paizo.com/pathfinder-beginner-box-secrets-of-the-unlit-star/",
    ],
    availability: "paid",
    format: "starter-set",
    genres: ["Fantasy"],
    platforms: ["Physical"],
    gmReady: true,
    lastChecked: "2026-08-30",
  },
  {
    id: "owlbear-rodeo",
    urls: ["https://owlbear.rodeo"],
    availability: "free-tier",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Web"],
    features: ["Lightweight"],
    lastChecked: "2026-08-30",
  },
  {
    id: "gamescape",
    urls: ["https://gamescape.app"],
    availability: "free",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Web"],
    features: ["Lightweight"],
    lastChecked: "2026-08-30",
  },
  {
    id: "above-vtt",
    urls: ["https://abovevtt.net/"],
    availability: "free",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Browser extension"],
    features: ["D&D Beyond"],
    lastChecked: "2026-08-30",
  },
  {
    id: "foundry-vtt",
    urls: ["https://foundryvtt.com"],
    availability: "paid",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Desktop host", "Web players"],
    features: ["Self-hosted"],
    lastChecked: "2026-08-30",
  },
  {
    id: "roll20",
    urls: ["https://roll20.net"],
    availability: "free-tier",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Web"],
    lastChecked: "2026-08-30",
  },
  {
    id: "fantasy-grounds",
    urls: ["https://www.fantasygrounds.com"],
    availability: "paid",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Desktop"],
    features: ["Rules automation"],
    lastChecked: "2026-08-30",
  },
  {
    id: "quest-portal",
    urls: ["https://www.questportal.com/home"],
    availability: "free-tier",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Web", "iOS", "Android"],
    lastChecked: "2026-08-30",
  },
  {
    id: "alchemy-rpg",
    urls: ["https://alchemyrpg.com"],
    availability: "free",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Web", "Desktop"],
    features: ["Cinematic"],
    lastChecked: "2026-08-30",
  },
  {
    id: "lets-role",
    urls: ["https://lets-role.com"],
    availability: "free",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Web", "Mobile"],
    features: ["System builder"],
    lastChecked: "2026-08-30",
  },
  {
    id: "shard-tabletop",
    urls: ["https://www.shardtabletop.com"],
    availability: "free-tier",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Web"],
    features: ["D&D 5e"],
    lastChecked: "2026-08-30",
  },
  {
    id: "encounter-plus",
    urls: ["https://encounter.plus"],
    availability: "free-tier",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["iPhone", "iPad", "Mac"],
    features: ["Offline-first"],
    lastChecked: "2026-08-30",
  },
  {
    id: "d20pro",
    urls: ["https://d20pro.com"],
    availability: "paid",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Desktop"],
    features: ["Tactical"],
    lastChecked: "2026-08-30",
  },
  {
    id: "talespire",
    urls: ["https://talespire.com/"],
    availability: "paid",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Steam"],
    features: ["3D"],
    lastChecked: "2026-08-30",
  },
  {
    id: "tabletop-simulator",
    urls: ["https://www.tabletopsimulator.com"],
    availability: "paid",
    format: "virtual-tabletop",
    genres: [],
    platforms: ["Steam"],
    features: ["3D sandbox"],
    lastChecked: "2026-08-30",
  },
  {
    id: "arkenforge",
    urls: ["https://arkenforge.com"],
    availability: "paid",
    format: "in-person-vtt",
    genres: [],
    platforms: ["Desktop"],
    features: ["In-person"],
    lastChecked: "2026-08-30",
  },
  {
    id: "table-slayer",
    urls: ["https://tableslayer.com/"],
    availability: "free-tier",
    format: "in-person-vtt",
    genres: [],
    platforms: ["Web"],
    features: ["In-person", "Self-hostable"],
    lastChecked: "2026-08-30",
  },
];

function normalizeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return url.replace(/\/$/, "");
  }
}

const profilesByUrl = new Map(
  resourceProfiles.flatMap((profile) =>
    profile.urls.map((url) => [normalizeUrl(url), profile] as const),
  ),
);

export function getResourceProfile(url: string): ResourceProfile | undefined {
  return profilesByUrl.get(normalizeUrl(url));
}
