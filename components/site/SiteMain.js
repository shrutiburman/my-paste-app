import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';
const MASTHEAD_HEIGHT = '76px';

const SiteMain = ({ children }) => {
  return (
    <Box as="main" padding="space120" paddingY="space100" width={`calc(100vw - ${MASTHEAD_HEIGHT})`}>
      {children}
    </Box>
  );
};

SiteMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SiteMain };
