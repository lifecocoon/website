import React from 'react'

import { Box } from 'axs'
import { Flex } from 'axs-ui'

export default ({url, width=125, aspect=1, children}) => (<Flex alignItems="center" mt={2}>
    <Box mr2>
        <Box width={width} css={{
        height: 0,
        paddingBottom: `${100 / aspect}%`,
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        }}/>
    </Box>
    <Box flexAuto>
        {children}
    </Box>
</Flex>)
