

const ResCard = ({ resName, cusine, deliveryTime, rating, img }) => {
    console.log("resname",resName)
    return (
      <div className='res-card'>
        <div className='res-logo'>
          <img src={img} alt='Restaurant Logo' />
        </div>
        <div className='res-info'>
          <h3 className='res-name'>{resName}</h3>
          <p className='res-cuisine'>{cusine}</p>
          <p className='res-rating'>{rating}</p>
          <p className='res-delivery'>{deliveryTime}</p>
        </div>
      </div>
    );
  }

  export default ResCard;