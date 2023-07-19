import Title from "@/components/Title";
import styles from "../page.module.css";

const index = () => {
  return (
    <>
      <Title title="movie list" />
      <main className={styles.main}>Movies</main>
    </>
  );
};

export default index;
