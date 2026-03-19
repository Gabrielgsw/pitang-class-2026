import { createFileRoute,redirect } from "@tanstack/react-router";

import { LoginForm } from "@/components/login-form";
import { useAuth,isAuthenticated } from "@/hooks/use-auth";

export const Route = createFileRoute('/_auth/login')({
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({
        to: '/dashboard',
      })
    }
  },
  component:RouteComponent
})

function RouteComponent() {
  const { handleLogin } = useAuth();

  return <LoginForm onSubmit={handleLogin} />;
}
