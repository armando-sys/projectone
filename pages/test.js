import 'bootstrap/dist/css/bootstrap.min.css';
import AtomText from "../components/atoms/paragraph";

export default function test (){
    return(
    <>
    <center>
    
            <div className="container mt-4">
                <div className="templateBox row">

                    <div className="col-6 text-left">

                        <AtomText
                        value = "Next.JS Framework"
                        fontFamily = "Roboto" 
                        size="20px"
                        margin="10px 0px 0px 0px" 
                        />  

                        <AtomText
                        value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique nisl vel tellus fringilla, id hendrerit ipsum faucibus. Sed id nunc id risus rutrum dignissim ac sed purus. Nunc vestibulum mauris eleifend luctus tincidunt. Etiam velit leo, vehicula non massa eget, laoreet auctor neque. Suspendisse accumsan sed nisl ac congue. Duis a neque venenatis, ultrices quam eu, tincidunt eros. Proin imperdiet tincidunt nisl ut posuere. Etiam mattis pharetra mauris, eu tempor sem elementum vel. Proin ac dolor efficitur, varius lorem in, porttitor nunc."
                        fontFamily = "Roboto" 
                        size="12px" 
                        />
                    </div>
                    <div className="col-6 text-left">
                        <AtomText
                        value = "Framework Laravel"
                        fontFamily = "Roboto" 
                        size="20px"
                        margin="10px 0px 0px 0px"   
                        />

                        <AtomText
                        value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique nisl vel tellus fringilla, id hendrerit ipsum faucibus. Sed id nunc id risus rutrum dignissim ac sed purus. Nunc vestibulum mauris eleifend luctus tincidunt. Etiam velit leo, vehicula non massa eget, laoreet auctor neque. Suspendisse accumsan sed nisl ac congue. Duis a neque venenatis, ultrices quam eu, tincidunt eros. Proin imperdiet tincidunt nisl ut posuere. Etiam mattis pharetra mauris, eu tempor sem elementum vel. Proin ac dolor efficitur, varius lorem in, porttitor nunc."
                        fontFamily = "Roboto" 
                        size="12px" 
                        />
                    </div>

                </div>
            </div>

    </center>

    </>
    )
}