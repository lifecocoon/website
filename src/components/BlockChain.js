import React from 'react'

import { Box } from 'axs'

export const Chain = (props) => {
  const { children } = props
  const subProps = {...props, children: undefined }
  return (<Box
    border
    borderGray
    rounded
    m1
    {...subProps}
  >
    {children}
  </Box>)
}