import React from "react";
import QuBox from './QuBox';

const FarQu = () => {
    return (
        <>
        <div className="row mt-5">
        <div className="col-sm-10 mx-auto mt-3">
                <h2 style={{ textAlign: 'center' }}>Frequently asked questions</h2>

                    <div className="qu-box">
                        <QuBox
                            head="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                            body="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                            expand = {true}
                        />

                        <QuBox
                            head="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                            body="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                        />

                        <QuBox
                            head="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
                            body="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
                        />
                    </div>
                </div>

        </div>
        </>
    )
}

export default FarQu;
