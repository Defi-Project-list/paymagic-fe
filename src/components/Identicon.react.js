import React, { useEffect, useRef } from 'react'

import styled from 'styled-components'
import Jazzicon from 'jazzicon'

const StyledIdenticonContainer = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
`

export default function Identicon({ account }) {
  const ref = useRef()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(Jazzicon(32, parseInt(account.slice(2, 10), 16)))
    }
  }, [account])

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdenticonContainer ref={ref} />
}