import React from 'react'
import styled from 'styled-components'

const ContentComponent = styled.div`
    max-width: 70rem; // 1120px
    margin: 0 auto;
`;
function Content({ children }: { children: React.ReactNode }) {
  return (
    <ContentComponent>{children}</ContentComponent>
  )
}

export default Content