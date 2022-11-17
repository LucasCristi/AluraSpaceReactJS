import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Twitter from './twitter.svg'
import styles from './Rodape.module.scss'

const Rodape = () => {
    return ( 
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a href="https://www.facebook.com/lucas.cristi">
                    <img src={Facebook} alt="Logo do Facebook" />
                </a>
                <a href="https://www.instagram.com/lucascristi/">
                    <img src={Instagram} alt="Logo do Instagram" />
                </a>
                <a href="https://www.facebook.com/lucas.cristi">
                    <img src={Twitter} alt="Logo do Twitter" />
                </a>
            </div>
            <p>Desenvolvido por Lucas Cristi através de curso da <a href="https://www.alura.com.br/">Alura</a>.</p>
        </footer>
     );
}
 
export default Rodape;