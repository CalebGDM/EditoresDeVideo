import { useRouter } from "next/router";
import editors from "../data/editors";
import styles from "../styles/Editors.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

export default function Editor() {
  const router = useRouter();
  const editor = router.query.editorId;
  const Titlevariants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const Resumenvariants = {
    hidden: { opacity: 0, x: -2000, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const Videovariants = {
    hidden: { opacity: 0, x: 2000, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  const Featvariants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };
  return (
    <div>
      <Head>
        <title>{editors[editor].editorName}</title>
      </Head>

      <div className={styles.main}>
        <motion.div
          variants={Titlevariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
        >
          <div className={styles.titleL}>
          <Link href={{ pathname:"/"}}>
              <a className={styles.back}>
                <h1>&larr;</h1>
              </a>
              </Link>
          <h1 className={styles.title}>{editors[editor].editorName}</h1>
          </div>
        </motion.div>
        <div className={styles.content}>
          <div className={styles.resumen}>
            <motion.div
              variants={Resumenvariants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}
            >
              <p className={styles.description}>{editors[editor].resumen}</p>
            </motion.div>
            <motion.div
              variants={Featvariants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}
            >
              <p className={styles.subtitle}>Caracterisitcas</p>
              {editors[editor].caracterisitcas.map((item, index) => (
                <>
                  <li>{item}</li>
                </>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={Videovariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
          >
            <iframe
              width="490"
              height="315"
              src={editors[editor].videoUri}
            ></iframe>
            <p className={styles.subtitle}>Versiones</p>
            <div id="multicolumn1">
              {editors[editor].versiones.map((item, index) => (
                <>
                  <div className="lol">
                    <li>{item}</li>
                  </div>
                </>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
