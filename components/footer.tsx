import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Button } from './ui/button';
import { Link } from '@/navigation';

// Componente para renderizar cada seção
interface SectionProps {
  title: string;
  items: { text: string; text2?: string; href: string }[];
}

interface CommunicationSectionProps {
  title: string;
  items: { text: string; text2?: string }[];
}

function Section({ title, items }: SectionProps) {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm text-[hsl(var(--secondary-content))] font-medium">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <Button
            variant={'link'}
            key={idx}
            className="px-0 justify-start py-0"
          >
            <Link href={item.href} locale={locale}>
              <p>{item.text}</p>
            </Link>
          </Button>
        ))}
      </ul>
    </div>
  );
}

function CommunicationSections({ title, items }: CommunicationSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm text-[hsl(var(--secondary-content))] font-medium">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="font-medium text-[hsl(var(--secondary-content))]"
          >
            {item.text}
            {item.text2 && (
              <p className="font-medium text-[hsl(var(--secondary-content))]">
                {item.text2}
              </p>
            )}
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
        { text: t('informacoes.Privacidade'), href: '/privacidade' },
        { text: t('informacoes.Segurança'), href: '/politica-de-seguranca' },
        { text: t('informacoes.Financeiros'), href: '/financeiros' },
        { text: t('informacoes.sac'), href: '/sac' },
      ],
    },
    {
      title: t('Empresa.title'),
      items: [
        { text: t('Empresa.Sobre'), href: '/sobre-o-upper' },
        { text: t('Empresa.Carreiras'), href: '/#' },
      ],
    },
  ],
  communicationSections: [
    {
      title: t('Comunicação.title'),
      items: [
        { text: t('Comunicação.Central'), text2: t('Comunicação.numCentral') },
        {
          text: t('Comunicação.atendimento'),
          text2: t('Comunicação.AtendimentoEmail'),
        },
        {
          text: t('Comunicação.Sugestoes'),
          text2: t('Comunicação.SugestoesEmail'),
        },
      ],
    },
  ],
});

export default function Footer() {
  const t = useTranslations('Footer');
  const { sections, communicationSections } = getFooterData(t);

  return (
    <footer className="bg-foreground w-full pt-16 pb-60 px-8 md:px-16 z-0">
      <div className="flex flex-wrap mx-auto w-full max-w-[1000px] text-white gap-8 md:gap-10 lg:gap-16">
        {/* Logo e Descrição */}
        <div className="flex flex-col gap-8">
          <div className="relative h-[37px] w-[119px]">
            <Image
              src="/logo-horizontal-upper.svg"
              alt="Logo"
              fill
              quality={100}
              className="object-cover"
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
                loading="lazy"
                draggable={false}
              />
              <Image
                src="/app-store-badge.svg"
                alt="App Store"
                loading="lazy"
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
            <CommunicationSections
              key={index}
              title={section.title}
              items={section.items}
            />
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

          {/* TODO colocar hover e links */}
          <div className="flex gap-6 items-start order-1 lg:order-none">
            <Link href="#">
              <FaLinkedin
                size={24}
                className="text-[#9D9D9D] hover:text-white duration-200"
              />
            </Link>
            <Link href="#">
              <FaFacebook
                size={24}
                className="text-[#9D9D9D] hover:text-white duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
