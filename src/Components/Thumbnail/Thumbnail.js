import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";
export default function Thumbnail(props) {
  const [stateStyle, setStateStyle] = useState({});
  const onHoverStyle = {};
  return (
    <div
      onMouseEnter={() =>
        setStateStyle({
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        })
      }
      onMouseLeave={() => setStateStyle({})}
      style={{
        ...stateStyle,
        maxWidth: "320px",
        maxHeight: "3206px",
        padding: "0px",
        margin: "5px",
        cursor: "pointer",
      }}
    >
      <Card>
        <img
          style={{
            maxWidth: "226px",
            maxHeight: "226px",
            objectFit: "contain",
            padding: "0px auto",
            margin: "auto",
          }}
          // maxWidth="226px"
          // maxHeight="226px"
          // objectFit="contain"
          // top
          // width="100%"
          src={props.imgSrc}
          alt="Card image cap"
        />
        <CardBody style={{ textAlign: "center" }}>
          <CardTitle tag="h6" style={{ color: "black" }}>
            {props.title}
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
  //   return (
  //     <>
  //       <img
  //         src={props.imgSrc}
  //         style={{
  //           maxHeight: "226px",
  //           maxWidth: "226px",
  //           padding: "20px",
  //           "&:hover": {
  //             background: "#efefef",
  //           },
  //           "&:last-child": {
  //             borderRight: "solid 1px #cccccc",
  //           },
  //         }}
  //       />
  //       <h5>{props.title}</h5>
  //     </>
  //   );
}
