import styles from './Landing.module.css'

const Landing = ({user, senateTrans}) => {
  return (
    <main className={styles.container}>
      <h1>
        hello, {user ? user.name : "friend"}
      </h1>
      <div>
      </div>
    </main>
  )
}
 
export default Landing