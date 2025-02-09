import React from 'react'
import styled from 'styled-components'
import { Button, Flex } from 'antd'
import { LinkedinOutlined } from '@ant-design/icons'
import Link from 'next/link';

const StyledParagraph = styled.p`
  font-family: Ovo;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0%;
  text-align: center;
`;

const StyledHeading = styled.h3`
  font-family: Ovo;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 0%;
  text-align: center;
`;

const StyledButton = styled(Button)`
  height: 45px;
  padding: 0 25px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  
  &.primary {
    background-color: #2c3e50;
    color: white;
    &:hover {
      background-color: #34495e !important;
    }
  }
  
`;

const IntroCard = () => {
  return (
    <div>
      <StyledParagraph>Hi! I'm Fayas</StyledParagraph>
      <StyledHeading>Frontend web developer.</StyledHeading>
      <StyledParagraph>I am a frontend developer focusing on ReactJS.</StyledParagraph>
      <Flex gap={16} justify="center" style={{ marginTop: 24 }}>
        <Link href="https://www.linkedin.com/in/mohammed-fayas-frontend-developer/" target='_blank'>
        <StyledButton
          className="primary"
          icon={<LinkedinOutlined />}
          
        >
          LinkedIn
        </StyledButton>
        </Link>
        
      </Flex>
    </div>
  )
}

export default IntroCard;