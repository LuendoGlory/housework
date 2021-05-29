import React from "react";
import ContainerService from "./ContainerService"

export default function ServiceChoice(props) {
  const {service}= props.match.params;


  const form = ["Domestique","Babyssiteur","Jardinier" , "Chef_cuisinier","Santinel","Coursier","Chef_cuisinier" ];
  return (
    <div>
      {!form.includes(service) && <p>error page not availabl</p>}
      {form.includes(service) && <ContainerService service={service}/>}
    
    </div>
  );
}

