import React from 'react';

import { FaHome } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { GoRequestChanges } from 'react-icons/go';
import { BiAddToQueue } from 'react-icons/bi';
import { RiCustomerService2Line } from 'react-icons/ri';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { SiStaffbase } from 'react-icons/si';

export const SideBarData=[
     {
            title: "Home",
            icon: <FaHome />,
            link: "admin/home"
        },
      {
          title: "Users",
          icon: <FaUsers />,
          link: "/users"
      }, 
      {
          title: "Nouvelle Demande",
          icon: <GoRequestChanges />,
          link: "/demandes"
      },
      {
          title: "Ajouter employé",
          icon: <BiAddToQueue />,
          link: "/employé"
      },  
      {
          title: "Ajouter un clients",
          icon: <RiCustomerService2Line />,
          link: "/clients"
      },  
      {
          title: "Paiement",
          icon: <RiSecurePaymentFill />,
          link: "/paiement"
      }, 
      {
          title: "Personnel Housework",
          icon: <SiStaffbase />,
          link: "/personnels"
      }  
    ]
