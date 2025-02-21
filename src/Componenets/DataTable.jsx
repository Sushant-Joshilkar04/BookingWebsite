import React from 'react'
import { Table } from "flowbite-react";

const DataTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Event Details</Table.HeadCell>
          <Table.HeadCell>Date of Conduct</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {/* ... rest of the table content ... */}
        </Table.Body>
      </Table>
    </div>
  )
}

export default DataTable; 