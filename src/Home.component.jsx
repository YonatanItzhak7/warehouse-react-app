import Header from './Header.component'
import Footer from './Footer.component'
import Employee from './Employee.component';
function Home(props){
    return(
        <div>        
            <Header/>
            <h1>Welcome to {props.title} Website</h1>
            <Employee first="d"/>
            <Footer/>
        </div>
    )
}

export default Home;