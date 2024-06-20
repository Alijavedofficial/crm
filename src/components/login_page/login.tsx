
import React from "react";
import styles from './Login.module.css';

export default function Login() {
  return (
    <div className={styles.loginForm}>
      <div>
       <img src="/assets/loginImage.svg"></img>
      </div>
      <div className={styles.signinDiv}>
        <div>
       <h1 className={styles.SigninLabel}>Sign In</h1>
       <div>
       <label htmlFor="emailAdress" className={styles.Email} >Email Address</label>
       <input className={styles.input} >
        
        
       </input>
       </div>
       <div>
       <label htmlFor="password" className={styles.Email} >Password</label>
       <input className={styles.input}>
        
        
       </input>
       </div>
       </div>
      </div>
    
    
    </div>
  );
}
