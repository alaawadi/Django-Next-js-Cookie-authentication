import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../hocs/Layout';
import cookie from 'cookie';
import { API_URL } from '../config/index';

// import access from './api/account/access';

export default function Dashboard(){
    // const cookies = cookie.parse(req.headers.cookie ?? '');
    // const access = cookies.access ?? false;

    const router = useRouter();
    const [load, setLoad] = useState(true);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);
    // const access = useSelector(state => state.access);
    const loading = useSelector(state => state.auth.loading);
    // useEffect(()=>{
    //     console.log(token);
    // },[load])
    // setLoad(false)
    if (typeof window !== 'undefined' && !loading && !isAuthenticated)
        router.push('/login');

    

    return (
        <Layout
            title='httpOnly Auth | Dashboard'
            content='Dashboard page for httpOnly tutorial app'
        >
            <div className='p-5 bg-light rounded-3'>
                <div className='container-fluid py-3'>
                    <p className='fs-4 mt-3'>
                        Welcome {user !== null && user} 
                    </p>

                    <p></p>
                </div>
            </div>
        </Layout>
    );
};

// export default Dashboard;


// Dashboard.getInitialProps = async (req, res) => {
//     if (req.method === 'GET') {
//         const cookies = cookie.parse(req.headers.cookie ?? '');
//         const access = cookies.access ?? false;

//         if (access === false) {
//             return res.status(401).json({
//                 error: 'User unauthorized to make this request'
//             });
//         }

//         try {
//             const apiRes = await fetch(`${API_URL}/api/account/user`, {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': `Bearer ${access}`
//                 }
//             });
//             const data = await apiRes.json();

//             if (apiRes.status === 200) {
//                 return {access:access}
//             } else {
//                 return res.status(apiRes.status).json({
//                     error: data.error
//                 });
//             }
//         } catch(err) {
//             return res.status(500).json({
//                 error: 'Something went wrong when retrieving user'
//             });
//         }
//     } else {
//         res.setHeader('Allow', ['GET']);
//         return res.status(405).json({
//             error: `Method ${req.method} not allowed`
//         });
//     }
// };



Dashboard.getInitialProps  = async (user) => {
    
    const apiRes = await fetch(`${API_URL}/api/account/user`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${user}`
        }
    });
    const data = await apiRes.json();


    return {dataa:data.user}
    
};
