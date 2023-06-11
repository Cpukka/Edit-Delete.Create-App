import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange ,handleCancleClick}) => {
    return (
    <tr>
  
    <td>
    <input type="text" 
    required='required' 
    name='fullName' 
    value={editFormData.fullName}
    placeholder="Enter your Name..."
    onChange={handleEditFormChange}>
        </input>
    </td>

    <td>
<input type="text" 
    required='required' 
    name='address'
    value={editFormData.address} 
    placeholder="Enter your Address..."
    onChange={handleEditFormChange}>
        </input>
    </td>

    <td>
<input
    type="number" 
    required='required'
    name='phoneNumber' 
    value={editFormData.phoneNumber}
    placeholder="Enter your Phone Number..."
    onChange={handleEditFormChange}>
        </input>
    </td>
   
   <td>

<input type="text" required='required' 
    name='email' 
    value={editFormData.email}
    placeholder="Enter your email..."
    onChange={handleEditFormChange}>
        </input>
    </td>
   
    
  
  <td>
    <button type="submit">
        Save

    </button>
    <button type="button" onClick={handleCancleClick}>Cancle</button>
  </td>
  </tr>
    );
};
export default EditableRow;