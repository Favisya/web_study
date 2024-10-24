import Layout from '../layouts/Default';
import { mainPageText } from '../utils/dummyData';
import './root.scss';

export default function Root() {
    return (
        <Layout>
            <div className={'root'}>
                {mainPageText}
            </div>
        </Layout>
    );
}