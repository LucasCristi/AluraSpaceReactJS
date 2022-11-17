import Botao from "componentes/Botao";
import FotosPopulares from "./fotos-populares.json";
import Styles from "./Populares.module.scss";

const Populares = () => {
  return (
    <aside className={Styles.populares}>
      <h2>Populares</h2>
      <ul className={Styles.populares__imagens}>
        {FotosPopulares.map((foto) => {
          return (
            <li key={foto.id}>
              <img src={foto.path} alt={foto.alt} />
            </li>
          );
        })}
      </ul>
      <Botao >Ver mais fotos </Botao>
    </aside>
  );
};

export default Populares;
