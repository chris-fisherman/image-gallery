/**** REQUIRE STATEMENTS: imports ****/
import React from 'react'


/**** IMAGE CARDS ****/
function ImgCard({image}) {
    /**** get name tags ****/
    let nameTags = image.tags
    /**** split those names ****/
    let names = nameTags.split(', ')
    /**** turn first letter name to UpperCase ****/
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1)
    }
    /**** add a space between words ****/
    let namesSeparated = names.join(' - ')

    return (
        <>
            <div className='imageContainer'>
                <div className='imageDiv' href={image.webformatURL} target='new'>
                    <img className='imagePicture' src={image.webformatURL} alt="" />
                </div>
                <p className='imageText'>{namesSeparated}</p>
            </div>
        </>
    )
}

export default ImgCard