import gV from "../../gV";
import "./card9.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { storage } from "../../firebase";
import { db } from "../../firebase";
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import { useGlobalState } from "../../hookState";



import { getAuth } from "firebase/auth";
import {doc,setDoc, arrayUnion,   } from "firebase/firestore";
import PayScreen from "../../pages/PayScreen/payScreen";



const Card9 = ({display,displayText,buttonText,}) => { 
 
 const [isPayScreen] = useGlobalState("isPayScreen");

const [arrays, setArray] = useState([]);

const [progress, setProgress] = useState(0);

const auth = getAuth();
const user = auth.currentUser;

   
const userRef = user ?  doc(db, "VitamuUsersREAL", `${user.email}`) : null;


    const handleImageChange = (e) => { 

        //  arrays.push(...Array.from(e.target.files)); 
 
         arrays.push(...Array.from(e.target.files))

       //  setArray(Array.from(e.target.files));
       
        
         //setArray(prevState => [...prevState, ...Array.from(e.target.files)]);
         
         gV.activeStep = 2;
       
        
          user ? console.log("user var") : console.log("user yok")
       
       //IMAGELERİ STORAGE YÜKLEME
       arrays.map((item) => {
         const storageRef = ref(storage, `/${user ? user.email : gV.MailAddres }/${item.name}`);

         const uploadImage = uploadBytesResumable(storageRef, item);

          //FOTİLERİ STORAGE YÜKLEME
         uploadImage.on("state_changed", (snapshot) => {
           const progressPercent = Math.round(
             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
           );
           setProgress(progressPercent);
         },
          (error) => {
            console.log(error);
          },
          () => {

            
            

            // URLLERİ FİRESTORE DATABASE'E YÜKLEME
            getDownloadURL(uploadImage.snapshot.ref)
            .then((url) => {
                 
                gV.imagesUrl.push(url);

                user &&
                 setDoc(userRef,
                  { imagesUrl: arrayUnion(url)}, 
                  { merge: true }
                  );
                 

            });
            
            


          }
         
         
         
         );
       
       
       
        });


        
              }




            
             

    

       



     return (
      <>

      <ToastContainer/>
        {
          isPayScreen ? <PayScreen/> :
         (
          <div className="card9" style={{ display: display }}>
            <div className="card9-main">
              <div className="card9-main-texts">
                <p style={{display: displayText}} >
                  Alright then, here is where{" "}
                  <span> you can upload your mammogram.</span>You can drag and
                  drop your files to the area below or click on the area and
                  choose the files to be uploaded.
                </p>
                <p style={{display: displayText}} >
                  the files may have .dcm, .dicom, or .jpeg extensions. You may
                  upload them separately or together. Also, it is good to upload
                  your recheck and physician reports.
                </p>
                {/*  { gV.image !== "" && 
           
             
    <div  for="file" className="card9-main-texts-image-name"> {gV.image.name} <p>(</p>{((progress))}<p>%</p><p>)</p></div> }  */}

                {arrays.map((item, idx) => (
                  <div className="card9-main-texts-image-name" key={idx}>
                    {" "}
                    {item.name} <label>(</label>
                    {progress}
                    <p>%</p>
                    <p>)</p>
                  </div>
                ))}

                <input
                  multiple="multiple"
                  className="card9-main-texts-input"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e)}
                  onClick={(e) => (gV.p = 7)}
                />
                <label for="file" className="card9-main-texts-button">
                  {" "}
                  {buttonText}
                </label>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Card9;