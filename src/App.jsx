/**** REQUIRE STATEMENTS: imports ****/
import React, {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar'
import ImgCard from './components/ImgCard'
import NoFoundSection from './components/NoFoundSection'

/**** APP ****/
function App() {
  /**** REQUIRE STATEMENTS: instances ****/
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState("")

  /**** FETCH API ****/
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=48109032-954fc631d0a4bba9218b93a7f&q=${term}&image_type=photo&lang=pt&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])

  return (
    <>
      {/**** BACKGROUND PICTURES ****/}
      <div className='headerPictures'>
        <img src="/mobile-bg-0_1.png" alt='Picture frames 1'/>
        <img src="/mobile-bg-0_2.png" alt='Picture frames 1'/>  
      </div>
    
      {/**** HEADER ****/}
      <header className='header'>
        <h1 className='headerTitle'>Galeria de Fotos</h1>
        <SearchBar 
          searchText={(text) => setTerm(text)} 
          setTerm={setTerm} 
        />
      </header>

      {/**** MAIN ****/}
      <main className='main'>
        {!isLoading && images.length === 0 && (
          <NoFoundSection />
        )}
        {isLoading ? (
          <h1 className='loadingTitle'>Carregando <span>fotos</span>...</h1>
        ) : (
          <div className='gridImagesContainer'>
            {images.map((image) => (
              <ImgCard 
                key={image.id}
                image={image} 
              />
            ))}
          </div>
        )}
      </main>

      {/**** FOOTER ****/}
      <footer className='footer'>
        <p className='footerText'>© 2024 Galeria de Fotos. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
