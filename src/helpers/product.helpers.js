export const CATEGORY_COLORS = {
  Software: "#1e3a8a",
  Robotics: "#14532d",
  AI: "#1e40af",
  Hardware: "#451a03",
  Security: "#0f172a",
};

export const getProductBgColor = (category, customColor) => {
  if (customColor) return customColor;
  return CATEGORY_COLORS[category] || "#1e3a8a";
};

export const getBadgeColors = (text) => {
  if (!text || typeof text !== "string") {
    return { bg: "#f3f4f6", text: "#374151" };
  }
  switch (text.toLowerCase()) {
    case "best seller":
      return { bg: "#dcfce7", text: "#15803d" };
    case "new":
      return { bg: "#dbeafe", text: "#1d4ed8" };
    case "popular":
      return { bg: "#f3e8ff", text: "#7e22ce" };
    case "sale":
      return { bg: "#fee2e2", text: "#b91c1c" };
    case "top rated":
      return { bg: "#fef9c3", text: "#b45309" };
    default:
      return { bg: "#f3f4f6", text: "#374151" };
  }
};

export const getLocalizedText = (field, lang = "en") => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || "";
};

export const getLocalizedArray = (field, lang = "en") => {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field.en || [];
};

export const mapProductData = (p, lang = "en") => {
  if (!p) return null;
  const badgeText = getLocalizedText(p.badge, lang);
  return {
    id: p.id,
    name: getLocalizedText(p.name, lang),
    category: getLocalizedText(p.category, lang),
    description: getLocalizedText(p.description, lang),
    badge: badgeText.trim() === "" ? null : badgeText,
    features: getLocalizedArray(p.features, lang),
    reviewsCount: p.reviews ?? p.reviewsCount ?? 0,
    price: p.price || 0,
    rating: p.rating || 0,
    color: p.color || "",
  };
};