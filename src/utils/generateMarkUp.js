import { formatDate } from "./formatDate";

export const generateMarkUp = (item, indexItem = 0) => {
  return Object.keys(item).map((key, indexKey) => {
    let content;

    if (key === "created") {
      content = formatDate(item[key]);
    } else if (key === "image") {
      content = <img src={item[key]} className="category-list-item-avatar" />;
    } else {
      content = item[key];
    }

    return (
      <div key={`${indexItem}-${indexKey}`}>
        <strong>{key}: </strong>
        <span>{content}</span>
      </div>
    );
  });
};
