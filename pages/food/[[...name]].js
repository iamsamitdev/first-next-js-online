import {useRouter} from 'next/router'
const FoodName = () => {

    const router = useRouter()

    console.log(router.query)
    // console.log(router.query.name[1]);

    return (
        <div>
            <h1>Food Menu</h1>
        </div>
    )
}

export default FoodName


// http://localhost:3000/food/3/somtum