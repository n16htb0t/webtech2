import React from "react";
import styled from "styled-components";
import TeamMember from "../components/TeamMember";
import teamData from "../data/teamData";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: stretch;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SectionLabel = styled.h2`
  font-size: 39px;
`;

const TeamSection = () => (
  <>
    <TitleWrapper>
      <SectionLabel>Our team</SectionLabel>
    </TitleWrapper>
    <Section>
      {teamData.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </Section>
  </>
);

export default TeamSection;
