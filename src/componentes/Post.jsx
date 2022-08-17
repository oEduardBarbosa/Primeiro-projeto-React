import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}> 
                    <Avatar  src="https://github.com/oEduardBarbosa.png" />
                    <div className={styles.authorInfo} >
                        <strong>Eduard Barbosa</strong>
                        <span>Web Developer</span>
                    </div>    
                </div>

                <time title="Publicado 11 de maio as 21:00" dateTime="2022-05-11 21:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}> 
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                 placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )

}