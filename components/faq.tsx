import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

export function Faq() {
  const t = useTranslations('Faq');

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="w-full text-center flex flex-col gap-4">
          <h2 className="text-primary-foreground">{t('title')}</h2>
          <h5 className="text-[hsl(var(--secondary-content))]">
            {t('description')}
          </h5>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h6>{t('1.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('1.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h6>{t('2.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('2.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h6>{t('3.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('3.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h6>{t('4.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('4.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h6>{t('5.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('5.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              <h6>{t('6.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('6.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              <h6>{t('7.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('7.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              <h6>{t('8.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('8.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              <h6>{t('9.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('9.answer')}</span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              <h6>{t('10.question')}</h6>
            </AccordionTrigger>
            <AccordionContent>
              <span>{t('10.answer')}</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
