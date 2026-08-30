import {
  getResourceProfile,
  type ResourceFormat,
  type ResourceProfile,
} from "../data/resource-profiles.ts";

interface MarkdownNode {
  type: string;
  url?: string;
  value?: string;
  children?: MarkdownNode[];
  data?: Record<string, unknown>;
}

const formatLabels: Record<ResourceFormat, string> = {
  "basic-rules": "Basic rules",
  "complete-game": "Complete game",
  playtest: "Playtest",
  quickstart: "Quickstart",
  "rules-preview": "Rules preview",
  "starter-set": "Starter set",
  "test-drive": "Test drive",
  "virtual-tabletop": "VTT",
  "in-person-vtt": "In-person VTT",
};

const availabilityLabels = {
  free: "Free",
  "free-tier": "Free tier",
  paid: "Paid",
} as const;

function getBadges(profile: ResourceProfile) {
  return [
    {
      label: availabilityLabels[profile.availability],
      kind: profile.availability === "free-tier" ? "free" : profile.availability,
    },
    { label: formatLabels[profile.format], kind: "format" },
    ...profile.genres.map((genre) => ({ label: genre, kind: "genre" })),
    ...(profile.platforms ?? []).map((platform) => ({
      label: platform,
      kind: "platform",
    })),
    ...(profile.playModes ?? []).map((mode) => ({
      label: mode,
      kind: "mode",
    })),
    ...(profile.features ?? []).map((feature) => ({
      label: feature,
      kind: "feature",
    })),
    ...(profile.gmReady ? [{ label: "GM-ready", kind: "ready" }] : []),
  ];
}

function createProfileNode(profile: ResourceProfile): MarkdownNode {
  const badges = getBadges(profile);
  const checkedDate = new Date(`${profile.lastChecked}T00:00:00Z`);
  const checkedLabel = checkedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return {
    type: "resourceProfile",
    data: {
      hName: "span",
      hProperties: {
        className: ["resource-profile"],
        title: `Profile last checked ${checkedLabel}`,
        "data-resource-id": profile.id,
      },
      hChildren: badges.map((badge) => ({
        type: "element",
        tagName: "span",
        properties: {
          className: [
            "resource-profile-badge",
            `resource-profile-badge--${badge.kind}`,
          ],
        },
        children: [{ type: "text", value: badge.label }],
      })),
    },
  };
}

function addProfiles(node: MarkdownNode): void {
  if (!node.children) return;

  for (let index = 0; index < node.children.length; index += 1) {
    const child = node.children[index];

    if (child.type === "link" && child.url) {
      const profile = getResourceProfile(child.url);

      if (profile) {
        node.children.splice(
          index + 1,
          0,
          { type: "text", value: " " },
          createProfileNode(profile),
        );
        index += 2;
      }
    }

    addProfiles(child);
  }
}

export default function remarkResourceProfiles() {
  return (tree: MarkdownNode) => addProfiles(tree);
}
