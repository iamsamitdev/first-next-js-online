import styles from '../styles/Home.module.css'

import styled from 'styled-components'

const Button = styled.button`
  background-color:blue;
  color:white;
  border: 2px solid black;
  padding:8px;
`

export default function Home() {
  return (
    <div className={styles.container}>

      <Button>Submit</Button>
      
      <h1 style={{color:'red','border':'1px solid #000'}}>Index Page</h1>
      <p className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod et doloribus quasi eligendi, cumque vel nobis voluptates illo magni ratione fugiat, non iure eveniet ex, esse tempora inventore sapiente saepe.</p>
      
      <style jsx>
        {`
          .desc{
            background-color:yellow;
          }
        `
        }
      </style>

      <img src="/images/girl.jpg" alt="" width="200" />
    </div>
  )
}
