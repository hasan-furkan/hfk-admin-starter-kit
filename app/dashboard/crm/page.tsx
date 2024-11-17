'use client'

import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Bell, Plus, Search, User } from 'lucide-react'
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function CRMDashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  const kpiData = [
    { title: 'Total Customers', value: '1,234', change: '+5.2%' },
    { title: 'Revenue', value: '$56,789', change: '+10.3%' },
    { title: 'Avg. Deal Size', value: '$4,567', change: '-2.1%' },
    { title: 'Deals Won', value: '45', change: '+15.7%' },
  ]

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  const chartOptions = {
    title: {
      label: 'Monthly Sales Performance',
    },
    legend: {
      label: 'Sales Performance'
    }
  }

  const recentActivities = [
    { id: 1, action: 'New lead created', user: 'John Doe', time: '2 hours ago' },
    { id: 2, action: 'Deal closed', user: 'Jane Smith', time: '4 hours ago' },
    { id: 3, action: 'Meeting scheduled', user: 'Mike Johnson', time: 'Yesterday' },
    { id: 4, action: 'Email sent', user: 'Sarah Brown', time: 'Yesterday' },
  ]

  const topCustomers = [
    { id: 1, name: 'Acme Corp', revenue: '$50,000', deals: 5 },
    { id: 2, name: 'Global Industries', revenue: '$45,000', deals: 4 },
    { id: 3, name: 'Tech Innovators', revenue: '$40,000', deals: 3 },
    { id: 4, name: 'Smart Solutions', revenue: '$35,000', deals: 3 },
  ]

  const { t } = useTranslation('common')

  return (
    <div>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">{t('hello')}, Alex</h1>
          <p className="text-muted-foreground">Here's what's happening with your customers today.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" /> Add Customer
          </Button>
        </div>
      </header>

      <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{kpi.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs ${kpi.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 mb-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartOptions}>
              <BarChart width={500} height={300} data={chartData.datasets[0].data.map((value, index) => ({
                month: chartData.labels[index],
                sales: value
              }))}>
                <Bar dataKey="sales" fill={chartData.datasets[0].backgroundColor} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-center">
                  <User className="h-6 w-6 mr-2" />
                  <div>
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user} - {activity.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Customers</CardTitle>
          <CardDescription>A list of top customers by revenue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Deals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topCustomers
                .filter((customer) =>
                  customer.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.revenue}</TableCell>
                    <TableCell>{customer.deals}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}