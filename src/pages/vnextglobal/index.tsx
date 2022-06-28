import Image from "next/image"
import styled from "styled-components"
import LogoVswap from '../../../public/images/vnextglobal/logo.svg'
import SwapIcon from '../../../public/images/vnextglobal/swapIcon.svg'
import FarmIcon from '../../../public/images/vnextglobal/farmIcon.svg'
import LiquidityIcon from '../../../public/images/vnextglobal/coin.svg'
import GlobalIcon from '../../../public/images/vnextglobal/global.svg'
import SettingIcon from '../../../public/images/vnextglobal/setting.svg'
import RotateLeft from '../../../public/images/vnextglobal/rotate-left.svg'
import ArrowDouble from '../../../public/images/vnextglobal/arrow-double.svg'

const VswapDex = () => {
  return (
    <>
      <NavBar>
        <Image src={LogoVswap} />
        <Content>
          <ContentItem>
            <Image src={SwapIcon} />
            <ContentText>Swap</ContentText>
          </ContentItem>
          <ContentItem>
            <Image src={LiquidityIcon} />
            <ContentText>Liquidity</ContentText>
          </ContentItem>
          <ContentItem>
            <Image src={FarmIcon} />
            <ContentText>Farm</ContentText>
          </ContentItem>
        </Content>
        <ActionArea>
          <Image src={GlobalIcon} />
          <Image src={SettingIcon} />
          <ConnectButton>Connect wallet</ConnectButton>
        </ActionArea>
      </NavBar>
      <SwapContainer>
        <SwapPage>
          <SwapHeader>
            <SwapHeaderTitle>
              <SwapTitleParent>Swap</SwapTitleParent>
              <SwapTitleChildren>Trade tokens in an instant</SwapTitleChildren>
            </SwapHeaderTitle>
            <SwapHeaderRefresh>
              <Image src={RotateLeft} />
            </SwapHeaderRefresh>
          </SwapHeader>
          <SwapContent>
            <NumberInput>
              <NumberInputLabel>Balance: 1.21</NumberInputLabel>
              <NumberInputContent>
                <NumberInputArea>
                  <NumberInputFrom>From</NumberInputFrom>
                  <NumberInputType value="0.0" />
                </NumberInputArea>
                <InputSelectArea>
                  <NumberInputSelect>
                    <NumberInputStatus>Max</NumberInputStatus>
                    <NumberInputStatus>Min</NumberInputStatus>
                  </NumberInputSelect>
                </InputSelectArea>
              </NumberInputContent>
            </NumberInput>
            <Image src={ArrowDouble} />
            <NumberInput>
              <NumberInputLabel>Balance: 0</NumberInputLabel>
              <NumberInputContent>
                <NumberInputArea>
                  <NumberInputFrom>From</NumberInputFrom>
                  <NumberInputType value="0.0" />
                </NumberInputArea>
                <InputSelectArea>
                  <NumberInputSelect>
                    <NumberInputStatus>Max</NumberInputStatus>
                    <NumberInputStatus>Min</NumberInputStatus>
                  </NumberInputSelect>
                </InputSelectArea>
              </NumberInputContent>
            </NumberInput>
            <NumberInputStatus className="text-base">Connect wallet</NumberInputStatus>
            <SwapPageFooter>
              <span>Slippage tolerance</span>
              <span>0.5%</span>
            </SwapPageFooter>
          </SwapContent>
        </SwapPage>
      </SwapContainer>
    </>

  )
}

export default VswapDex

const NavBar = styled.div.attrs({
  className: 'grid'
})`
  padding: 16px 72px;
  grid-template-columns: 144px 1fr 300px;
`

const Content = styled.div.attrs({
  className: 'flex justify-center gap-12'
})``

const ContentItem = styled.div.attrs({
  className: 'flex justify-center items-center py-3 px-2 cursor-pointer'
})``

const ContentText = styled.div.attrs({
  className: 'text-base'
})`
  margin-left: 10px;
`

const ActionArea = styled.div.attrs({
  className: 'flex items-center justify-between gap-6'
})``

const ConnectButton = styled.div.attrs({
  className: 'flex items-center justify-center py-3 px-6 text-white'
})`
  height: 48px;
  width: 170px;
  background-color: #242D35;
  border-radius: 28px;
`

const SwapContainer = styled.div.attrs({
  className: 'flex justify-center my-14'
})``

const SwapPage = styled.div.attrs({
  className: 'p-8 rounded-3xl'
})`
  width: 480px;
  border: 1px solid #ccc;
`

const SwapHeader = styled.div.attrs({
  className: 'flex justify-between'
})`
  height: 56px;
`

const SwapHeaderTitle = styled.div.attrs({
  className: 'flex justify-between flex-col'
})``

const SwapTitleParent = styled.div.attrs({
  className: 'font-semibold text-xl'
})`
  color: #424d57;
`

const SwapTitleChildren = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #A8B0B9;
`

const SwapHeaderRefresh = styled.div``

const SwapContent = styled.div.attrs({
  className: 'flex flex-col gap-8'
})`

`

const NumberInputContent = styled.div.attrs({
  className: 'flex gap-2 h-20 rounded-xl px-4 py-2'
})`
  border: 1px solid #EAECEE;
`

const NumberInputLabel = styled.div.attrs({
  className: 'flex justify-end font-normal font-xs'
})`
  color: #717D8A;
`

const NumberInput = styled.div.attrs({
  className: 'flex flex-col gap-2'
})``

const NumberInputArea = styled.div.attrs({
  className: 'flex flex-1 flex-col justify-between'
})``

const NumberInputFrom = styled.div.attrs({
  className: 'text-base font-normal'
})`
  color: #717D8A;
`

const NumberInputType = styled.input.attrs({
  className: 'border-none focus:outline-none'
})``

const NumberInputSelect = styled.div.attrs({
  className: 'flex gap-1'
})``

const NumberInputStatus = styled.div.attrs({
  className: 'flex justify-center items-center text-white py-2 px-4 flex-1'
})`
  background: #242D35;
  border-radius: 28px;
`

const InputSelectArea = styled.div.attrs({
  className: 'flex flex-col justify-end flex-1'
})``

const SwapPageFooter = styled.div.attrs({
  className: 'flex justify-between'
})`
  color: #424D57;
`

