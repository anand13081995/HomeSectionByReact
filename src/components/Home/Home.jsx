const Home = ()=> {

    return (
        <nav style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', height:'60px'}}>

            <section style={{display:'flex', alignItems:'center', gap:'15px'}}>
            <a href="#"><img src="https://flowbite.com/docs/images/logo.svg" alt="logo" /></a>
            <h3><a href="#" style={{display:'inline-block' ,width:'200px', color:'black', fontWeight:'600'}}>GeekFoods</a></h3>
            </section>


            <div style={{display:'flex', justifyContent:'space-around', gap:'35px'}}>
                <span><a href="#" style={{fontWeight:'600'}}>Home</a></span>
                <span><a href="#" style={{color:'black',fontWeight:'600' }}>Quote</a></span>
                <span><a href="#" style={{color:'black',fontWeight:'600'}}>Resturants</a></span>
                <span><a href="#" style={{color:'black',fontWeight:'600'}}>Foods</a></span>
                <span><a href="#" style={{color:'black',fontWeight:'600'}}>Contact</a></span>
            </div>

            <button style={{borderRadius:'5px', height:'40px', width:'120px', backgroundColor:'rgb(29,78,216)', color:'white', border:'none',cursor:'pointer'}}>Get Started</button>
            
        </nav>
    )
}

export default Home;