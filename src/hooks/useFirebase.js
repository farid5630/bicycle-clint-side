import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from "../Pages/Login/firebase/firebase.init";


initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [ authError, setAuthError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
           setAuthError('');
           const newUser = {email, displayName: name}
           setUser(newUser);
            // save to database
            saveUser(email, name, 'POST');
           // send name to firebase after creation
           updateProfile(auth.currentUser, {
            displayName: name 
          }).then(() => {
            
          }).catch((error) => {
    
          });

           history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=>setIsLoading(false));
    }

    const loginUser = (email, password, location, history ) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));

    }

    // sign in using google

    const loginWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(()=>setIsLoading(false));
    };


    // 
    useEffect(() => {
        fetch(`https://frozen-spire-29237.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

   //observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
                
            }else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    } , [auth])



    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user =  {email, displayName};

        fetch('https://frozen-spire-29237.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }


    return {
        user,
        isLoading,
        authError,
        admin,
        registerUser,
        loginUser,
        loginWithGoogle,        
        logOut,

    }
}

export default useFirebase;