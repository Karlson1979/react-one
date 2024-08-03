import React from 'react'
import css from '../components/user.module.css'
export const Section = ({children}) => {
  return (
    <section className={css.userSection}>
{children}
    </section>
  )
}
