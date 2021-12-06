import type {AppProps, NextWebVitalsMetric} from 'next/app';
import {Theme} from '@twilio-paste/core/theme';
import { Masthead } from '../components/site/Masthead';
import { SiteBody } from '../components/site/SiteBody';
import { SiteMain } from '../components/site/SiteMain';
import { SideBar } from '../components/site/Sidebar';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';
import { ChevronExpandIcon } from "@twilio-paste/icons/cjs/ChevronExpandIcon";


export const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  const menu = useMenuState();
  return (
    <Theme.Provider theme="flex">
    <Masthead>   
        <div>
        <u>My Demo Account</u> &nbsp;
          </div>
          <div>
      <MenuButton {...menu} variant="secondary" color="">
        <ChevronExpandIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Actions">
        <MenuItem {...menu}>Account 1</MenuItem>
        <MenuItem {...menu}>Account 2</MenuItem>
        <MenuItem {...menu}>Account 3</MenuItem>
      </Menu>
      </div>
    </Masthead>
      <SiteBody>
        <SideBar />
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
