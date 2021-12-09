import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';

const MASTHEAD_HEIGHT = '76px';

const SidebarContainer = ({ children }) => {
  return (
    <Box
      backgroundColor="colorBackground"
      display="flex"
      flexDirection="column"
      height={`calc(100vh - ${MASTHEAD_HEIGHT})`}
      minWidth="sizeSidebar"
      position="sticky"
      top={MASTHEAD_HEIGHT}
      zIndex="zIndex10"
    >
      {children}
    </Box>
  );
};

SidebarContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SidebarContainer };
