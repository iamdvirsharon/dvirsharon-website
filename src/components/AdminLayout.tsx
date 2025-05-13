import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, isAdmin } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/auth';
import { toast } from '@/components/ui/use-toast';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await getCurrentUser();
        if (!user || !isAdmin(user.email)) {
          navigate('/');
          toast({
            title: "Unauthorized",
            description: "You don't have permission to access this area.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Auth error:', error);
        navigate('/');
      }
    }

    checkAuth();
  }, [navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}