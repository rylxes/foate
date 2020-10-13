import Contact from '../components/Contact/Contact'

export default function contact({contact}) {
  return (
    <div>
      <Contact contact={contact}/>
    </div>
  )
}


export const getServerSideProps = async () => {

  const contactRes = await fetch('https://foateblog.herokuapp.com/contact');
  const contactData = await contactRes.json();
  const contact = JSON.parse(JSON.stringify(contactData));
  
  return{
    props: {contact}
  }
}