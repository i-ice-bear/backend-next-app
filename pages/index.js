import React from "react";
import axios from "axios";
import { Card } from "@nextui-org/react";

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
            <Card className="my-3">
              <img src={imageItem.urls.small} />
            </Card>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default IndexComponent;
