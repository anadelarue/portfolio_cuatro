import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import MY_FILE from './MY_FILE.json'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MY_FILE, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setGlobalFilter,
  } = useTable({
    columns,
    data
  }, 
  useGlobalFilter,
  usePagination)

  const { globalFilter } = state
  const { pageIndex } = state

  return (
    <>
    <GlobalFilter filter={globalFilter} setFilter = {setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
          <span>
              Page{' '}
              <strong>
                  {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
          </span>
          <span>
              | Go to page: {' '}
              <input type = 'number' defaultValue={pageIndex + 1}
              onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
               }} 
               style={{width: '50 px'}} />
          </span>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}> Previous </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}> Next </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
  )
}