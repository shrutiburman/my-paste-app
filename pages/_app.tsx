import type {AppProps, NextWebVitalsMetric} from 'next/app';
import {Theme} from '@twilio-paste/core/theme';
import { Masthead } from '../components/site/Masthead';
import { SiteBody } from '../components/site/SiteBody';
import { SiteMain } from '../components/site/SiteMain';

export const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <Theme.Provider theme="flex">
      <Masthead>   
        <div>
        Customer Engagement Quiz ! &nbsp;
          </div>
          <div>
      </div>
    </Masthead>
      <SiteBody>
        <SiteMain>
      <Component {...pageProps} />
      </SiteMain>
      </SiteBody>

    </Theme.Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default MyApp;
