import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function HamburguerMenu() {
  const t = useTranslations('HamburguerMenu');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bars3Icon className="size-7 text-primary-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="uppercase">
        <DropdownMenuLabel>{t('title')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>{t('home')}</DropdownMenuItem>
        <DropdownMenuItem>{t('paraVoce')}</DropdownMenuItem>
        <DropdownMenuItem>{t('paraSuaEmpresa')}</DropdownMenuItem>
        <DropdownMenuItem>{t('temNoUpper')}</DropdownMenuItem>
        <DropdownMenuItem>{t('educacaoFinanceira')}</DropdownMenuItem>
        <DropdownMenuItem>{t('ajuda')}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
