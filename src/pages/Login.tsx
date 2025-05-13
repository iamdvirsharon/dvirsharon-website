
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

interface LoginProps {
  onLogin: () => void;
}

// Password storage key
const ADMIN_PASSWORD_KEY = 'admin_password';

// Default password if none set
const DEFAULT_PASSWORD = 'admin123';

// Get the current admin password
const getAdminPassword = (): string => {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_PASSWORD;
};

export default function Login({ onLogin }: LoginProps) {
  const [password, setPassword] = useState('');
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    const storedPassword = getAdminPassword();
    
    // Verify current password
    if (currentPassword !== storedPassword) {
      toast({
        title: "Error",
        description: "Current password is incorrect",
        variant: "destructive",
      });
      return;
    }
    
    // Check if new password and confirmation match
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // Save new password
    localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
    
    toast({
      title: "Success",
      description: "Password changed successfully",
    });
    
    setIsChangingPassword(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const storedPassword = getAdminPassword();
    
    if (password === storedPassword) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      onLogin();
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid password",
        variant: "destructive",
      });
    }
  };

  if (isChangingPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md space-y-8 p-8 bg-card rounded-lg shadow-lg border border-border">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Change Admin Password</h2>
            <p className="mt-2 text-muted-foreground">Enter your current password and set a new one</p>
          </div>

          <form onSubmit={handleChangePassword} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Current Password</label>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full mt-1"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">New Password</label>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full mt-1"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Confirm New Password</label>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mt-1"
                />
              </div>
            </div>

            <div className="flex space-x-3">
              <Button type="submit" className="flex-1">
                Change Password
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsChangingPassword(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-8 bg-card rounded-lg shadow-lg border border-border">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Admin Login</h2>
          <p className="mt-2 text-muted-foreground">Enter your password to access the admin panel</p>
        </div>

        <form onSubmit={handleLoginSubmit} className="mt-8 space-y-6">
          <div>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
          
          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsChangingPassword(true)}
              className="text-sm text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
