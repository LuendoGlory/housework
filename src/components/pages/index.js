import React from "react";

import ErrorPage from "../ErrorPage";
import Users from "../Users";
import EmployeMenage from "../EmployeMenage";
import Paiement from "../Paiement";
import Commandes from "../commande";
import Employes from "../PersonnelsHousework";


export default function Pages(props) {
  const choice = props.match.params.page;
  console.log("those are choices",choice)

  const form = ["users", "paiement", "employemenage","commandes","employes"];
  return (
    <div>
      {!form.includes(choice) && <ErrorPage />}
      {choice === "users" && <Users />}
      {choice === "paiement" && <Paiement />}
      {choice === "employemenage" && <EmployeMenage />}
      {choice === "commandes" && <Commandes/>}
      {choice === "employes" && <Employes/>}
    </div>
  );
}

