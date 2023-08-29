const ResCard = ({ resData }) => {
  const { img, name, cusine, rating, deliveryTime } = resData;

  return (
    <div className='res-card'>
      <div className='res-logo'>
        <img src={img} alt='Restaurant Logo' />
      </div>
      <div className='res-info'>
        <h3 className='res-name'>{name}</h3>
        <p className='res-cuisine'>{cusine}</p>
        <p className='res-rating'>{rating}</p>
        <p className='res-delivery'>{deliveryTime}</p>
      </div>
    </div>
  );
}

export default ResCard;
