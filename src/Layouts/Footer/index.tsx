import { Link } from '@tablecheck/tablekit-typography';
import { useTranslation } from 'react-i18next';

import { AppRoute } from 'enums';

import { FooterHrefLink, FooterLink, FooterWrapper } from './styles';

export function Footer(): JSX.Element | null {
  const [t, { language }] = useTranslation();

  return (
    <FooterWrapper>
      <div>
        <FooterHrefLink href="http://tablekit.tablecheck.com/" target="_blank">
          TableKit
        </FooterHrefLink>
      </div>
      <div>
        <Link href={`http://tablecheck.com/${language}/join`} target="_blank">
          {t('attributes.links.powered_by')}
        </Link>
      </div>
    </FooterWrapper>
  );
}
