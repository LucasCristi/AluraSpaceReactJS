import Tags from "../Tags";
import Styles from "./Galeria.module.scss";
import Fotos from "./fotos.json";
import Cards from "./Cards";
import { useState } from "react";

const Galeria = () => {
  const [itensFotos, setItensFotos] = useState(Fotos);
  const tags = [...new Set(Fotos.map((foto) => foto.tag))]; //vai percorrer as fotos e extrair o valor da TAG, new Set não deixará repetir as tags - TAGS ÚNICAS

  const fotosFiltradasPorTag = (tag) => {
    const novasFotos = Fotos.filter((foto) => {
      return foto.tag === tag;
    });

    setItensFotos(novasFotos)
  };

  return (
    <section className={Styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={fotosFiltradasPorTag} setItensFotos={setItensFotos} />
      <Cards fotos={itensFotos} styles={Styles} />
    </section>
  );
};

export default Galeria;
