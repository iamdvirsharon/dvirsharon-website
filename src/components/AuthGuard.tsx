import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, isAdmin } from '@/lib/auth';
import { toast } from '@/components/ui/use-toast';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export default function AuthGuard({ children, requireAdmin = false }: AuthGuardProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await getCurrentUser();
        
        if (!user) {
          throw new Error('Not authenticated');
        }

        if (requireAdmin && !isAdmin(user.email)) {
          throw new Error('Not authorized');
        }

        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth error:', error);
        toast({
          title: "Authentication Error",
          description: error instanceof Error ? error.message : "Please sign in to continue",
          variant: "destructive",
        });
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    }

    checkAuth();
  }, [navigate, requireAdmin]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
}