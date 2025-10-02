export default function Contact(props){
    return(
        <article className="Contact">
            <img src={props.img} alt="Earth Bhai"  width="5px"/>
            <h3>{props.name}</h3>
            <div className="phone">
                <img src="https://pngimg.com/uploads/phone/phone_PNG48972.png" alt="Phone logo" width="20px" />
                <p>{props.phone}</p>
            </div>
            <div className="mail">
                <img src="https://static.vecteezy.com/system/resources/previews/020/009/614/non_2x/email-and-mail-icon-black-free-png.png" alt="Mail logo" width="35px" />
                <p>{props.mail}</p>
            </div>
        </article>
    )
}