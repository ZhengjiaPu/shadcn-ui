import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="flex space-x-4 border-b border-gray-300">
        <TabsTrigger
          value="account"
          className="
            text-gray-500 hover:text-black 
            data-[state=active]:text-black 
            data-[state=active]:font-bold 
            data-[state=active]:border 
            data-[state=active]:border-blue-500 
            data-[state=active]:rounded-none
            px-4 py-2"
        >
          Dashboard
        </TabsTrigger>
        <TabsTrigger
          value="monitoring"
          className="
            text-gray-500 hover:text-black 
            data-[state=active]:text-black 
            data-[state=active]:font-bold 
            data-[state=active]:border 
            data-[state=active]:border-blue-500 
            data-[state=active]:rounded-none
            px-4 py-2"
        >
          Monitoring
        </TabsTrigger>
        <TabsTrigger
          value="activity"
          className="
            text-gray-500 hover:text-black 
            data-[state=active]:text-black 
            data-[state=active]:font-bold 
            data-[state=active]:border 
            data-[state=active]:border-blue-500 
            data-[state=active]:rounded-none
            px-4 py-2"
        >
          Activity
        </TabsTrigger>
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
