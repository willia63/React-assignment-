import React from 'react';

function FormCost2(props) {
  // Calculate GST (Goods and Services Tax) at 15% of the total
  const gst = (props.sharedPropBond + (props.sharedPropWarranty ? 0 : 85)) * 0.15;

  // Calculate the total amount including GST
  const totalWithGST = props.sharedPropBond + (props.sharedPropWarranty ? 0 : 85) + gst;

  // Component UI: HTML Rendering
  return (
    <>
      <h2>Cost</h2>
      <div className="row mt-2 ms-3">
        <label className="col-12 col-md-12 col-lg-4">Bond ($)</label>
        <input className="col-12 col-md-12 col-lg-7" type="number" value={props.sharedPropBond} readOnly />
      </div>
      <div className="row mt-1 ms-3">
        <label className="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
        <input className="col-12 col-md-12 col-lg-7" type="number" value={props.sharedPropWarranty ? 0 : 85} readOnly />
      </div>
      <div className="row mt-1 ms-3">
        <label className="col-12 col-md-12 col-lg-4">Total ($)</label>
        <input className="col-12 col-md-12 col-lg-7" type="number" value={props.sharedPropBond + (props.sharedPropWarranty ? 0 : 85)} readOnly />
      </div>
      <div className="row mt-1 ms-3">
        <label className="col-12 col-md-12 col-lg-4">GST($)</label>
        <input className="col-12 col-md-12 col-lg-7" type="number" value={gst} readOnly />
      </div>
      <div className="row mt-1 ms-3">
        <label className="col-12 col-md-12 col-lg-4">Total + (GST) ($)</label>
        <input className="col-12 col-md-12 col-lg-7" type="number" value={totalWithGST} readOnly />
      </div>
    </>
  );
}

export default FormCost2;
