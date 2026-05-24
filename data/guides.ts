import type { GuideItem } from "@/lib/types";

export const guideItems: GuideItem[] = [
  {
    id: "watering-basics",
    title: "물주기 기본",
    description: "겉흙이 마른 뒤 충분히 물을 주는 기본 원칙을 안내합니다.",
    point: "과습보다 관찰이 먼저입니다.",
  },
  {
    id: "sunlight-position",
    title: "햇빛 위치",
    description: "식물 종류에 따라 반양지와 양지의 차이를 쉽게 설명합니다.",
    point: "처음 일주일은 환경 적응 기간입니다.",
  },
  {
    id: "seasonal-care",
    title: "계절 관리",
    description: "봄과 가을 중심으로 분갈이와 성장 시기를 소개합니다.",
    point: "겨울에는 물 양을 조금 줄입니다.",
  },
];
