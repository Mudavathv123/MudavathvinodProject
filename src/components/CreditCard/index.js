// Write your code here
import {useState} from 'react'

import {
  CrediCardContainer,
  CardBgContainer,
  Heading,
  Card,
  PaymentBgContainer,
  Form,
  PaymentHeading,
  Input,
  Cardumber,
  HolderName,
  Name,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [holderName, setHolderName] = useState('')

  const onChangeCardNumber = event => setCardNumber(event.target.value)
  const onChangeHolderName = event => setHolderName(event.target.value)

  return (
    <CrediCardContainer>
      <CardBgContainer>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid="creditCard">
          <Cardumber>{cardNumber}</Cardumber>
          <Name>CARDHOLDER NAME</Name>
          <HolderName>{holderName.toUpperCase()}</HolderName>
        </Card>
      </CardBgContainer>
      <PaymentBgContainer>
        <Form>
          <PaymentHeading>Payment Method</PaymentHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={holderName}
            onChange={onChangeHolderName}
          />
        </Form>
      </PaymentBgContainer>
    </CrediCardContainer>
  )
}

export default CreditCard
