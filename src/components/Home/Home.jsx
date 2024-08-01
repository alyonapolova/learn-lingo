import mainImg from '../../assets/images/mainImg.jpg';
import { Statistics } from '../Statistics';
import css from './Home.module.css';

export const Home = () => {
  return (
    <main>
      <section className={css.mainInfo}>
        <div className={css.mainDiv}>
          <h1 className={css.title}>
            Unlock your potential with the best{' '}
            <span className={css.titleSpan}>language</span> tutors
          </h1>
          <p className={css.text}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={css.startBtn}>Get started</button>
        </div>
        <div>
          <img className={css.mainPic} alt="Girl with laptop" src={mainImg} />
        </div>
      </section>
      <section>
        <Statistics />
      </section>
    </main>
  );
};
