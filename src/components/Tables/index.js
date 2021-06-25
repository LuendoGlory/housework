import React, {Fragment,useEffect,useState} from 'react';

const Tables = () => {
  

  const [commandes,setCommandes]=useState([])

    return (
<Fragment>
 <div className="">

 </div>

<table className="tableau_style">
  <thead>
    <tr>
        <th>Id_Commande</th>
        <th>Client</th>
        <th>Date</th>
        <th>Présentation</th>
        <th>Exigence</th>
        <th>Id_Adresse</th>
        <th>Comission</th>
        <th>Valodation</th>
        <th>E. menage</th>
        <th>Valider</th>
        <th>Edit</th>
        <th>Delete</th>
        

      </tr>
  </thead>
      
<tbody>
  <tr>
        <td>5vkjhckskjcskc</td>
        <td>Luendo</td>
        <td>2021-02-03</td>
        <td>2021-02-05</td>
        <td>il doit se presenter à temps</td>
        <td>Ngagara</td>
        <td>10000</td>
        <td>Validé</td>
        <td>Iradukunda</td>
        <td><button type="button" class="btn btn-success">Valider</button></td>
        <td><button type="button" class="btn btn-secondary">Edit</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>

      </tr>
      <tr>
        <td>5vkjhckskjcskc</td>
        <td>Luendo</td>
        <td>2021-02-03</td>
        <td>2021-02-05</td>
        <td>il doit se presenter à temps</td>
        <td>Buyenzi</td>
        <td>10000</td>
        <td>Validé</td>
        <td>Iradukunda</td>
        <td><button type="button" class="btn btn-success">Valider</button></td>
        <td><button type="button" class="btn btn-secondary">Edit</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>

      </tr>
      <tr>
        <td>5vkjhckskjcskc</td>
        <td>Luendo</td>
        <td>2021-02-03</td>
        <td>2021-02-05</td>
        <td>il doit se presenter à temps</td>
        <td>Nyakabiga</td>
        <td>10000</td>
        <td>Validé</td>
        <td>Iradukunda</td>
        <td><button type="button" class="btn btn-success">Valider</button></td>
        <td><button type="button" class="btn btn-secondary">Edit</button></td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>

      </tr>
      <tr>
        <td>5vkjhckskjcskc</td>
        <td>Luendo</td>
        <td>2021-02-03</td>
        <td>2021-02-05</td>
        <td>il doit se presenter à temps</td>
        <td>Bwie</td>
        <td>10000</td>
        <td>Validé</td>
        <td>Iradukunda</td>
        <td><button type="button" class="btn btn-success">Valider</button></td>
        <td><button type="button" className="btn btn-secondary">Edit</button></td>
        <td><button type="button" className="btn btn-danger">Delete</button></td>

      </tr>
</tbody>
      

</table>


{/*
<Fragment>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
        


      <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Valider</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          
        </tr>
      </tbody>
    </table>
</Fragment>*/}


</Fragment>


    );
};

export default Tables;