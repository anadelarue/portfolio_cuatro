import { format } from "date-fns"

export const COLUMNS = [
    {
        Header: 'Comunidad Autonóma',
        accessor: 'comunidad_autonoma'
    },
    {
        Header: 'Municipio',
        accessor: 'municipio'
    },
    {
      Header: 'Número de viviendas',
      accessor: 'numero_viviendas'
  },
  {
      Header: 'Superficie de la vivienda',
      accessor: 'superficie_vivienda'
  },
    {
        Header: 'Precio estimado del alquiler',
        accessor: 'precio_estimado'
    }
]

export const GROUPED_COLUMNS = [
    {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id'
    },
    {
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
          Header: 'First Name',
          Footer: 'First Name',
          accessor: 'first_name'
        },
        {
          Header: 'Last Name',
          Footer: 'Last Name',
          accessor: 'last_name'
        }
      ]
    },
    {
      Header: 'Info',
      Footer: 'Info',
      columns: [
        {
          Header: 'Date of Birth',
          Footer: 'Date of Birth',
          accessor: 'date_of_birth'
        },
        {
          Header: 'Country',
          Footer: 'Country',
          accessor: 'country'
        },
        {
          Header: 'Phone',
          Footer: 'Phone',
          accessor: 'phone'
        }
      ]
    }
  ]