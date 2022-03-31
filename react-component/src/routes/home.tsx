import React from "react";
import ClassCards from "../components/ClassCard/ClassCards";
import ClassSearch from "../components/ClassSearch";
export default function Home(){
  return(
    <main>
      <ClassSearch/>
      <ClassCards cost={100} name={'Sofa'} img={'/svg/cart.svg'} stock={true}/>
    </main>
  )
}