import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import Thumbnail from "../../Components/Thumbnail/Thumbnail";
import { Router, Link } from "react-router-dom";

export default function Homepage() {
  const [memes, setMemes] = useState([]);
  let rowCount = 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("https://api.imgflip.com/get_memes");
        console.log(response.data.data.memes);
        setMemes(response.data.data.memes);
        console.log(memes);
      } catch (error) {
        console.error(error);
        setMemes([
          {
            url:
              "https://freefrontend.com/assets/img/500-error-page-html-templates/HTML-500-Internal-Error.png",
          },
        ]);
      }
    };

    fetchData();
  }, []);
  let someGlobal = [];
  return (
    <>
      <Container
      // style={{
      //   display: "flex",
      //   flexWrap: "wrap",
      //   width: "60%",
      //   //   backgroundColor: "#242B2E",
      //   margin: "0px auto",
      // }}
      >
        <Row>
          {memes &&
            memes.map((meme) => {
              return (
                <Col md={3} key={meme.id}>
                  {/*  */}
                  <Link
                    to={{ pathname: "/studio", state: { ...meme } }}
                    style={{ textDecoration: "none" }}
                  >
                    <Thumbnail imgSrc={meme.url} title={meme.name} />
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
