import React from "react";


const Contact = ({img, name, phone, email}) => {
    return (
        <div className="contact-card">
                <img src={img}/>
                <h3>{name}</h3>
                <div className="info-group">
                    <i class="fa-solid fa-phone"></i>
                    <p>{phone}</p>
                </div>
                <div className="info-group">
                <i class="fa-solid fa-envelope"></i>
                    <p>{email}</p>
                </div>
            </div>
    )
}
export default Contact