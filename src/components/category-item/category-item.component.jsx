import "./catergory-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  console.log(category);
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      {/* <img className="background-image" src={`${imageUrl}`} alt="images" />
       */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
