import { sectionIds, type NavItem } from "@/lib/types";

export const navigationItems: NavItem[] = [
  { id: sectionIds.about, label: "농원 소개" },
  { id: sectionIds.highlights, label: "농원 강점" },
  { id: sectionIds.plants, label: "식물 안내" },
  { id: sectionIds.gallery, label: "농원 둘러보기" },
  { id: sectionIds.guides, label: "관리 팁" },
  { id: sectionIds.news, label: "농원 소식" },
  { id: sectionIds.location, label: "오시는 길" },
];
