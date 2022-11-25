import React from "react";
import axios from "axios";
import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";

const IndexComponent = () => {
  const [ImageFetch, setImage] = React.useState([]);

  const fetch__image_splash = async () => {
    const fetch_result = await axios.get(
      "https://api.unsplash.com/photos/?client_id=b4CuH4vAeA99oEm0tAW7SyxH6rcjpUVB1lp06kLnmqo"
    );
    setImage(fetch_result.data);
    console.log(fetch_result);
  };
  React.useEffect(() => {
    fetch__image_splash();
  }, []);
  
  return (
    <>
      <div className="row container m-auto">
        {ImageFetch.map((imageItem) => {
          return (
            <div className="container col-4">
              <Card css={{ w: "100%", height:"600px" }} className="my-3" isHoverable>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Button auto color="secondary">
                    <Link
                      href={imageItem.links.download}
                      className="text-white"
                    >
                      Download Image
                    </Link>
                  </Button>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={imageItem.urls.regular}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt="Card example background"
                  />
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IndexComponent;
