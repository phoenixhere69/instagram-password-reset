import logo from './logo.svg';
import './App.css';

function App() {
  const handleLogin = () => {
    console.log('Log in pressed');
  }
  return (
    <>
        <main className="flex align-items-center justify-content-center">
            <section id="mobile" className="flex">
            </section>
            <section id="auth" className="flex direction-column">
                <div className="panel login flex direction-column">
                    <h1 title="Instagram" className="flex justify-content-center">
                    <i style={{ backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v4/yv/r/KoLLpWDb4f6.png")', backgroundPosition: '0px -52px', backgroundSize: 'auto', width: '175px', height: '51px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i>
                    </h1>
                    <form>
                        <label htmlFor="email" className="sr-only">Phone number, email or username</label>
                        <input name="email" placeholder="Phone number, email or username" />
    
                        <label htmlFor="password" className="sr-only">Senha</label>
                        <input name="password" type="password" placeholder="Password" />
    
                        <button onClick={handleLogin} type="button">Log in</button>
                    </form>
                    <div className="flex separator align-items-center">
                        <span></span>
                        <div className="or">Or</div>
                        <span></span>
                    </div>
                    <div className="login-with-fb flex direction-column align-items-center">
                        <div>
                            <img />
                            <a>Log in with facebook</a>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
                <div className="panel register flex justify-content-center">
                    <p>Don't have a account?</p>
                    <a href="#">Sign up</a>
                </div>
                <div className="app-download flex direction-column align-items-center">
                    <p>Get the app</p>
                    <div className="flex justify-content-center">
                    <img alt="Download on the App Store" className="x1vqgdyp" src="https://static.cdninstagram.com/rsrc.php/v4/yt/r/Yfc020c87j0.png" />
                    <img alt="Get it on Google Play" className="x1vqgdyp" src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png"/>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <ul className="flex flex-wrap justify-content-center">
                <li><a href="#">SOBRE</a></li>
                <li><a href="#">AJUDA</a></li>
                <li><a href="#">IMPRENSA</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">CARREIRAS</a></li>
                <li><a href="#">PRIVACIDADE</a></li>
                <li><a href="#">TERMOS</a></li>
                <li><a href="#">LOCALIZAÇÃO</a></li>
                <li><a href="#">CONTAS MAIS RELEVANTES</a></li>
                <li><a href="#">HASHTAGS</a></li>
                <li><a href="#">IDIOMA</a></li>
            </ul>
            <p className="copyright">© 2020 Instagram do Facebook</p>
        </footer>
        </>
  );
}

export default App;
