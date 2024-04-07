// // import React from 'react'
// // import { Link } from 'react-router-dom'

// // export default function Card(props) {
// //   return (
// //     <div>
// //           <div className='border m-2 '  >
// //               {/* <pre>{JSON.stringify(props.post, null, 4)}</pre> */}

// //               <div className="card " style={{ width: "11rem", height:"11rem" }} key={props.name} >
// //                   <Link to={`/singlepost/${props.name}`} style={{ textDecorationLine: "none", color: "black" }} >
                     
// //                       <div >
// //                           <div>
// //                               <h5 className="card-title  ">{props.name}</h5>
// //                               <p className="card-text  ">{props.name}</p>
// //                         </div>
// //                       </div></Link>
                 
// //               </div>
// //           </div>
// //     </div>
// //   )
// // }



// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Card(props) {
//     return (
//         <div>
//             <div className='border m-2'>
//                 {/* <pre>{JSON.stringify(props.post, null, 4)}</pre> */}

//                 <div className="card" style={{ width: "11rem", height: "11rem" }} key={props.name}>
//                     <Link to={`/singlepost/${props.name}`} style={{ textDecorationLine: "none", color: "black" }}>
//                         <div className="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
//                             <div>
//                                 <h5 className="card-title text-center">{props.name}</h5>
//                                 <p className="card-text text-center">{props.name}</p>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }




import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        <div>
            <div className='border m-2'>
                {/* <pre>{JSON.stringify(props.post, null, 4)}</pre> */}

                <div className=" card position-relative" style={{ width: "11rem", height: "9rem", backgroundColor:"#000080"  }} key={props.name}>
                    <Link to={`/singlepost/${props.name}`} style={{ textDecorationLine: "none", color: "black" }}>
                        <div className="position-absolute top-50 start-50 translate-middle" style={{ transform: "translate(-50%, -50%)" }}>
                            <div>
                                <h5 className="text-light card-title text-center">{props.icon}</h5>
                                <p className="text-light card-text text-center">{props.name}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

