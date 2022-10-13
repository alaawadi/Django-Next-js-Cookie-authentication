import cookie from 'cookie';
import { API_URL } from '../config/index';


export const fun = async (req, res) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;

        if (access === false) {
            return res.status(401).json({
                error: 'User unauthorized to make this request'
            });
        }

        try {
            const apiRes = await fetch(`${API_URL}/api/account/user`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${access}`
                }
            });
            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json({
                    user: data.access
                });
            } else {
                return res.status(apiRes.status).json({
                    error: data.error
                });
            }
        } catch(err) {
            return res.status(500).json({
                error: 'Something went wrong when retrieving user'
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            error: `Method ${req.method} not allowed`
        });
    }
};


import Layout from '../hocs/Layout';

const homePage = ({access}) => (
    <Layout
        title='MASHVISOR | 404'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div align='center'>{access}</div>
        <div align='center'>page not found!</div>
    </Layout>
);

export default homePage;
