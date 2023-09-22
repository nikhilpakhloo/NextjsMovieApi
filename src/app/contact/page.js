
import styles from "@/styles/contact.module.css"
export default function page() {
  return (
    <>
      <div className={styles.contactpage}>
        <div className={styles.contactheading}>
          <h2>Contact Us</h2>
        </div>
        <div className={styles.cardscontainer}>
          <div className={styles.cards}>

          </div>
          <div className={styles.cards}>

          </div>
          <div className={styles.cards}>

          </div>
        </div>
        <div className={styles.secondheading}>
          <h3>We'd love to hear <span>from you</span> </h3>
        </div>
        <div className={styles.formcontainer}>
          <div className={styles.form}>
            <form >
              <label > Enter your Name:</label>
              <input type="text" placeholder="Enter your name" />
              <label > Email:</label>
              <input type="text" placeholder="Enter your Email" />
              <label > Phone Number:</label>
              <input type="text" placeholder="Enter your Number" />
              <label > Message:</label>
              
 <textarea id="message" name="message" rows="8" cols="32" placeholder="Enter your message"></textarea>
              <button>Send messsage</button>
            </form>
          
          </div>
        </div>

      </div>


    </>
  )
}
