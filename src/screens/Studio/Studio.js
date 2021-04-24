import React, { useState, useEffect } from "react";
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

import { MAKE_MEME_URL } from "../../config";
// axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
// "http://localhost:3000";
export default function Studio(props) {
  const {
    box_count = 0,
    url = "https://i.imgflip.com/1ur9b0.jpg",
    memeData = {},
    id = "",
  } = props.location.state || {};
  const [requestData, setRequestData] = useState({});
  const [preview, setPreview] = useState("https://i.imgflip.com/1ur9b0.jpg");
  const [temp, setTemp] = useState(Date.now());
  console.log(props.memeData);
  console.log("props are ++++++++++", props);
  console.log(requestData);
  let textFields = [];
  for (let i = 0; i < box_count; i++) {
    textFields.push(i);
  }
  useEffect(() => console.log("use effect called", preview), [preview]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let axiosData = {
        template_id: id,
        ...requestData,
      };
      // let formData = new FormData(axiosData);
      console.log("+++++++++++++++++++++++data to be send", axiosData);
      // axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      // let response = await axios({
      //   method: "post",
      //   url: MAKE_MEME_URL,
      //   data: memeData,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //   },
      // });
      let response = await axios.post(MAKE_MEME_URL, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        memeData: axiosData,
      });
      console.log("response data is +++++", response?.data?.url);
      if (response.status == "200") {
        setPreview(response.data.url);
        setTemp(Date.now());
        // setPreview();
      }
      console.log("+++++++++++++++++= response", response);
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  const handleOnChange = (event) => {
    setRequestData((prev) => {
      // console.log(event);
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
                  <FormGroup key={item}>
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
              <img
                width="100%"
                src={preview}
                key={preview}
                alt="Card image cap"
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
