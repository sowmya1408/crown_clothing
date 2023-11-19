import "./catergory-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
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
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
