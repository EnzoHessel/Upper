import {
  AcademicCapIcon,
  ArrowDownCircleIcon,
  Bars3Icon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  HomeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Link } from '@/navigation';
import clsx from 'clsx';

export default function HamburguerMenu() {
  const t = useTranslations('HamburguerMenu');
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { icon: HomeIcon, text: t('home'), href: '/' },
    { icon: UserIcon, text: t('paraVoce'), href: '/para-voce' },
    {
      icon: BuildingOffice2Icon,
      text: t('paraSuaEmpresa'),
      href: '/para-sua-empresa',
    },
    { icon: BuildingLibraryIcon, text: t('temNoUpper'), href: '/tem-no-upper' },
    {
      icon: NewspaperIcon,
      text: t('QuiteSuasDividas'),
      href: '/quite-suas-dividas',
    },
    {
      icon: AcademicCapIcon,
      text: t('educacaoFinanceira'),
      href: '/educacao-financeira',
    },
    { icon: QuestionMarkCircleIcon, text: t('ajuda'), href: '/ajuda' },
  ];

  return (
    <div>
      <Bars3Icon
        className="size-7 text-primary-foreground"
        onClick={toggleMenu}
      />
      <div
        className={clsx(
          'fixed inset-0 bg-[hsl(var(--background))] z-50 p-[30px] md:py-[30px] md:px-16 transition-transform duration-300',
          {
            'transform -translate-x-0': isOpen,
            'transform translate-x-full': !isOpen,
          }
        )}
      >
        <div className="flex justify-between pb-4">
          <div className="flex gap-[10px] items-center">
            <Bars3Icon className="size-6 text-primary-foreground" />
            <h3>{t('title')}</h3>
          </div>
          <div>
            <Button variant={'link'} onClick={toggleMenu}>
              <XMarkIcon className="size-6 text-primary-foreground" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 border-b border-[hsl(var(--border-secundary))] pb-4">
          {options.map((option, index) => (
            <Button
              variant={'link'}
              key={index}
              className="px-0"
              onClick={toggleMenu}
            >
              <Link
                href={option.href}
                locale={locale}
                className="flex gap-[10px] px-0 items-center py-3 uppercase"
              >
                <option.icon className="size-6 text-primary-foreground" />
                <p>{option.text}</p>
              </Link>
            </Button>
          ))}
        </div>
        <div>
          <div className="flex gap-[10px] items-center py-7">
            <ArrowDownCircleIcon className="size-6 text-primary-foreground" />
            <h4>{t('baixe')}</h4>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
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
              width={150}
              height={44}
              quality={100}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
