import Search from './Search'
import ResCard from './ResCard'
import { RES_NAMES } from '../utils/constants'

const Body = () => {

    return (
        <div>
            <Search/>
            <div className='res-cards-container'>
                {RES_NAMES.map((restaurant, index) => (
                    <ResCard
                        key={index}
                        resName={restaurant.resName}
                        cusine={restaurant.cusine}
                        rating={restaurant.rating}
                        deliveryTime={restaurant.deliveryTime}
                        img={restaurant.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;