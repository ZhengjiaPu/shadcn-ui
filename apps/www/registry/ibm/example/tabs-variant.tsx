import * as React from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/sydney/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/sydney/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="recent" className="w-[400px] h-[500px]">
      <TabsList className="flex w-full h-[60px] border-b border-gray-300">
        <TabsTrigger
          value="recent"
          className="
            w-full text-center text-lg text-gray-500 hover:text-black 
            data-[state=active]:text-black 
            data-[state=active]:font-bold 
            data-[state=active]:border-b-2 
            data-[state=active]:border-blue-500 
            data-[state=active]:rounded-none
          "
        >
          Recent
        </TabsTrigger>
        <TabsTrigger
          value="popular"
          className="
            w-full text-center text-lg text-gray-500 hover:text-black 
            data-[state=active]:text-black 
            data-[state=active]:font-bold 
            data-[state=active]:border-b-2 
            data-[state=active]:border-blue-500 
            data-[state=active]:rounded-none
          "
        >
          Popular
        </TabsTrigger>
        <TabsTrigger
          value="trending"
          className="
            w-full text-center text-lg text-gray-500 hover:text-black 
            data-[state=active]:text-black 
            data-[state=active]:font-bold 
            data-[state=active]:border-b-2 
            data-[state=active]:border-blue-500 
            data-[state=active]:rounded-none
          "
        >
          Trending
        </TabsTrigger>
      </TabsList>
      <TabsContent value="recent" className="h-[440px] overflow-y-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Lorem ipsum dolor sit amet</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>1h ago - 2 comments - 1 shares</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Suspendisse eget ante viverra</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>1h ago - 3 comments - 2 shares</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="popular" className="h-[440px] overflow-y-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Donec eleifend dui quis varius placerat</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>11h ago - 15 comments - 4 shares</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ut vel ligula consequat, aliquet ipsum ut</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>5h ago - 7 comments - 3 shares</p>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="trending" className="h-[440px] overflow-y-auto">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Maecenas vel quam ac nibh tincidunt maximus</CardTitle>
          </CardHeader>
          <CardFooter>
            <p>3h ago - 5 comments - 2 shares</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>
              Donec elementum erat eleifend mi posuere hendrerit
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <p>2h ago - 4 comments - 1 shares</p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default TabsDemo
