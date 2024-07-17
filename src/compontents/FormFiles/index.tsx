
import "./styeles.css"



export default function FormFiles() {

  
    return (

        <section className="container-form ">

        
            <h2>Informações</h2>
            <form>
                <div>
                    <input type="url" id="perfil" name="perfil" placeholder="Perfil:" required />
                        
                </div>
                <div>
                    <input type="number" id="seguidores" name="seguidores" placeholder="Número de Seguidores:" required />
                       
                </div>
                <div>
                    <input type="text" id="localidade" name="localidade" placeholder="Localidade:" />
                        
                </div>
                <div>
                    <input type="text" id="nome" name="nome" placeholder="Nome:" required />
                        
                </div>
                
            </form>

        </section>
    );
}