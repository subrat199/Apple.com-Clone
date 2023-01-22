import React from 'react'

const Search = () => {
  const [text,setText]=React.useState('')
  const [data, setData] = React.useState([])
  const handleChange = (e) => {
    setText(e.target.value)
}
const handleClick=()=>{
  getdata()
}
const getdata =async () =>{
try {
  const res=await fetch(`http://localhost:8000/posts?q=${text}`)
  const res2=await res.json()
 setData(res2)
} catch (error) {
  console.log(error)
}
}
  return (
    <div>
      <div>
      <input type="text" style={{border:'1px solid red'}} onChange={handleChange} value={text}/>
      <button onClick={handleClick}>Search</button>
      </div>
      {
       data.map((el)=>{
      return (
      <div key={el.id}>
        <img src={el.img} alt="" />
        <h5>{el.title}</h5>
        <h5>{el.price}</h5>
      </div>
      )
       })
      }
    </div>
  )
}

export default Search