// import React, { useMemo } from "react";
// import MOCK_DATA from './MOCK_DATA.json';
// import { COLUMNS } from "./columns";

// export const basicTable = () => {

//     const columns = useMemo(() => COLUMNS, [])
//     const data = useMemo(() => MOCK_DATA, [])

//     const tableInstance = useTable({
//         columns,
//         data
//     }) 
//     const { 
//         getTableprops,
//         getTableBodyProps,
//         haederGroups,
//         rows,prepareRow,
//     } = tableInstance
//     return(
//       <table>
//           <thread>
//             <tr>
//                 <td></td>
//             </tr>
//           </thread>
//           <tbody>

//           </tbody>
//       </table>>
//     )
// }