import {useContext} from "react"
import {FirebaseContext } from '../../components/Firebase/firebase';
import {GET_USER,GET_CURRENT_USER,
    GET_ALL_USERS} from "../types/userTypes"


const firebase = useContext(FirebaseContext)
const auth=(dispatch)=>async()=>{
        const currentUser=await firebase.auth.currentUser
        console.log("current user out here",currentUser)
        dispatch({
            type:GET_CURRENT_USER,
            payload:currentUser

        })

}

exports= {
    auth
}
