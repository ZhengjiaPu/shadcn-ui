import { Button } from "@/registry/ibm/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ibm/ui/card"
import { Input } from "@/registry/ibm/ui/input"
import { Label } from "@/registry/ibm/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/ibm/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Dashboard</TabsTrigger>
        <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white rounded-none px-4 py-2">
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="monitoring">
        <Card>
          <CardHeader>
            <CardTitle>Monitoring</CardTitle>
            <CardDescription>
              Monitor system metrics and performance.
            </CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>

      <TabsContent value="activity">
        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
            <CardDescription>Review recent activity and logs.</CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
