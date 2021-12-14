import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@twilio-paste/core/box';
const MASTHEAD_HEIGHT = '56px';

const SiteMain = ({ children }) => {
  return (
    <Box as="main" padding="space120" paddingY="space100" width={`calc(1000vw - ${MASTHEAD_HEIGHT})`} height={`calc(30vw - ${MASTHEAD_HEIGHT})`} >
      {children}
    </Box>
  );
};

SiteMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SiteMain };
