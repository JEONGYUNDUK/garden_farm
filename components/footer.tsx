import { navigationItems } from "@/data/navigation";
import { siteCopy } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-[color:var(--footer-bg)] py-14 text-[color:var(--footer-fg)] sm:py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_0.9fr]">
          <div>
            <p className="font-editorial text-4xl text-white">{siteCopy.name}</p>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              경북 영천 화산 효정리 화분·묘목 농원
            </p>
          </div>
          <div className="text-sm leading-7 text-stone-300">
            <p className="text-base font-semibold text-white">농원 정보</p>
            <p className="mt-3">{siteCopy.locationLabel}</p>
            <a href={`tel:${siteCopy.phone}`} className="mt-1 inline-flex text-white">
              {siteCopy.phone}
            </a>
          </div>
          <div className="text-sm leading-7 text-stone-300">
            <p className="text-base font-semibold text-white">바로가기</p>
            <div className="mt-3 flex flex-col gap-1">
              {navigationItems.slice(0, 4).map((item) => (
                <a key={item.id} href={`#${item.id}`} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-stone-400">
          {siteCopy.footerCopyright}
        </div>
      </Container>
    </footer>
  );
}
