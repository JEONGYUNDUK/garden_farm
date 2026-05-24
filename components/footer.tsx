import { siteCopy } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <Container className="flex flex-col gap-4 text-sm text-stone-600 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-stone-900">{siteCopy.name}</p>
          <p>{siteCopy.locationLabel}</p>
        </div>
        <p>
          정성껏 준비한 식물과 공간을 차분히 소개하는 영천 농원 홈페이지입니다.
        </p>
      </Container>
    </footer>
  );
}
