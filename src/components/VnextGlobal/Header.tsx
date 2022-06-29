import Image from 'next/image'
import styled from 'styled-components'
import LogoVswap from '../../../public/images/vnextglobal/logo.svg'
import SwapIcon from '../../../public/images/vnextglobal/swapIcon.svg'
import FarmIcon from '../../../public/images/vnextglobal/farmIcon.svg'
import LiquidityIcon from '../../../public/images/vnextglobal/coin.svg'
import GlobalIcon from '../../../public/images/vnextglobal/global.svg'
import SettingIcon from '../../../public/images/vnextglobal/setting.svg'

const Header = () => {
  return (
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
  )
}

export default Header

const NavBar = styled.div.attrs({
  className: 'grid',
})`
  padding: 16px 72px;
  grid-template-columns: 144px 1fr 300px;
`

const Content = styled.div.attrs({
  className: 'flex justify-center gap-12',
})``

const ContentItem = styled.div.attrs({
  className: 'flex justify-center items-center py-3 px-2 cursor-pointer',
})``

const ContentText = styled.div.attrs({
  className: 'text-base',
})`
  margin-left: 10px;
`

const ActionArea = styled.div.attrs({
  className: 'flex items-center justify-between gap-6',
})``

const ConnectButton = styled.div.attrs({
  className: 'flex items-center justify-center py-3 px-6 text-white',
})`
  height: 48px;
  width: 170px;
  background-color: #242d35;
  border-radius: 28px;
`
