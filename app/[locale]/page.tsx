import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <h2 className='text-white'>teste</h2>
    </>
  );
}
