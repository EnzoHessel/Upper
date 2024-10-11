import { SectionWithText } from "@/components/section-with-text";
import { useTranslations } from "next-intl";
import styles from '@/styles/home-page.module.css';
import { BriefcaseIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";


export default function Ajuda() {
  const t = useTranslations('ajuda');

  const section = [
    {
      heading: t('section1.content.heading'),
      content: t('section1.content.content')
    },
    {
      heading: t('section1.content.heading2'),
      content: t('section1.content.content2')
    },
    {
      heading: t('section1.content.heading3'),
      content: t('section1.content.content3')
    }
  ]

  const section2 = [
    {
      heading: t('section2.content.heading'),
      content: t('section2.content.content')
    }

  ]

  return (
    <div className={styles.homePageContainer}>
      <section className='flex flex-col gap-8'>
        <div className="flex justify-center items-center gap-[18px]">
          <h3 className="text-primary-foreground text-center">
            {t('title1')}
          </h3>
          <ChatBubbleLeftRightIcon className='w-6 h-6 text-primary-foreground' />
        </div>
        <SectionWithText title={t('section1.title')} subtitle={t('section1.subtitle')} sections={section} />
      </section>
      <section className='flex flex-col gap-8'>
        <div className="flex justify-center items-center gap-[18px]">
          <h3 className="text-primary-foreground text-center">
            {t('title2')}
          </h3>
          <BriefcaseIcon className='w-6 h-6 text-primary-foreground' />
        </div>
        <SectionWithText title={t('section2.title')} sections={section2} />
      </section>
    </div>
  )
}
