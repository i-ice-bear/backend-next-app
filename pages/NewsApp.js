import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Card, Grid, Text, Link, Button } from "@nextui-org/react";

const NewsAppComponent = (props) => {
  const [NewsFetch, setFetchNews] = React.useState([]);

  const __fetch__news = async () => {
    const axios__get = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-10-27&sortBy=publishedAt&apiKey=391b845c95b64b0ea4a5c67fe7d31a41"
    );
    setFetchNews(axios__get.data.articles);
  };

  React.useEffect(() => {
    __fetch__news();
  }, []);
  return (
    <>
      <div className="row container m-auto my-5">
        {NewsFetch.map((item) => {
          return (
            <div className="col-md-6 m-auto" key={item.url}>
              <Card css={{ p: "$6", w: "auto" }} className="my-3">
                <Card>
                  <img alt="nextui logo" src={item.urlToImage} />
                </Card>
                <Card.Header className="my-3">
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        {item.title}
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>{item.author}</Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text>{item.description}</Text>
                </Card.Body>
                <Card.Footer>
                  <Grid.Container>
                    <Grid xs={6}>
                    <Button
                      className="mx-3"
                      icon
                      color="secondary"
                      target="_blank"
                      href={item.url}
                      auto
                    >
                      More details
                    </Button>
                    </Grid>
                    <Link
                      className="mx-3"
                      icon
                      color="secondary"
                      target="_blank"
                      href="#"
                    >
                      {item.publishedAt}
                    </Link>
                  </Grid.Container>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

NewsAppComponent.propTypes = {};

export default NewsAppComponent;
