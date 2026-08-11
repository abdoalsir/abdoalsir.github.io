export const CATEGORIES = [
  { slug: "all", label: "All" },
  { slug: "infectious-disease", label: "Infectious Disease", color: "#0d9488" },
  { slug: "mental-health", label: "Mental Health", color: "#7c3aed" },
  { slug: "non-communicable-diseases", label: "Non-Communicable Diseases", color: "#ea580c" },
  { slug: "medical-education", label: "Medical Education", color: "#2563eb" },
  { slug: "maternal-child-health", label: "Maternal & Child Health", color: "#db2777" },
  { slug: "healthcare-systems", label: "Healthcare Systems", color: "#16a34a" },
];

export function categoryColor(slug) {
  const found = CATEGORIES.find((c) => c.slug === slug);
  return found ? found.color : "#64748b";
}

export function categoryLabel(slug) {
  const found = CATEGORIES.find((c) => c.slug === slug);
  return found ? found.label : slug;
}
