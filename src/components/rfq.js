import React from 'react'
import InputText from "../components/formComponents/inputText"
import BtnGreen from "../components/formComponents/buttonGreen"

function RFQ() {
    return (
      <div className="homeRfq">
        <h3>One Request, Multiple Quotes</h3>
        <InputText placeholder="What are you looing for..." />
        <InputText placeholder="Quantity" />
            <InputText placeholder="Piece" />
            <BtnGreen placeholder="Get Request"/>
      </div>
    );
}

export default RFQ;