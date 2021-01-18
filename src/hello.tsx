import React from 'react'
import MUIDataTable, {MUIDataTableColumn} from "mui-datatables";
import {TableCell, TableRow} from '@material-ui/core';

type User = {
  name: string, company: string, city: string, state: string;
}

const columns: MUIDataTableColumn[] = [
  {name: "name", label: "Name", options: {filter: true, sort: true,}},
  {name: "company", label: "Company", options: {filter: true, sort: false,}},
  {name: "city", label: "City", options: {filter: true, sort: false,}},
  {name: "state", label: "State", options: {filter: true, sort: false,}},
]

const users: User[] = [
  {name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY"},
  {name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT"},
  {name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL"},
  {name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX"},
]

export default function Hello() {
  return <MUIDataTable
    title={"Employee List"}
    data={users}
    columns={columns}
    options={{
      filter: true,
      filterType: 'dropdown',
      responsive: 'standard',
      expandableRows: true,
      expandableRowsHeader: false,
      expandableRowsOnClick: true,
      isRowExpandable: (dataIndex, expandedRows) => {
        console.log('### isRowExpandable', {dataIndex, expandedRows});
        // if (dataIndex === 3 || dataIndex === 4) return false;
        //
        // // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
        // if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
        return true;
      },
      rowsExpanded: [0, 1],
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              <div>Custom expandable row option.</div>
              <div>rowData={JSON.stringify(rowData)}</div>
              <div>rowMeta={JSON.stringify(rowMeta)}</div>
            </TableCell>
          </TableRow>
        );
      },
      onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded)
    }}
      />
    }
