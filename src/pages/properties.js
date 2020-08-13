import Properties from '../components/Properties/Properties'

export default function properties({properties}) {
  return (
    <div>
      <Properties properties={properties}/>
    </div>
  )
}



export const getServerSideProps = async () => {
  const propertiesRes = await fetch('https://foateblog.herokuapp.com/properties');
  const propertiesData = await propertiesRes.json();
  const properties = JSON.parse(JSON.stringify(propertiesData));


  return{
    props: {
      properties
    }
  }
}