import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const Admin = () => {
    const [Formstate,setFormState]=useState({
        name:"",
        img:"",
        price:""
    })
    const handleChange=(e)=>{
        setFormState({...Formstate, [e.target.name]:e.target.value })
    }
    const handleSubmit=(e)=>{
      axios({
        method:'post',
        url:` http://localhost:8000/posts`,
        data:{
          name:Formstate.name,
          img:Formstate.img,
          price:Formstate.price
        }
      })
    }
    const styles={
      border:"1px solid black",
      width:'200px',
      marginTop:'10px'
    }
    const {name,price,img}=Formstate
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <input type="text" name='name' value={name} onChange={handleChange} style={styles} placeholder='product name'/> <br />
                <input type="text" name='img' value={img} onChange={handleChange} style={styles} placeholder='product image'/> <br />
                <input type="number" name='price' value={price} onChange={handleChange} style={styles} placeholder='product price'/>  <br />
                <input type='submit' style={styles}/>
        </form>
    </div>
  )
}

export default Admin