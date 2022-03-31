import React from "react";
import ClassCards from "../components/ClassCard/ClassCards";
import ClassSearch from "../components/ClassSearch";
export default function Home(){
  return(
    <main>
      <ClassSearch/>
      <ClassCards/>
    </main>
  )
}