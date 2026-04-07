import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NotificationContainer = styled.div`
  position: ${({ isStacked }) => (isStacked ? 'relative' : 'fixed')};
  ${({ isStacked }) =>
    !isStacked &&
    `
      top: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
    `}
  background-color: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#28a745'
      case 'error':
        return '#dc3545'
      case 'warning':
        return '#ffc107'
      case 'info':
        return '#17a2b8'
      default:
        return '#333'
    }
  }};
  color: ${({ type }) => (type === 'warning' ? '#000' : '#fff')};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  font-weight: 500;
  font-size: 1rem;
  min-width: ${({ type }) => (type === 'success' ? '320px' : '250px')};
  max-width: ${({ type }) => (type === 'success' ? '500px' : '80%')};
  text-align: ${({ type }) => (type === 'warning' ? 'left' : 'center')};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.8rem 1.2rem;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.7rem 1rem;
    max-width: 95%;
    gap: 0.5rem;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${({ type }) => (type === 'warning' ? '#000' : '#fff')};

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`