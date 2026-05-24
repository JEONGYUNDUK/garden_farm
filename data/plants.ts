import type { PlantCategory } from "@/lib/types";

export const plantCategories: PlantCategory[] = [
  {
    id: "pots",
    title: "화분",
    description: "실내와 야외에 어울리는 화분을 정갈하게 소개합니다.",
    useCase: "가정, 카페, 작은 정원",
    badge: "관리 쉬움",
  },
  {
    id: "saplings",
    title: "묘목",
    description: "전원주택 마당과 텃밭에 어울리는 묘목 정보를 담습니다.",
    useCase: "마당, 전원주택, 텃밭",
    badge: "계절 추천",
  },
  {
    id: "landscape-plants",
    title: "조경용 식물",
    description: "공간 분위기를 정리해 주는 조경용 식물을 살펴볼 수 있습니다.",
    useCase: "매장 앞, 정원, 진입 공간",
    badge: "현장감",
  },
];
