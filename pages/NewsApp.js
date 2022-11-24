import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const NewsAppComponent = (props) => {
  const [NewsFetch, setFetchNews] = React.useState([]);

  const __fetch__news = async () => {
    const axios__get = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-10-23&sortBy=publishedAt&apiKey=391b845c95b64b0ea4a5c67fe7d31a41"
    );
    setFetchNews(axios__get.data.articles);
  };

  React.useEffect(() => {
    __fetch__news();
  }, []);
  return (
    <>
      {NewsFetch.map((key, item) => {
        return (
          <div className="row container" key={item.url}>
            <div className="col-md-4">
              <h1>{item.title}</h1>
              paragraph
            </div>
          </div>
        );
      })}
    </>
  );
};

NewsAppComponent.propTypes = {};

export default NewsAppComponent;
