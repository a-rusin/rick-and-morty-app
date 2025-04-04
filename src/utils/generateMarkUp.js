import { formatDate } from "./formatDate";

export const generateMarkUp = (item, indexItem = 0) => {
  return Object.keys(item).map((key, indexKey) => {
    if (isNotObject(item[key])) {
      let content;

      if (key === "created") {
        content = formatDate(item[key]);
      } else if (key === "image") {
        content = <img src={item[key]} className="category-list-item-avatar" />;
      } else if (key === "url") {
        content = (
          <a
            href={item[key]}
            target="_blank"
            className="category-list-item-url"
          >
            {item[key]}
          </a>
        );
      } else {
        content = item[key];
      }

      return (
        <div key={`${indexItem}-${indexKey}`}>
          <strong>{key}: </strong>
          <span>{content}</span>
        </div>
      );
    }
  });
};

function isNotObject(value) {
  return typeof value !== "object" || value === null;
}
