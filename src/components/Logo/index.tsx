import Image from 'next/image';

import KleverLogo from '@/assets/svgs/logo.svg';

export const Logo = () => {
  return <Image width={250} height={250} src={KleverLogo} alt="Klever Logo" />;
};
