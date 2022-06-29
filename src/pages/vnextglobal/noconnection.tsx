import Header from 'components/VnextGlobal/Header'
import Image from 'next/image'
import styled from 'styled-components'
import {
  SwapContainer,
  SwapPage,
  SwapHeader,
  SwapHeaderTitle,
  SwapTitleParent,
  SwapTitleChildren,
  SwapHeaderRefresh,
  SwapContent,
  NumberInputStatus,
} from '.'
import RotateLeft from '../../../public/images/vnextglobal/rotate-left.svg'
import SettingIcon from '../../../public/images/vnextglobal/setting.svg'

const NoConnection = () => {
  return (
    <>
      <Header />
      <SwapContainer>
        <SwapPage>
          <SwapHeader>
            <SwapHeaderTitle>
              <SwapTitleParent>Your Liquidity</SwapTitleParent>
              <SwapTitleChildren>Remove liquidity to receive tokens back</SwapTitleChildren>
            </SwapHeaderTitle>
            <SwapHeaderRefresh>
              <Image src={SettingIcon} />
              <Image src={RotateLeft} />
            </SwapHeaderRefresh>
          </SwapHeader>
          <SwapContent className="justify-center items-center">
            <TextBase>Connect to a wallet to view your liquidity</TextBase>
            <NumberInputStatus className="!py-3 w-full">Add liquidity</NumberInputStatus>
            <TextBold>Connect wallet</TextBold>
          </SwapContent>
        </SwapPage>
      </SwapContainer>
    </>
  )
}

export default NoConnection

const TextBase = styled.span.attrs({
  className: 'text-base',
})`
  color: #717d8a;
`

const TextBold = styled.span.attrs({
  className: 'text-base',
})`
  color: #242d35;
`
