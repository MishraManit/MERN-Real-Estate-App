import React from 'react'
import classes from "./footer.module.css"
const Footer = () => {

  const mystyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Arial",
   
  };
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam illum quam optio autem suscipit incidunt dicta dolorum eum dolores recusandae laboriosam expedita quo facilis, numquam et.
            Delectus atque dolorum sapiente.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +918004473290</span>
      
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: Bhopal</span>
        </div>
      </div>
      <div>
      <h1 style={mystyle}>
      <span>
   © {new Date().getFullYear()} mishraDev
</span>
      </h1>
      </div>
    </footer>
  )
}

export default Footer