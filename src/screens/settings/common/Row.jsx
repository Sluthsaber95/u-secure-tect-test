import styled from '@emotion/styled'

export const Row = styled.div`
  display: flex;
  opacity: ${props => props.isDisabled ? 0.5 : 1};
`