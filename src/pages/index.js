import Home from '../components/Home'
 
export default function index({users}) {
  console.log(users)
  return (
    <div>
      <Home/>
      <pre>{JSON.stringify(users, null, 4)}</pre>
    </div>
  )
}


export const getServerSideProps = async ( ) => {
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();
  console.log('api: ', users)
  return {
    props: {users}
  }
}