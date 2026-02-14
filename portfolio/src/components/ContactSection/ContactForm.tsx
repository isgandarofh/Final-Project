import IconSvg from "../../UI/IconSvg"

export default function ContactForm() {
    return (
        <>
            <form className="contact-inputs" action="">
                <div className="form-group">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="number" placeholder="Phone Number" />
                    <div className="service-input">
                        <select name="" id="">
                            <option value="">Service of Interest</option>
                            <option value="">E-commerce</option>
                            <option value="">Landing</option>
                        </select>
                        <div className="contact-select-icon">
                            <IconSvg name="arrow" size={25} />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Timeline" />
                    <textarea
                        name=""
                        id=""
                        placeholder="Project Details..."
                    ></textarea>
                </div>

               <div className="contact-from-btn">
                 <button type="submit">Send</button>
               </div>
            </form>
        </>
    )
}
