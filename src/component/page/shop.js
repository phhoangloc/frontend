import { Link, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Brand from './shop/Brand';
import ShopHome from './shop/Home';
import ShopApi from '../../api/ShopApi';

const Shop = () => {
    const [brand, setBrand] = useState()

    const getAllBranch = async () => {
        const result = await ShopApi.getAllSortByPurchase()
        setBrand(result)
    }
    useEffect(() => {
        getAllBranch()
    }, [])

    const data = brand ? brand.map((item, index) =>
        <div className='brandlogo' key={index}>
            <Link to={"/home/shop/" + item.brand} >
                <img src={"http://localhost:4000/brandlogo/" + item.logo} />
            </Link>
        </div>)
        : null

    return (
        <div className="Shop">
            <div className="leftList">
                <div className='brand'>
                    {data}
                </div>

            </div>
            <div className="RightContent">
                <Switch>
                    <Route path='/home/shop/:brand' component={Brand} />
                    <Route path='/home/shop/' component={ShopHome} />
                </Switch>
            </div>
        </div>
    )
}

export default Shop