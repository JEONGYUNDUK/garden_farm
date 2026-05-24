export const sectionIds = {
  about: "about",
  highlights: "highlights",
  plants: "plants",
  gallery: "gallery",
  guides: "guides",
  news: "news",
  location: "location",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export type NavItem = {
  id: SectionId;
  label: string;
};

export type SiteHighlight = {
  label: string;
  value: string;
};

export type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export type SiteCopy = {
  name: string;
  subtitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroImageAlt: string;
  heroPrimaryCtaLabel: string;
  heroSecondaryCtaLabel: string;
  locationLabel: string;
  phone: string;
  directionsUrl: string;
  kakaoUrl: string;
  introTitle: string;
  introBody: string;
  introPoints: [string, string];
  highlightsTitle: string;
  highlightsBody: string;
  highlights: SiteHighlight[];
  plantsSection: SectionCopy;
  gallerySection: SectionCopy;
  guideSection: SectionCopy;
  newsSection: SectionCopy;
  locationSection: SectionCopy;
  locationDetail: string;
};

export type PlantCategory = {
  id: string;
  title: string;
  description: string;
  useCase: string;
  badge: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type GuideItem = {
  id: string;
  title: string;
  description: string;
  point: string;
};

export type NewsItem = {
  id: string;
  title: string;
  description: string;
  dateLabel: `${number}.${number}`;
  publishedAt: `${number}-${number}-${number}`;
};
