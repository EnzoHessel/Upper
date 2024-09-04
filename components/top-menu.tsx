import styles from '@/styles/top-menu.module.css';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

export default function TopMenu(){
    const t = useTranslations('TopMenu');

    return(
        <nav className={styles.topMenuContainer}>
            <div className={styles.topMenuContent}>
                <Button variant={"link"} className='p-0'><span>{t("paraVoce")}</span></Button>
                <Button variant={"link"} className='p-0'><span>{t("paraSuaEmpresa")}</span></Button>
            </div>
        </nav>
    );
}