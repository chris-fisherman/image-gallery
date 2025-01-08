/**** REQUIRE STATEMENTS: imports ****/
import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
  /**** REQUIRE STATEMENTS: instances ****/
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

  /**** FETCH API ****/
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=48109032-954fc631d0a4bba9218b93a7f&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])

  return (
    <>
      <div>App</div>
    </>
  )
}

export default App
