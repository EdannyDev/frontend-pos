import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { NotificationContainer, Icon } from '@/styles/notification.styles'

export default function Notification({ message, type, isStacked = false }) {
  if (!message) return null

  const iconMap = {
    success: faCheckCircle,
    error: faExclamationCircle,
    warning: faExclamationTriangle,
    info: faInfoCircle
  }

  return (
    <NotificationContainer type={type} isStacked={isStacked}>
      <Icon icon={iconMap[type] || faInfoCircle} type={type} />
      {message}
    </NotificationContainer>
  )
}