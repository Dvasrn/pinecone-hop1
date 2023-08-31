import styles from "./blog.module.css";

export default function Blog() {
  return (
    <div className={styles.white}>
      <div className={styles.meta}>
        <div className={styles.bilgee}>
          <img src="logo.png" className={styles.logo}></img>
          <div className={styles.flex}>
            <div>Home</div>
            <div>Blog</div>
            <div>Single Post</div>
            <div>Pages</div>
            <div>Contact</div>
          </div>
          <div className={styles.search}>
            Search
            <img src="search-outline.png" className={styles.photo}></img>
          </div>
          <div className={styles.sunny}>
            <div className={styles.radius}>
              <img src="sunny.png" className={styles.sun}></img>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.size}>
        <div className={styles.back}>
          <div className={styles.flexone}>
            <div className={styles.flexs}>
              <img src="image.png" className={styles.image}></img>

              <div className={styles.column}>
                <div>Jonathan Doe</div>
                <div className={styles.collaborator}>Collaborator & Editor</div>
              </div>
            </div>

            <div className={styles.meet}>
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </div>

            <div className={styles.flexs}>
              <img src="logo-facebook.png" className={styles.logox}></img>
              <img src="logo-twitter.png" className={styles.logox}></img>
              <img src="logo-instagram.png" className={styles.logox}></img>
              <img src="logo-youtube.png" className={styles.logox}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
