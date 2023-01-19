// import { useRouter } from 'next/router';
// import { useState } from 'react';

// export default function BukuByKdbuku(props) {
//     const [kdbuku, setKdbuku] = useState('')
//     const router = useRouter()

//     function submitHandler(e) {
//         e.preventDefault();
//         router.push({
//             pathname: '/admin/buku-gql/databuku',
//             query: { 'kdbuku': kdbuku }
//         })
//     }
//     return (
//         <div className="container">
//             <form onSubmit={submitHandler}>
//                 <div className="row">
//                     <div className="col col-lg-8"></div>
//                     <div className="col col-lg-4 d-flex flex-reverse">
//                         <input type="text"
//                             className="form-control mw-50"
//                             placeholder="cari dengan KDBUKU"
//                             value={kdbuku}
//                             onChange={(e) => setKdbuku(kdbuku => e.target.value)}
//                         />
//                         <input type="submit" value=" Cari " className="btn btn-primary ms-2 fs-6" 
//                         style={{width : '75px'}} />
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }

import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BukuByKdbuku(props) {
     const [kdbuku, setKdbuku] = useState('')
     const router = useRouter()
     
     function submitHandler(e) {
        e.preventDefault();
        router.push({
             pathname: '/admin/buku-gql/databuku',
             query: { 'kdbuku': kdbuku }
             })
            }
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col col-lg-8"></div>
                    <div className="col col-lg-4 d-flex flex-reverse">
                        <input type="text"
                            className="form-control mw-50"
                            placeholder="cari dengan KDBUKU"
                            value={kdbuku}
                            onChange={(e) => setKdbuku(kdbuku => e.target.value)}
                        />
                        <input type="submit" value=" Cari " className="btn btn-primary ms-2 fs-6" style={{width : '75px'}} />
                    </div>
                </div>
            </form>
        </div>
    );
}
