// Write your code here
import {useState} from 'react'

import {
  UnlockContainer,
  UnlockCardContainer,
  LockImg,
  LockButton,
  DisplayText,
} from './styledComponents'

const Unlock = () => {
  const [isLock, setIsLock] = useState(false)

  const onClickUnlock = () => {
    setIsLock(prveLock => !prveLock)
  }

  const lockImg = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const lockImgAlt = isLock ? 'unlock' : 'lock'
  const displayText = isLock
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const buttonText = isLock ? 'Lock' : 'Unlock'

  return (
    <UnlockContainer>
      <UnlockCardContainer>
        <LockImg src={lockImg} alt={lockImgAlt} />
        <DisplayText>{displayText}</DisplayText>
      </UnlockCardContainer>
      <LockButton type="button" onClick={onClickUnlock}>
        {buttonText}
      </LockButton>
    </UnlockContainer>
  )
}

export default Unlock
