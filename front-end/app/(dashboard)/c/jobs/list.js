"use client"

import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { CaretSortIcon, ChevronDownIcon, } from "@radix-ui/react-icons"
import { SkeletonDemo } from "@/app/components/skeleton"
import { Button } from "@/components/ui/button"
import { AddZero, ToDateFormat } from "@/app/api/function"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CallApi from "@/app/api/call"


export const columns = [
    {
        accessorKey: "id",
        header: () => <div className="text-left">#</div>,
        cell: ({ row }) => (<div className="font-medium">T{AddZero(row.getValue("id"))} </div>),
        enableSorting: false, enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <div className="text-left">
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} >Title <CaretSortIcon className="ml-2 h-4 w-4" /></Button>
            </div>
        ), cell: ({ row }) => <div className="text-left font-medium" >{row.getValue("title")}</div>,
    },
    {
        accessorKey: "priority",
        header: () => <div className="text-left">Priority</div>,
        cell: ({ row }) => (<div className="text-left font-medium"><progress className="progress progress-success w-14" value={row.getValue("priority")} max="100"></progress></div>),
    },
    {
        accessorKey: "status",
        header: () => <div className="text-left">Status</div>,
        cell: ({ row }) => (<div className="text-left font-medium">{row.getValue("status")}</div>),
    }
]

export function ProblemsList() {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])
    const [columnVisibility, setColumnVisibility] = useState({})

    let GetData = async () => {
        let res = await CallApi.GET("jobs/list");
        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }
        if (res.status == 200) {
            setData(res.data.problems || []);
            setLoad(true);
        }
    }

    useEffect(() => { GetData(); }, []);

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        state: { sorting, columnFilters, columnVisibility },
    })

    return (
        <>
            {load &&
                <div className="w-full">
                    <p className="font-medium p-1" >Problem(s):</p>
                    <div className="flex items-center py-4">
                        <Input
                            placeholder="Filter names..."
                            value={(table.getColumn("title")?.getFilterValue()) ?? ""}
                            onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
                            className="max-w-sm"
                        />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="ml-auto"> Columns <ChevronDownIcon className="ml-2 h-4 w-4" /> </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className="capitalize"
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        )
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow key={row.id} >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center">  No results.  </TableCell>
                                        <TableCell className='hidden' />
                                        <TableCell className='hidden' />
                                        <TableCell className='hidden' />
                                        <TableCell className='hidden' />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <div className="flex-1 text-sm text-muted-foreground">
                            All page(s) is {table.getPageCount()}.
                        </div>
                        <div className="space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            > Previous </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >  Next </Button>
                        </div>
                    </div>
                </div>
            }

            {!load && <SkeletonDemo />}
        </>
    )
}
