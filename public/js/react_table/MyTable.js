import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, usePagination } from 'react-table'
import MY_FILE from './MY_FILE.json'
import { COLUMNS } from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'

export const MyTable = () => {
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
        <span class = "botones">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button class = "previous" onClick={() => previousPage()} disabled={!canPreviousPage}> Anterior </button>
          <button class = "next" onClick={() => nextPage()} disabled={!canNextPage}> Siguiente </button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </span>
      </div>
      <div>
          <span class = "page_of">
              Página{' '}
              <strong>
                  {pageIndex + 1} de {pageOptions.length}
              </strong>{' '}
          </span>
          <span class = "go_to_page">
              | Ir a la página: {' '}
              <input class = "paginador" type = 'number' defaultValue={pageIndex + 1}
              onChange={e => {
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
               }} 
              />
          </span>
      </div>
    </>
  )
}