"use client"
import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Flex, Menu } from 'antd';
import styled from 'styled-components';
import Link from 'next/link';

const StyledMenu = styled(Menu)`
  
  margin-left: 0;
  margin-right: auto;
  border-radius:40px;


  .ant-menu-item {
    &::after {
      border-bottom: none !important;
    }
    
    &:hover::after,
    &.ant-menu-item-selected::after {
      border-bottom: 2px solid black !important;
    }
    
    &:hover,
    &.ant-menu-item-selected {
      color: black !important;
    }
  }
`;

const Logo = styled.h3`
margin-left: 50px;
margin-right: 50px;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight:500;
`;

const StyledFlex = styled(Flex)`
background-color:#b6e0d5;

`;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href="/">Home</Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/about">About me</Link>,
    key: 'about',
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href="/contact">Contact</Link>,
    key: 'contact',
    icon: <QuestionCircleOutlined />,
  },
];



const Navbar = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return(
  <StyledFlex align="center">
   <Logo>Fayas</Logo>
   <StyledMenu style={{ minWidth: '400px', border: 'none' }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
   </StyledFlex> )
   
};

export default Navbar;