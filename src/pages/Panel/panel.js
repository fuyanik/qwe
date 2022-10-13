
import "./panel.css";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db} from "../../firebase";
import { useEffect,useState } from "react";

const Panel = () => {
 
 
 
   // User status control
  //const [user] = useAuthState(auth);

  //console.log(user.email);

  // All user data array
  const [articles, setArticles] = useState([]);


  // Get all user data from fire base and push it to *articles* array
  useEffect(() => {
    const articleRef = collection(db, "VitamuUsersREAL");
    const q = query(articleRef, orderBy("createdAt", "desc"));

    // Listen for updates and set the state.
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setArticles(articles);
    });
  }, []);

  const [clicked, setClicked] = useState({total: 0});
  const getClass = idx => (`item ${clicked[idx] ? 'collection-item-selected' : 'collection-item'}`);
  const getClass2 = idx => (`item ${clicked[idx] ? 'collection-item-image-selected' : 'collection-item-image'}`);
  const getClass3 = idx => (`item ${clicked[idx] ? ' collection-item-texts-head-selected' : ' collection-item-texts-head'}`);
  const getClass4 = idx => (`item ${clicked[idx] ? ' collection-item-texts-right-selected' : ' collection-item-texts-right'}`);

  return (
    // user.email  == "musta@vitamu.com" && 
    <div className="Panel">
             <div className="collections"> 
        
         <h1>VİTAMU USERS</h1>
            
                  <div className="collection-items">
                      
                      {articles.map(({Name,UserAge,WhichOfTheFollowingAppliesToYou,BiRads,DoYouHaveAnyOfThese,MailAddress,IsHaveDigitalCopy,PreferTo,MedicalCenterName,createdAt}, idx) => {
                         return (
                           <div
                             key={idx}
                             onClick={() =>
                               setClicked((prev) => ({
                                 ...prev,

                                 [idx]: !prev[idx],
                               }))
                             }
                             className={getClass(idx)}
                           >
                             <p>
                               {Name}({UserAge})
                             </p>
                             <p>
                               BiRads Score :<span> {BiRads} </span>
                             </p>
                             <p>{createdAt.toDate().toDateString()}</p>

                             <div className={getClass4(idx)}>
                              
                             
                                 <div className="collection-item-texts-right-selected-child">
                                   <h2>Which of the following applies to you?</h2>
                                    {WhichOfTheFollowingAppliesToYou.map((item, idx) => { return (<p key={idx}>•{item}</p>)})}
                                 </div>
                                 <div className="collection-item-texts-right-selected-child">
                                   <h2>Do you have any of these?</h2>
                                   {DoYouHaveAnyOfThese.map((item, idx) => { return (<p key={idx}>•{item}</p>)})}
                                 </div>
                                 <div className="collection-item-texts-right-selected-child">
                                   <h2>Are You Have Digital Copy</h2>
                                   <p>{IsHaveDigitalCopy}</p>
                                   <p>Prefer To : {PreferTo}</p>
                                 </div>
                                 <div className="collection-item-texts-right-selected-child">
                                   <h2> MailAddress / Medical Center Name</h2>
                                   <p>{MailAddress}</p>
                                   <p>{MedicalCenterName}</p>
                                 </div>
                              

                             </div>
                           </div>
                         );
            })}
      
                  </div>
    
            </div>
                   
    </div>
  );
}

export default Panel;