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
  note: string;
};

export type UtilityLink = {
  id: string;
  label: string;
  href: string;
  kind: "phone" | "kakao" | "map" | "search";
  external?: boolean;
};

export type FeatureCard = {
  id: string;
  title: string;
  href: `#${SectionId}` | "#top";
  image: string;
  alt: string;
};

export type InquiryAction = {
  id: string;
  label: string;
  href: string;
  style: "solid" | "outline";
  external?: boolean;
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
  headerNote: string;
  utilityLinks: UtilityLink[];
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBody: string;
  heroImageAlt: string;
  heroPrimaryCtaLabel: string;
  heroSecondaryCtaLabel: string;
  heroOverlayEyebrow: string;
  heroOverlayTitle: string;
  heroOverlayBody: string;
  featureCards: FeatureCard[];
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
  locationPanelEyebrow: string;
  locationPanelTitle: string;
  locationNotes: string[];
  inquiryTitle: string;
  inquiryDescription: string;
  inquiryActions: InquiryAction[];
  directionsCtaLabel: string;
  kakaoCtaLabel: string;
  footerCopyright: string;
};

export type PlantCategory = {
  id: string;
  title: string;
  description: string;
  useCase: string;
  badge: string;
  tone: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  eyebrow: string;
  feature?: boolean;
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
