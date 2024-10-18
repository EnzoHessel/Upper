import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowDownCircleIcon } from 'lucide-react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalBaixarAppProps {
  onClose: () => void;
  isOpen: boolean;
}

const ModalBaixarApp: React.FC<ModalBaixarAppProps> = ({ onClose, isOpen }) => {
  const t = useTranslations('ModalBaixarApp');

  return (
    <div
      className={clsx(
        "fixed top-0 right-0 z-50 w-full h-full flex justify-end bg-black bg-opacity-50 transition-transform duration-300 ease-in-out",
        {
          "translate-x-0": isOpen,
          "translate-x-full": !isOpen
        }
      )}
    >
      <div className='pt-16 px-4 md:px-16 lg:px-4 bg-background md:w-full lg:max-w-[557px] w-full text-white'>
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <XMarkIcon className="size-6 text-primary-foreground" />
        </button>
        <div className="flex flex-col gap-4 pb-4">
          <h4>{t('title')}</h4>
          <span className='text-2xl text-[hsl(var(--secondary-content))]'>{t('description')}</span>
          <div className="relative w-[169px] h-[169px]" >
            <Image src="/qrCode.png" fill className="contain" alt='fill' />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-[10px] items-center pt-4 border-t border-[hsl(var(--border-secundary))]">
            <ArrowDownCircleIcon className="size-6 text-primary-foreground" />
            <h4>{t("baixe")}</h4>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-4">
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
    </div>
  );
};

export default ModalBaixarApp;
