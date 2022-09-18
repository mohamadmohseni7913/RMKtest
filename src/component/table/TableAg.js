import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const TableAg = () => {
  const [rowData] = useState([
    {id: 1, model: "iphone9", price: 35000},
    {id: 2, model: "iphon x", price: 32000},
    {id: 3, model: "Boxster", price: 72000}
]);

const [columnDefs] = useState([
    { field: 'id' },
    { field: 'model' },
    { field: 'price' }
])
 return (
   <div>

     {/* Example using Grid's API */}


     {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
     <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   </div>
 );
};

export default TableAg;
