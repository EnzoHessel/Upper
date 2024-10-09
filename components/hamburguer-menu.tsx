import { AcademicCapIcon, Bars3Icon, BuildingLibraryIcon, BuildingOffice2Icon, HomeIcon, QuestionMarkCircleIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';


export default function HamburguerMenu() {
  const t = useTranslations('HamburguerMenu');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { icon: HomeIcon, text: t("home") },
    { icon: UserIcon, text: t("paraVoce") },
    { icon: BuildingOffice2Icon, text: t("paraSuaEmpresa") },
    { icon: BuildingLibraryIcon, text: t("educacaoFinanceira") },
    { icon: AcademicCapIcon, text: t("ajuda") },
    { icon: QuestionMarkCircleIcon, text: t("abrirConta") }
  ];

  return (
    <div>
      <Bars3Icon className="size-7 text-primary-foreground" onClick={toggleMenu} />
      {isOpen && (
        <div className="fixed inset-0 bg-[hsl(var(--background))] z-50 p-[30px] md:py-[30px] md:px-16">
          <div className="flex justify-between pb-4">
            <div className="flex gap-[10px] items-center  ">
              <Bars3Icon className="size-6 text-primary-foreground"/>
              <h3>{t("title")}</h3>
            </div>
            <div>
              <Button variant={"link"} onClick={toggleMenu}>
                <XMarkIcon className="size-6 text-primary-foreground" />
              </Button>
            </div>
          </div>
          <div className='flex flex-col items-start gap-4 border-b border-[hsl(var(--border-secundary))] pb-4'>
            {options.map((option, index) => (
              <Button variant={"link"} key={index} className="flex gap-[10px] px-0 items-center py-3">
                <option.icon className="size-6 text-primary-foreground" />
                <p>{option.text}</p>
              </Button>
            ))}
          </div>
          <div>
            <div className=""></div>
            <div className="flex flex-col gap-5 pt-4">
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
      )}
    </div>
  );
}
