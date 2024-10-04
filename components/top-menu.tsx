import styles from '@/styles/top-menu.module.css';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { Link } from '@/navigation';

export default function TopMenu() {
  const t = useTranslations('TopMenu');
  const locale = useLocale();

  return (
    <nav className={styles.topMenuContainer}>
      <div className={styles.topMenuContent}>
        <Button variant={'link'} className="p-0">
          <Link href={'/foryou'} locale={locale}>
            <span>{t('paraVoce')}</span>
          </Link>
        </Button>
        <Button variant={'link'} className="p-0">
          <Link href={'/for-your-company'} locale={locale}>
            <span>{t('paraSuaEmpresa')}</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
