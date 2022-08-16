import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
    return (
      <div className={styles.comment}>
        <img src="https://github.com/oEduardBarbosa.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Eduard Barbosa</strong>
                <time title="Publicado 11 de maio as 21:00" dateTime="2022-05-11 21:00:00">Cerca de 1h atrás</time>
              </div>

              <button title="Deletar comentário">
                <Trash size={20} />
              </button>
            </header>

            <p>Muito bom JK, parabéns!!👏👏 </p>
          </div>

          <fotter>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </fotter>
        </div>


      </div>
 );

    
}
