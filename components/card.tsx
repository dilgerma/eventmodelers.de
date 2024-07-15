/* tslint:disable */
export default function Card({columnClass="",blue:boolean=false, showContact = false,centered=false, label="",textLeft, full, headline, image = "", children, shadow = false, id=""}) {
    var css = centered ? `column has-text-centered ${columnClass}` : `column ${columnClass}`
    return (
            <div className={"card"}>
                <div className="card-content">


                    <h2 id={id} className={"has-text-centered"}>{headline}</h2>
                    {headline?<div className={"headline-divider"}></div>:<span/>}
                    {full ?
                        <div className={textLeft ? "column" : css}>

                            {children}
                        </div> : <div className={"columns"}>
                            <div className={textLeft ? css : "column"}>
                                {!textLeft ? {...children} : image !== undefined ?

                                    <div className={"has-text-centered"}><img alt={""} width={"70%"} className={shadow ? "border-image shadow-image" : "border-image"}
                                              src={image}/>

                                        {showContact ? <p className={"top-margin has-text-centered"}>
                                                               <a target="_blank"
                                                                  href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                                                  className={"button is-success"}>
                                                                   <i className="fa-solid fa-phone padding"></i>
                                                                   <span className={"bigger"}>Jetzt kostenlos informieren.</span></a>

                                                           </p>:<span/>}
                                    </div> : <span></span>
                                    }
                            </div>
                            <div className={!textLeft ? "column  has-text-centered" : "column"}>
                                {textLeft ? {...children} : image ?
                                    <div>
                                    <img alt={""} width={"90%"} className={shadow ? "border-image shadow-image" : "border-image"}
                                         src={image}/>
                                        {showContact ? <p className={"top-margin has-text-centered"}>
                                                               <a target="_blank"
                                                                  href="https://outlook.office365.com/owa/calendar/NebulitGmbH@nebulit.de/bookings/s/SchaAYI1q02_E0rbpW5Xhw2"
                                                                  className={"button is-success"}>
                                                                   <i className="fa-solid fa-phone padding"></i>
                                                                   <span className={"bigger"}>Jetzt kostenlos informieren.</span></a>

                                                           </p>:<span/>}
                                    </div>
                                    : <span></span>}
                            </div>
                        </div>}
                </div>
            </div>
    )
}
