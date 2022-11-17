import styles from "./Tags.module.scss";
import Fotos from '../Galeria/fotos.json'

const Tags = ({ tags, filtrarFotos, setItensFotos }) => {
  return (
    <div className={styles.tags}>
      <p>Filtre por tags:</p>
      <ul className={styles.tags__lista}>
        {tags.map((tag) => {
          //vai percorrer cada tag e retorna-las na tela para filtros
          return (
            <li key={tag} onClick={() => filtrarFotos(tag)}>
              {tag}
            </li>
          );
        })}
        <li onClick={() => setItensFotos(Fotos)}>Todas</li>
      </ul>
    </div>
  );
};

export default Tags;
