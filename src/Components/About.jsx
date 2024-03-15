import React from "react";

//[2]여기를 수정해주세요!!
//[motion-background] 을 background1, background2 , background3 중 하나로 바꿔주세요
//예시) import image from "../images/background1.jpg"; 이렇게요!
import image from "../images/motion-background.jpg";
const imageAltText = "purple and blue abstract background";


//[3]여기를 수정해주세요!
//description: 자신, 경력 목표 및/또는 열정을 설명하는 짧은 문장 1~2개
//skillsList: 자신이 가지고 있는 능력
//detailOrQuote: 자신에 대한 자세한 내용이나 좋아하는 인용문

const description =
  "저는 마이크로소프트 학생 홍보대사 MLSA 김예찬입니다. 여러분께 FE체험을 해드릴 수 있어 영광입니다.";

const skillsList = [
  "프론트엔드 개발",
  "웹 디자인",
  "교육",
];

const detailOrQuote =
  "세상에 내가 할 수 없는 일은 없다, 끝까지 몰아붙여 나의 한계를 넓히자";












const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
