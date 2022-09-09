import React, { useState } from 'react'
import './newcombination.css'

const Newcombination = () => {

  const [formValues, setFormValues] = useState([])





  console.log(formValues)


  let removeFormFields = (i) => {
    // console.log(i)
    let newFormValues = [...formValues];
    const indexvalue = newFormValues.findIndex(x => x.key == i)
    newFormValues.splice(indexvalue, 1);
    console.log(i)
    console.log(indexvalue)
    // console.log(newvalue)
    setFormValues(newFormValues)
  }
  

  // const mydata = formValues.map()
  // console.log(mydata)

  

  
  let addFormFields = () => {
    setFormValues([...formValues, { key: ""}])
  }



  return (
    <>
      <div className='container-fluid add-table g-0 table-container'>
        <table class="table table-striped">
          <thead>
            <tr>
              <td colSpan="3"></td>
              <td>USD/GM</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>gbp oz</td>
              <td>gbm/gm</td>
              <td>USD/GM</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">BID</th>
              <td>1489.30</td>
              <td>47.88210502</td>
              <td>10,200.00</td>
              <td>327.93737</td>
            </tr>
            <tr>
              <th scope="row">OFFER</th>
              <td>1491.95</td>
              <td>47.96730449</td>
              <td>1,738.43</td>
              <td>55.8917807</td>
            </tr>
            <tr>
              <th scope="row">AVERAGE</th>
              <td>1490.625</td>
              <td>47.92470475</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container-fluid add-table g-0 table-container">
        <div className=' overflow-scroll'>
          <table className='table-row-add'>
            <tr>
              <th>NEW CODE</th>
              <th>SUPPLIER NAME</th>
              <th>BAR COIN</th>
              <th>METAL TYPE</th>
              <th>BAR/COIN TYPE -CAST / MINT</th>
              <th>description</th>
              <th>GROSS Weight (Grams)</th>
              <th>Fineness</th>
              <th>FINE Troy Ounce  Gold /SILVER  Content (OZ)</th>
              <th>BRAND NAME</th>
              <th>Weight (Grams)FINE WT</th>
              <th>Troy Ounce  Gold Content (OZ)</th>
              <th>BBP %ON METAL COST FORMULA</th>
              <th>SELL PRICE FORMULA BASED</th>
              <th>BBP LINK </th>
              <th>BBP SELL PRICE LINK BBP SELL PRICE LINK </th>
              <th>BBP MARGIN on LIVE LINK BASIS</th>
              <th>PPB BM INTERNAL USE</th>
            </tr>
            {formValues.map((element, index) => (
              <tr key={index}>

                <td className='select-padding'><select className='select-option'>
                  <option>test 1</option>
                  <option>test 2</option>
                  <option>test 3</option>
                  <option>test 4</option>
                  <option>test 5</option>
                  <option>test 6</option>
                  <option>test 7</option>
                </select></td>
                <td>{index}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

            ))}
          </table>

        </div>
        <div className='delete-button-class'>
          {formValues.map((item, i) => (
            <>
             
                  <button className="button-delete" key={i} onClick={() => removeFormFields(i)}><i class="fa fa-minus" aria-hidden="true"></i></button>

            </>
          ))}
        </div>
      </div>


      <div className="container-fluid create-table g-0">
        <button className="button-add" onClick={() => addFormFields()} style={{ marginTop: "20px" }}><i class="fa fa-plus" aria-hidden="true"></i></button>
      </div>

    </>

  )
}

export default Newcombination






// import Hallmark from './component/Hallmark';
// import Newcombination from './component/Newcombination';

// function App() {
//   return (
//     <div>
//       <Hallmark />
//       <Newcombination />
//     </div>
//   );
// }

// export default App;
