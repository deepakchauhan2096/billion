import React from 'react'
import './hallmark.css'

const Hallmark = () => {
    return (
        <>
            <div className='container'>
                <div className="row  sheffield-height border">
                    <div className="col-12 position-relative">
                        <img src="/Picture2.png" alt="" className='Picture2' />
                        <div className='sheffield-address'>
                            <p>Guardians' Hall,  Beulah Road,  Hillsborough,  Sheffield S6 2AN</p>
                            <p>Tel: +44 (0) 114 2312121    Email: Progress@assayoffice.co.uk</p>
                        </div>
                        <div className='sheffield-Notes'>
                            <p>ASSAY NOTE</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container border container-padding'>
                <div className="row border g-0">
                    <div className="col-5">
                        <div className='For-assay'>
                            <p>For Assay Office use only</p>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col">
                                <div className='border thisnote'>
                                    <span>
                                        THIS NOTE TO BE USED FOR A SINGLE STANDARD OF METAL ONLY
                                        <span>(Where applicable)</span>
                                    </span>
                                    <p><em>Please X as appropriate</em></p>
                                </div>
                            </div>
                        </div>
                        <div className="row px-3">
                            {/* <div className="container">
                                <div className="row px-3"> */}
                            <div className="col border border-dark g-0 overflow-hidden">
                                <div className="row">
                                    <div className="col-12">
                                        GOLD
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-top border-right">
                                                999
                                            </div>
                                            <div className="col-3 border-bottom border-dark border-top">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                990
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                916 <em>(22CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                750 <em>(18CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                585 <em>(14CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-dark border-right">
                                                375 <em>(9CT)</em>
                                            </div>
                                            <div className="col-3  border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col border-top border-bottom border-dark g-0 overflow-hidden">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        PLATINUM
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-top border-right">
                                                999
                                            </div>
                                            <div className="col-3 border-bottom border-dark border-top ">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                950
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                900
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                850
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">

                                                <div>MIXED METALS</div>
                                                <em style={{ fontSize: "12px" }}>(please state other metal)</em>
                                            </div>
                                        </div>

                                        {/* <div className="row"> 
                                                    <div className="col-9 border border-dark border-bottom-0">
                                                        375<em>(9CT)</em>
                                                    </div>
                                                    <div className="col-3 border-top border-dark">
                                                        <input type="radio" />
                                                    </div>
                                                </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col border-top border border-bottom border-dark g-0 overflow-hidden">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        SILVER
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-top border-right">
                                                999
                                            </div>
                                            <div className="col-3 border-bottom border-dark border-top">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                958 <em>Britanmia</em>
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                925 <em>Sterling</em>
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                800
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        {/* <div className="row">
                                                    <div className="col-9 border border-dark border-bottom-0">
                                                        750<em>(18CT)</em>
                                                    </div>
                                                    <div className="col-3 border-top border-dark">
                                                        <input type="radio" />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-9 border border-dark border-bottom-0">
                                                        585<em>(14CT)</em>
                                                    </div>
                                                    <div className="col-3 border-top border-dark">
                                                        <input type="radio" />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-9 border border-dark border-bottom-0">
                                                        375<em>(9CT)</em>
                                                    </div>
                                                    <div className="col-3 border-top border-dark">
                                                        <input type="radio" />
                                                    </div>
                                                </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col border-top border-bottom border-dark border-right g-0 overflow-hidden">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        PALLADIUM
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-top border-right">
                                                999
                                            </div>
                                            <div className="col-3 border-bottom border-dark border-top">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                950
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                500
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark">
                                                &nbsp;<em></em>
                                            </div>
                                            <div className="col-3 border-bottom border-dark">
                                                {/* <input type="radio" /> */}
                                            </div>
                                        </div>

                                        {/* <div className="row">
                                                    <div className="col-9 border-bottom border-dark">
                                                        585<em>(14CT)</em>
                                                    </div>
                                                    <div className="col-3 border-bottom border-dark">
                                                        <input type="radio" />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-9 border-bottom border-dark">
                                                        375<em>(9CT)</em>
                                                    </div>
                                                    <div className="col-3 border-bottom border-dark">
                                                        <input type="radio" />
                                                    </div>
                                                </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col border border-dark">
                                        PLATINUM
                                    </div>
                                    <div className="col border border-dark">
                                        SILVER
                                    </div>
                                    <div className="col border border-dark">
                                        PALLADIUM
                                    </div> */}
                        </div>
                        <div className="row px-3 pt-2">
                            <div className="col border border-dark g-0 overflow-hidden">
                                <div className="row">
                                    <div className="col-12">
                                        GOLD
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-top border-right">
                                                999
                                            </div>
                                            <div className="col-3 border-bottom border-dark border-top">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                990
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                916 <em>(22CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                750 <em>(18CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                585 <em>(14CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-dark border-right">
                                                375 <em>(9CT)</em>
                                            </div>
                                            <div className="col-3  border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col border border-dark g-0 overflow-hidden">
                                <div className="row">
                                    <div className="col-12">
                                        GOLD
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-top border-right">
                                                999
                                            </div>
                                            <div className="col-3 border-bottom border-dark border-top">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9 border-bottom border-dark border-right">
                                                990
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                916 <em>(22CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                750 <em>(18CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-bottom border-dark border-right">
                                                585 <em>(14CT)</em>
                                            </div>
                                            <div className="col-3  border-bottom border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-9  border-dark border-right">
                                                375 <em>(9CT)</em>
                                            </div>
                                            <div className="col-3  border-dark">
                                                <input type="radio" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>



                    </div>
                    {/* </div>
                        </div> */}
            </div>

        </div>
        </>
    )
}

export default Hallmark