import React, { useState } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import axios from "axios";
// import { Button } from "bootstrap";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
export default function Studio(props) {
  const [requestData, setRequestData] = useState({});
  const {
    box_count = 0,
    url = "https://i.imgflip.com/1ur9b0.jpg",
    memeData = {},
    id = "",
  } = props.location.state || {};
  const [preview, setPreview] = useState(url);
  console.log(props.memeData);
  console.log("props are ++++++++++", props);
  console.log(requestData);
  let textFields = [];
  for (let i = 0; i < box_count; i++) {
    textFields.push(i);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let axiosData = {
        template_id: id,
        username: "memehub1",
        password: "pranjalanas143",
        text0: "something",
        text1: "else",
      };
      // let formData = new FormData(axiosData);
      console.log("+++++++++++++++++++++++data to be send", axiosData);
      let response = await fetch("https://api.imgflip.com/caption_image", {
        ...axiosData,
      });

      // console.log("FOrm submitted", response);
      let responseJson = await response.json();
      console.log("+++++++++++++++++=", responseJson);
      // setPreview(responseJson);
    } catch (error) {
      console.error(error);
    }
  };
  const handleOnChange = (event) => {
    setRequestData((prev) => {
      console.log(event);

      return { ...prev, [event.target.name]: event.target.value };
    });
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <Card>
              <img width="100%" src={url} alt="Card image cap" />
            </Card>
          </Col>
          <Col>
            <Form id="one" name="one">
              {textFields.map((item) => {
                return (
                  <FormGroup>
                    <Label for="exampleEmail">{`Box ${item}`}</Label>
                    <Input
                      type="text"
                      name={"text" + item}
                      id={`box${item}`}
                      onChange={handleOnChange}
                      placeholder="write something funny"
                    />
                  </FormGroup>
                );
              })}
              <Button type="submit" onClick={handleSubmit}>
                {" "}
                Make Meme
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            Preview
            <Card>
              <img width="100%" src={url} alt="Card image cap" />
            </Card>
          </Col>
        </Row>
        <h3>{Object.keys(requestData)}</h3>
        <h3>{Object.values(requestData)}</h3>
      </Container>
    </>
  );
}
