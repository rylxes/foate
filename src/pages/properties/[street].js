import PropertyDetail from '../../components/Properties/PropertyDetails'
import slugify from 'slugify';
import {useRouter} from 'next/router'


export default function property({properties}) {
  const router = useRouter();
  const currentCard = properties.filter(property => slugify(property.street).toLowerCase() === router.query.street);
  return (
    <div>
      <PropertyDetail currentCard={currentCard[0]}/>
    </div>
  )
}


export const getStaticProps =  async() => {
  const propertiesRes = await fetch('https://foateblog.herokuapp.com/properties');
  const propertiesData = await propertiesRes.json();
  const properties = JSON.parse(JSON.stringify(propertiesData));

  return {
    props: {properties}
  }
}

export const getStaticPaths = async () => {
  const propertiesRes = await fetch('https://foateblog.herokuapp.com/properties');
  const propertiesData = await propertiesRes.json();
  const properties = JSON.parse(JSON.stringify(propertiesData));


  // Get the paths we want to pre-render based on posts
  const paths = properties.map((property) => ({
    params: { street: slugify(property.street).toLowerCase() }
  }))
  
  return {
    paths,
    fallback: false
  }
}