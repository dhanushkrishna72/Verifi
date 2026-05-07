/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const { source, author, title, description, url, urlToImage, publishedAt } =
    article;
  return (
    <div className="max-w-md mx-auto bg-pink-100 dark:bg-pink-700 hover:scale-105 transition-all rounded-xl overflow-hidden duration-300">
      <img
        src={urlToImage}
        alt={title}
        className="w-full h-48 object-cover bg-pink-100"
      />
      <div className="p-4">
        <Link to={url}>
          <h2
            className="text-xl font-semibold dark:text-pink-200 text-pink-600
          hover:text-pink-300 transition"
          >
            {title}
          </h2>
        </Link>
        <p className="text-sm  dark:text-pink-200 text-pink-600">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="mt-4 text-sm dark:text-pink-200 text-pink-600">
          <span>By {author || "Unkown"}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="mt-1 text-xs text-shadow-red-700 font-medium">
          Source: {source.name}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
