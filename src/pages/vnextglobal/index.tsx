import Image from 'next/image'
import styled from 'styled-components'
import Header from 'components/VnextGlobal/Header'
import tw from 'twin.macro'
import RotateLeft from '../../../public/images/vnextglobal/rotate-left.svg'
import ArrowDouble from '../../../public/images/vnextglobal/arrow-double.svg'

const VswapDex = () => {
  return (
    <>
      <Header />
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
            <NumberInputStatus className="!text-base !h-12">Connect wallet</NumberInputStatus>
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

export const SwapContainer = styled.div.attrs({
  className: 'flex justify-center my-14',
})``

export const SwapPage = styled.div.attrs({
  className: 'p-8 rounded-3xl',
})`
  width: 480px;
  border: 1px solid #ccc;
`

export const SwapHeader = styled.div.attrs({
  className: 'flex justify-between',
})`
  height: 56px;
`

export const SwapHeaderTitle = styled.div.attrs({
  className: 'flex justify-between flex-col',
})``

export const SwapTitleParent = styled.div.attrs({
  className: 'font-semibold text-xl',
})`
  color: #424d57;
`

export const SwapTitleChildren = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #a8b0b9;
`

export const SwapHeaderRefresh = styled.div.attrs({
  className: 'flex items-start gap-5 cursor-pointer',
})``

export const SwapContent = styled.div`
  ${tw`flex flex-col gap-8 mt-8`}
`

const NumberInputContent = styled.div.attrs({
  className: 'flex gap-2 h-20 rounded-xl px-4 py-2',
})`
  border: 1px solid #eaecee;
`

const NumberInputLabel = styled.div.attrs({
  className: 'flex justify-end font-normal font-xs',
})`
  color: #717d8a;
`

const NumberInput = styled.div.attrs({
  className: 'flex flex-col gap-2',
})``

const NumberInputArea = styled.div.attrs({
  className: 'flex flex-1 flex-col justify-between',
})``

const NumberInputFrom = styled.div.attrs({
  className: 'text-base font-normal',
})`
  color: #717d8a;
`

const NumberInputType = styled.input.attrs({
  className: 'border-none focus:outline-none',
})``

const NumberInputSelect = styled.div.attrs({
  className: 'flex gap-1',
})``

export const NumberInputStatus = styled.div`
  background: #242d35;
  border-radius: 28px;
  ${tw`flex justify-center items-center text-white py-2 px-4 flex-1`}
`

const InputSelectArea = styled.div.attrs({
  className: 'flex flex-col justify-end flex-1',
})``

const SwapPageFooter = styled.div.attrs({
  className: 'flex justify-between',
})`
  color: #424d57;
`
