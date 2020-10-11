import About from '../components/About/About'





export default function about({about}) {
  return (
      <div>
        <About about={about}/>
      </div>
    );
}


export const getServerSideProps = async () => {

  const aboutRes = await fetch('https://foateblog.herokuapp.com/about');
  const aboutData = await aboutRes.json();
  const about = JSON.parse(JSON.stringify(aboutData));
  
  return{
    props: {about}
  }
}