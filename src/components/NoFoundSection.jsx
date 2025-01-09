/**** REQUIRE STATEMENTS: imports ****/
import React from "react";


/**** NO FOUND SECTION ****/
function NoFoundSection() {
    return (
        <section className='noFoundSection'>
            <img src="../src/assets/no_found-picture.png" alt="" width={400}/>
            <h1 className='noFoundTitle'><span>Nenhuma</span> foto encontrada</h1>
            <p className="noFoundText">Certifique-se de ter <strong>digitado corretamente</strong> o que procurava ou tente uma <strong>palavra nova</strong>.</p>
        </section>
    )
}

export default NoFoundSection