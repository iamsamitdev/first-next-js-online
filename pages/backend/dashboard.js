import React from 'react'
import styles from './Backend.module.css'

const dashboard = () => {
    return (

        <div>
            <style jsx global>
        {`
            body {
                background: red;
            }
        `}
        </style>

            <h1 className={styles.heading}>This is dashboard page</h1>
            <img src="../../images/girl.jpg" width="200" alt="" />
            <p className="mytitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad voluptatibus, maiores dolor harum similique reiciendis, asperiores inventore dignissimos, ratione est alias voluptates delectus hic incidunt. Et cumque distinctio omnis?</p>
        </div>
    )
}

export default dashboard

// http://localhost:3000/backend/dashboard