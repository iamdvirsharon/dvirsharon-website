import React from 'react'
import { Card } from '@/components/ui/card'

export default function Admin() {
  return (
    <div className="container mx-auto p-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome to the admin dashboard. This is where you can manage your application settings and content.
        </p>
      </Card>
    </div>
  )
}