import {React,useEffect,useState} from 'react'
import CarouselCustomArrows from '../components/HomeCrousal'
import {category} from '../utils/data'
import CatergoryCard from '../components/cards/CatergoryCard'
import IndivisualProductCard from '../components/cards/IndivisualProductCard'
import {getAllProducts} from './../api/index.js'


const Home = () => {
  const [products , setProducts] = useState([]) ;
  const [loading,setLoading] = useState(false) ;

  const getProducts = async () => {
    setLoading(true) ;
    await getAllProducts().then((res) => {
      setProducts(res.data);
      setLoading(false) ;

      
    }).catch((err) =>{
      console.error(err) ;
    })
  }
  // console.log(products) ;

  // will call getProduct function once after page loaded

  useEffect(()=>{
    getProducts() ;
  },[]);


  return (
    <div>
      <CarouselCustomArrows/>
      
      <div className = 'flex w-full items-center text-center font-bold text-2xl my-10 justify-center text-zinc-500 '>See All Categories</div>
      <div className='flex flex-wrap gap-6 justify-center'>
        {category.map((category)=>(
          <CatergoryCard category = {category} >hi</CatergoryCard>
        ))}
      </div>
      <div className = 'flex w-full items-center text-center font-bold text-2xl mt-10 justify-center text-zinc-500 '>BestSeller</div>
      <div className='flex flex-wrap gap-4 mt-8 items-center justify-center'>

        {products.map((p) => (
          <IndivisualProductCard product = {p}/>
        ))}

      </div>
    </div>
  )
}

export default Home