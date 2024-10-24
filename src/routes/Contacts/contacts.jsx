import Layout from '../../layouts/Default';
import ContactList from '../../components/ContactList/ContactList';
import ContactsFormBtn from '../../components/ContactFormBtn/ContactFormBtn';
import './contacts.scss'

function Contacts () {
    return (
        <Layout>
            <div className={'contacts'}>
                <div className={'contacts__add-contact'}>
                    <ContactsFormBtn text={'Add new contact'}/>
                </div>
                <ContactList />
            </div>
        </Layout>
    )
}

export default Contacts;
