import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  padding: 50px 30px;
  border: 0.1em solid rgba(0, 0, 0, 0.1);
`;

const CardImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const CardName = styled.div`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -1px;
  font-family: Montserrat, sans-serif;
`;

const CardJob = styled.h4`
  font-weight: 500;
  letter-spacing: -1px;
  font-family: Montserrat, sans-serif;
`;

const CardSocials = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  width: 80%;

  img {
    width: 30px;
    border-radius: 100%;
  }
`;

const TeamMember = ({ name, role, image, socials }) => (
  <Card>
    <CardImg src={image} alt={name} />
    <CardName>{name}</CardName>
    <CardJob>{role}</CardJob>
    <CardSocials>
      <a href={socials.facebook}>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" alt="Facebook" />
      </a>
      <a href={socials.linkedin}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="LinkedIn" />
      </a>
      <a href={socials.email}>
        <img src="https://w7.pngwing.com/pngs/4/365/png-transparent-computer-icons-email-email-miscellaneous-trademark-logo.png" alt="Email" />
      </a>
    </CardSocials>
  </Card>
);

export default TeamMember;
