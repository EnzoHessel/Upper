import { useTranslations } from "next-intl";
import Image from "next/image";

// Componente para renderizar cada seção
interface SectionProps {
  title: string;
  items: { text: string; text2?: string }[];
}

function Section({ title, items }: SectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm text-[hsl(var(--secondary-content))] font-medium">{title}</h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <li key={idx} className="font-medium">
            {item.text}
            {item.text2 && <p className="font-medium">{item.text2}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Dados das seções separados do componente
const getFooterData = (t: (key: string) => string) => ({
  sections: [
    {
      title: t('informacoes.title'),
      items: [
        { text: t('informacoes.Privacidade') },
        { text: t('informacoes.Segurança') },
        { text: t('informacoes.Financeiros') },
        { text: t('informacoes.sac') },
      ],
    },
    {
      title: t('Empresa.title'),
      items: [
        { text: t('Empresa.Sobre') },
        { text: t('Empresa.Carreiras') },
      ],
    },
  ],
  communicationSections: [
    {
      title: t('Comunicação.title'),
      items: [
        { text: t('Comunicação.Central'), text2: t('Comunicação.numCentral') },
        { text: t('Comunicação.atendimento'), text2: t('Comunicação.AtendimentoEmail') },
        { text: t('Comunicação.Sugestoes'), text2: t('Comunicação.SugestoesEmail') },
      ],
    },
  ],
});

export default function Footer() {
  const t = useTranslations('Footer');
  const { sections, communicationSections } = getFooterData(t);

  return (
    <footer className="bg-foreground w-full pt-16 pb-60 px-8 md:px-16">
      <div className="flex flex-wrap mx-auto w-full max-w-[1000px] text-white gap-8 md:gap-10 lg:gap-16">
        {/* Logo e Descrição */}
        <div className="flex flex-col gap-8">
          <div className="relative h-[37px] w-[119px]">
            <Image
              src="/logo-horizontal-upper.svg"
              alt="Logo"
              fill
              quality={100}
              draggable={false}
            />
          </div>
          <p className="text-sm font-medium">{t('description')}</p>
          <div>
            <p className="text-sm font-medium text-[hsl(var(--secondary-content))]">
              {t('download')}
            </p>
            <div className="flex justify-center md:justify-start gap-5 pt-4">
              <Image
                src="/google-play-badge.svg"
                alt="Google Play"
                width={150}
                height={44}
                quality={100}
                draggable={false}
              />
              <Image
                src="/app-store-badge.svg"
                alt="App Store"
                width={150}
                height={44}
                quality={100}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Seções do Footer */}
        <div className="flex flex-wrap gap-8">
          {sections.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
          {communicationSections.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
        </div>

        {/* Rodapé inferior */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          <div className="flex flex-col gap-[10px] order-2 lg:order-none">
            <p className="text-sm text-[hsl(var(--secondary-content))] font-medium max-w-[896px]">
              {t('segundaDescription')}
            </p>
            <p className="text-sm text-[hsl(var(--secondary-content))] font-medium max-w-[896px]">
              {t('CopyRight')}
            </p>
          </div>

          {/* Ícones de redes sociais */}
          <div className="flex gap-6 items-start order-1 lg:order-none">
            <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
