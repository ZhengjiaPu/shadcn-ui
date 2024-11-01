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
    <Table className="shadow-lg">
      <TableCaption className="text-gray-600">
        A list of your recent invoices.
      </TableCaption>
      <TableHeader className="bg-gray-200">
        <TableRow>
          <TableHead className="font-bold text-black">Invoice</TableHead>
          <TableHead className="font-bold text-black">Status</TableHead>
          <TableHead className="font-bold text-black">Method</TableHead>
          <TableHead className="font-bold text-black text-right">
            Amount
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow
            key={invoice.invoice}
            className="bg-white text-gray-600 hover:bg-gray-200 hover:text-black"
          >
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className="bg-gray-200">
        <TableRow>
          <TableCell colSpan={3} className="font-bold text-black">
            Total
          </TableCell>
          <TableCell className="text-right font-bold text-black">
            $2,500.00
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
