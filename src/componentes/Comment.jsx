import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment() {
    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/oEduardBarbosa.png" />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Eduard Barbosa</strong>
                <time title="Publicado 11 de maio as 21:00" dateTime="2022-05-11 21:00:00">Cerca de 1h atrás</time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom JK, parabéns!!👏👏 </p>
          </div>

          <footer>
            <button>
              <ThumbsUp />
              Aplaudir <span>20</span>
            </button>
          </footer>
        </div>


      </div>
 );

    
}
