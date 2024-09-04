import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AcademicCapIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

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
        <DropdownMenuItem>
          <HomeIcon className="text-primary-foreground size-5" /> {t('home')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserIcon className="text-primary-foreground size-5" />
          {t('paraVoce')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BuildingOffice2Icon className="text-primary-foreground size-5" />
          {t('paraSuaEmpresa')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <BuildingLibraryIcon className="text-primary-foreground size-5" />
          {t('temNoUpper')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <AcademicCapIcon className="text-primary-foreground size-5" />
          {t('educacaoFinanceira')}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <QuestionMarkCircleIcon className="text-primary-foreground size-5" />
          {t('ajuda')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
