import Home from '../components/Home'
import {useContent} from '../context/ContentContext' 


export default function index({ properties}) {
  const {state, dispatch} = useContent();
  // console.log(state, dispatch)
  return (
    <div>
      <Home properties={properties}/>
    </div>
  )
}



export const getServerSideProps = async () => {
  // const homeRes = await fetch('https://foateblog.herokuapp.com/home');
  // const homeData = await homeRes.json();
  // const home = JSON.parse(JSON.stringify(homeData));

  const propertiesRes = await fetch('https://foateblog.herokuapp.com/properties?_limit=8');
  const propertiesData = await propertiesRes.json();
  const properties = JSON.parse(JSON.stringify(propertiesData));

  return{
    props: {
      // home,
      properties
    }
  }
}