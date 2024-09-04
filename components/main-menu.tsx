import styles from '@/styles/main-menu.module.css'
import { Button } from './ui/button';
import Image from 'next/image';
import HamburguerMenu from './hamburguer-menu';

export default function MainMenu(){
    return(
        <nav className={styles.mainMenuContainer}>
            <div className={styles.mainMenuContent}>
                <Image src={"logo-horizontal-upper.svg"} alt='logo' width={119} height={100}/>
                <div className={styles.buttonsContainer}>
                    <Button variant={"link"} className='p-0'><span>TEM NO UPPER</span></Button>
                    <Button variant={"link"} className='p-0'><span>EDUCAÇÃO FINANCEIRA</span></Button>
                    <Button variant={"link"} className='p-0'><span>AJUDA</span></Button>
                </div>
                <Button variant={"default"} size={"lg"} className={styles.buttonAbrirConta}><span>Abrir conta</span></Button>
                <div className={styles.hamburguerMenu}>
                    <HamburguerMenu/>
                </div>
            </div>
        </nav>
    );
}