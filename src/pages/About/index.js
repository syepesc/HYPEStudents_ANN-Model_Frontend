import "./About.css";
import React from "react";
import UserCard from "../../components/Common/Cards/UserCard";
import Container from "../../components/Common/Container";

import ImgSantiago from "../../assets/images/user.png";
import ImgJirarui from "../../assets/images/user.png";
import ImgMaziar from "../../assets/images/user.png";
import ImgSushma from "../../assets/images/user.png";

const groupMembers = [
  {
    id: "1",
    profilePicture: ImgSantiago,
    firstName: "Santiago",
    lastName: "Yepes",
    title: "Artificial Intelligence Engineer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: "2",
    profilePicture: ImgJirarui,
    firstName: "Jirarui",
    lastName: "Tan",
    title: "Artificial Intelligence Engineer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: "3",
    profilePicture: ImgMaziar,
    firstName: "Maziar",
    lastName: "Hassanzadeh",
    title: "Artificial Intelligence Engineer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    id: "4",
    profilePicture: ImgSushma,
    firstName: "Sushma",
    lastName: "Daggubati",
    title: "Artificial Intelligence Engineer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
];

const About = () => {
  return (
    <Container>
      <h1>ABOUT US</h1>
      <div className="member-cards-container">
        {groupMembers.map((groupMember) => (
          <UserCard
            key={groupMember.id}
            profilePicture={groupMember.profilePicture}
            firstName={groupMember.firstName}
            lastName={groupMember.lastName}
            title={groupMember.title}
            about={groupMember.about}
          />
        ))}
      </div>
    </Container>
  );
};

export default About;
