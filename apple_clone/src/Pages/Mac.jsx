import React from 'react'
import axios from 'axios'
import { useEffect,useReducer,} from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import Productcard from './../Component/Productcard';
const initstate={
    products:[],
    isLoading:true,
    isError:""
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch_success':
          return {
            ...state,
            products: action.payload,
            isLoading: true,
            isError:false
          };
        case 'fetch_error':
          return {
            isLoading: false,
            isError:"something went wrong"
          };
        default:
          throw new Error();
      }
}
const Mac = () => {
    const [state, dispatch] = useReducer(reducer, initstate) 
    useEffect(() =>{
        getdata() 
    },[])
const getdata= () =>{
    axios
    .get(' http://localhost:8000/posts')
    .then((res)=>{
        dispatch({
            type: 'fetch_success',
            payload: res.data,
        })
        })
    .catch((err)=>{dispatch({
            type: 'fetch_error',
            payload:[],
    })
    })
}
const {products,isLoading,isError}=state;
  return (
    <div>
        <h1>Productpage</h1>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {
             products.map((product)=>{
                return (
                    <GridItem  key={product.id}>
                        <Productcard 
                        name={product.title} 
                        price={product.price} 
                        img={product.img}
                        Id={product.id}
                        />
                    </GridItem>
                )
            })
        }
 
</Grid>
       
    </div>
  )
}
export default Mac