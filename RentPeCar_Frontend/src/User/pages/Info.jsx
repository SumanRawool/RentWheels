import React from 'react';

export function Info() {
    return (
        <>
            <div class="row" style={{ border: '1px ', marginTop: '10px' }}>

                <div class="explainertext col-sm col-12" style={{ marginBottom: "30px" }}>
                    <br /><br /><br /><br />
                    <h3>RentWheels</h3>
                    {/* <br />  */}
                    <p  >Raintree Marg, near Bharati Vidyapeeth, Sector 7, CBD Belapur, Navi Mumbai, Maharashtra 400614</p>
                </div>


                <div class="col-sm col-12 order-last order-sm-0" style={{ marginBottom: "30px" }}>
                    <div style={{ width: "100%", filter: "invert(5%)" }} >
                        <iframe title='map'
                            width="100%"
                            height="400"
                            frameborder="0"
                            marginheight="0"
                            marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=CDAC,Raintree%20Marg,%20near%20Bharati%20Vidyapeeth,%20Sector%207,%20CBD%20Belapur,%20Navi%20Mumbai,%20Maharashtra%20400614+(GymBuddy)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://www.gps.ie/">gps tracker sport</a>
                        </iframe>
                    </div>
                </div>  

             </div>

        </>
    )
}