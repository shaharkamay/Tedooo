import React from 'react'
import styled from 'styled-components'

const ContentComponent = styled.div`
    max-width: 70rem; // 1120px
    margin: 0 auto;
`;
function Content({ className, children }: { className?: string, children: React.ReactNode }) {
  return (
    <ContentComponent className={className}>{children}</ContentComponent>
  )
}

export default Content