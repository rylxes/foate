import Home from '../components/Home'
 
export default function index({properties}) {
  console.log(properties)
  return (
    <div>
      <Home properties={properties}/>
    </div>
  )
}



export const getServerSideProps = async () => {
  const propertiesRes = await fetch('https://foateblog.herokuapp.com/properties?_limit=8');
  const propertiesData = await propertiesRes.json();
  const properties = JSON.parse(JSON.stringify(propertiesData));


  return{
    props: {
      properties
    }
  }
}