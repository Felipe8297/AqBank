import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { StatusText } from './status-text'
import { product } from '../types/interface'
import { Modal } from './modal'
import { Pagination } from './pagination'

interface DataTableProps {
  data: product[]
}

export function DataTable({ data }: DataTableProps) {
  const columnHelper = createColumnHelper<product>()

  const columns = [
    columnHelper.accessor('product', {
      cell: (info) => (
        <div className="flex gap-2 items-center">
          <span className="flex justify-center items-center w-8 h-8 rounded-full bg-info100 text-info800">
            E
          </span>
          <div className="flex flex-col">
            <span>{info.getValue()}</span>
            <span className="text-regularCaption text-neutral600">{`${info.row.original.category}`}</span>
          </div>
        </div>
      ),
      header: 'Produto',
    }),

    columnHelper.accessor('value', {
      cell: (info) => <span>R$ {info.getValue()}</span>,
      header: 'Valor unitário (R$)',
    }),

    columnHelper.accessor('sell', {
      cell: (info) => (
        <div className="flex flex-col">
          <span>R$ {info.getValue()}</span>
          <span className="text-regularCaption text-neutral600">{`Comissões R$ ${info.row.original.commission}`}</span>
        </div>
      ),
      header: 'Vendido',
    }),

    columnHelper.accessor('status', {
      cell: (info) => <StatusText status={info.getValue()} />,
      header: 'Status',
    }),

    columnHelper.accessor('created', {
      cell: (info) => (
        <div className="flex flex-col">
          <span className="text-regularCaption font-medium text-neutral800">
            {info.getValue().split(' ')[0]}
          </span>
          <span className="text-regularCaption text-neutral600">
            {info.getValue().split(' ')[1]}
          </span>
        </div>
      ),
      header: 'Criado em',
    }),

    columnHelper.accessor('quantity', {
      cell: (info) => (
        <span className="text-regularCaption font-medium py-1 px-[6px] rounded-md bg-info200 text-info800">
          {info.getValue()}
        </span>
      ),
      header: 'Quantidade',
    }),

    columnHelper.accessor('affiliate', {
      cell: (info) => (
        <span className="text-regularCaption font-medium py-1 px-[6px] rounded-md bg-neutral100 text-neutral800">
          {info.getValue()}
        </span>
      ),
      header: 'Afiliados',
    }),

    columnHelper.accessor('id', {
      cell: () => <Modal />,
      header: '',
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  // <Pagination pageIndex={0} totalCount={105} perPage={10} />
  return (
    <div>
      <div className="border rounded-xl overflow-hidden mb-2">
        <table className="w-full">
          <thead className="bg-neutral100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-regular14 text-neutral800 text-left py-2 px-3"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b last:border-0">
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="text-regular14 font-medium text-left py-3 px-3"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination totalCount={data.length} />
    </div>
  )
}
