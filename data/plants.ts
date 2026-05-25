import type { PlantCategory } from "@/lib/types";

export const plantCategories: PlantCategory[] = [
  {
    id: "pots",
    title: "화분",
    description: "실내와 테라스, 작은 정원에 어울리는 화분 구성을 차분하게 소개합니다.",
    useCase: "가정, 카페, 작은 정원",
    badge: "기본 셀렉션",
    tone:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(243,239,232,0.96))]",
  },
  {
    id: "saplings",
    title: "묘목",
    description: "마당과 텃밭, 전원주택 주변에 어울리는 묘목 정보를 정리합니다.",
    useCase: "마당, 전원주택, 텃밭",
    badge: "방문 문의 많음",
    tone:
      "bg-[linear-gradient(180deg,rgba(250,250,246,0.98),rgba(230,238,228,0.94))]",
  },
  {
    id: "landscape-trees",
    title: "조경수",
    description: "공간의 첫인상을 정리해 주는 조경수와 진입 식물 구성을 안내합니다.",
    useCase: "매장 앞, 정원, 진입 공간",
    badge: "공간 연출",
    tone:
      "bg-[linear-gradient(180deg,rgba(248,246,241,0.98),rgba(226,232,223,0.9))]",
  },
  {
    id: "seasonal-plants",
    title: "계절 식물",
    description: "계절 분위기에 따라 가볍게 둘러볼 수 있는 식물 구성을 준비합니다.",
    useCase: "계절 장식, 선물, 현관 주변",
    badge: "시즌 셀렉션",
    tone:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,235,226,0.95))]",
  },
];
