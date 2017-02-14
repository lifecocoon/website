import React from 'react'

import { Box, Text } from 'axs'

export default ({heading, children}) => (<Box
  border
  borderFuschia
  rounded
  m1
>
  <Box
    bgFuschia
    p2
    white
  >
    <Text bold>
      {heading}
    </Text>
  </Box>
  <Box p2>
    {children}
  </Box>
  {/*<Box
    border="top"
    borderFuschia
    fuschia
    p2
  >
    <Text fontSize={6}>
      Panel footer
    </Text>
  </Box>*/}
</Box>)