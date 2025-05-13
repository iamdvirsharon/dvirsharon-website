import AdminLayout from '@/components/AdminLayout';
import AuthGuard from '@/components/AuthGuard';

export default function AdminPage() {
  return (
    <AuthGuard requireAdmin>
      <AdminLayout>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Welcome to the Admin Dashboard</h2>
          <p className="text-muted-foreground">
            Here you can manage your website content and settings.
          </p>
          
          {/* Content management sections will be added here */}
        </div>
      </AdminLayout>
    </AuthGuard>
  );
}