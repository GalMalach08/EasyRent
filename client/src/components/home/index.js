import React from "react";
import { ThemeProvider } from "styled-components";
import {
  StyledHeader,
  Nav,
  StyledLogo,
  StyledImage,
} from "./styles/Header.styled";
import { StyledButton } from "./styles/Button.styled";
import { StyledFlex } from "./styles/Flex.styled";
import { StyledContainer } from "./styles/Container.styled";
import HomeCard from "./HomeCard";
import GlobalStyle from "./styles";
// React-typewriter-effect
import TypeWriterEffect from "react-typewriter-effect";
const Home = () => {
  const myRef = document.querySelector(".scrollable-div");

  const content = [
    {
      id: 1,
      title: "דירות למטרת סאבלט",
      body: `חולמים להעביר את הקיץ בחופים של תל אביב?
        אולי בדירה מהממת בצפון?
          אצלנו תמצאו מאגר של מאות דירות המיועדות לסאבלט, אז למה אתם מחכים ?`,
      image:
        "https://thumbs.dreamstime.com/b/condominium-apartment-building-isolated-white-background-d-illustration-condominium-apartment-building-isolated-white-141265126.jpg",
    },
    {
      id: 2,
      title: "דירות להשכרה",
      body:
        "בעל הדירה העלה לכם את החוזה? מחפשים לעבור לדירה חדשה? מאות דירות להשכרה בלחיצת כפתור ",
      image:
        "https://media.istockphoto.com/photos/modern-business-office-building-isolated-on-white-background-picture-id467820575?k=20&m=467820575&s=612x612&w=0&h=46vxEGz0ycVI8QJneiZ5Anl7EYHzN_hmJIBqcSH1wXQ=",
    },
  ];
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      {/* Header */}
      <GlobalStyle />
      <StyledHeader>
        <StyledContainer>
          <Nav>
            <StyledFlex>
              <div>
                <h1> ברוכים הבאים לאתר השכרת הדירות הגדול בארץ </h1>
                <h5>
                  שלום לכם, ברוכים הבאים לEasyRent - הדרך למצוא את הדירה הבאה
                  שלכם.
                </h5>
                <h5>
                  באתר תוכלו למצוא מאות דירות להשכרה ולמטרת סאבלט אשר מתעדכנות
                  מידי יום.
                </h5>

                <h5 style={{ lineHeight: "1.5" }}>
                  אנו מזמינים אותכם להשתמש בחיפוש המסוננן שלנו על מנת לראות רק
                  את הדירות הרלוונטיות אליכם ולהרשם לאתר על מנת להשאר מעודכנים
                  ולהיות הראשונים שמקבלים את העדכונים לגבי הדירות הכי חמות
                </h5>
                <h5>
                  {" "}
                  בעל/ת דירה ? הרשם והעלה את הדירה שלך לאתר וכך תוכל להשכיר את
                  דירתך בקלות וביעילות
                </h5>
                <h2 style={{ textAlign: "center", marginTop: "10px" }}>
                  תהנו😎
                </h2>
                <div>
                  {/* <TypeWriterEffect
                    textStyle={{
                      color: "white",
                      fontSize: "20px",
                      letterSpacing: "2px",
                      marginLeft: "50px",
                      marginTop: "15px",
                    }}
                    startDelay={100}
                    cursorColor="white"
                    typeSpeed={100}
                    scrollArea={myRef}
                    multiText={[
                      "שלום לכם, ברוכים הבאים לEasyRent - הדרך למצוא את הדירה הבאה שלכם🥳",
                      "באתר תוכלו למצוא מאות דירות להשכרה ולמטרת סאבלט, השתמשו בחיפוש המסוננן שלנו על מנת לראות רק את הדירות הרלוונטיות אליכם",
                      "אנו מזמינים אותכם להרשם לאתר על מנת להשאר מעודכנים ולהיות הראשונים שמקבלים את העדכונים לגבי הדירות הכי חמות",
                      "בעל/ת דירה ? הרשם והעלה את הדירה שלך לאתר וכך תוכל להשכיר את דירתך בקלות וביעילות!",
                      "תהנו😎",
                    ]}
                    multiTextDelay={1000}
                  /> */}
                </div>
                <div></div>
              </div>
            </StyledFlex>
          </Nav>
        </StyledContainer>
      </StyledHeader>
      <StyledContainer>
        <StyledFlex>
          {content.map((item, i) => (
            <HomeCard item={item} />
          ))}
        </StyledFlex>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Home;
