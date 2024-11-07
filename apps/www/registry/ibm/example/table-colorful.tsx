import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function TableDemo() {
  return (
    <Table className="shadow-md border border-gray-300 rounded-lg">
      <TableCaption className="text-gray-700">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader>
        <TableRow className="bg-blue-100">
          <TableHead className="w-[100px] text-black font-semibold border-b border-blue-300">
            Invoice
          </TableHead>
          <TableHead className="text-black font-semibold border-b border-blue-300">
            Status
          </TableHead>
          <TableHead className="text-black font-semibold border-b border-blue-300">
            Method
          </TableHead>
          <TableHead className="text-right text-black font-semibold border-b border-blue-300">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            className="bg-white hover:bg-blue-50 even:bg-gray-50"
          >
            <TableCell className="font-medium text-gray-800 border-b border-gray-300">
              {invoice.invoice}
            </TableCell>
            <TableCell className="text-gray-800 border-b border-gray-300">
              {invoice.paymentStatus}
            </TableCell>
            <TableCell className="text-gray-800 border-b border-gray-300">
              {invoice.paymentMethod}
            </TableCell>
            <TableCell className="text-right text-gray-800 border-b border-gray-300">
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-blue-100">
          <TableCell colSpan={3} className="font-semibold text-black">
            Total
          </TableCell>
          <TableCell className="text-right font-semibold text-black">
            $2,500.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
