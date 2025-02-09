"use client"
import { Flex, Image } from "antd";
import profile_pic from "../assets/profile-pic.png";
import { styled } from "styled-components";
import IntroCard from "../components/IntroCard";

const StyledImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border:black 3px solid;
  margin-top:20px;
  
`;

export default function Home() {
  return (
    <Flex justify="center" align="center" gap={20}>
     <StyledImage src={profile_pic.src} alt="profile" preview={false} />
     <IntroCard />
    </Flex>
  );
}

