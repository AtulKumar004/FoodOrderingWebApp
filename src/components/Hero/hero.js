import React from 'react'
import styles from "./hero.module.scss"
import Image from 'next/image'

export default function Hero() {
    return (
        <main className={styles.heroCont}>

            <div className='container  flex  mx-auto h-full'>
                <div className={styles.heroLeft} >
                    <p >
                        Buy your groceries and have it delivered
                        to your doorstep with ease.
                    </p>
                </div>
                <div className='flex-1 h-full flex items-end'>
                    <img className='object-contain' src = "grocery-png.png" alt = ""  />
                </div>
            </div>
        </main>
    )
}
