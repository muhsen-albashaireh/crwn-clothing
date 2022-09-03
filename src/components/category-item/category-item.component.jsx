import './category-item.styles.scss';

const CategoryItem = ({ imageUrl, title }) => {
  return (
    <div className='category-container'>
      <div
        className='category-container__bg'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-container__body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
