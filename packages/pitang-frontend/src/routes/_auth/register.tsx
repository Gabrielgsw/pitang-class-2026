import { createFileRoute,redirect } from "@tanstack/react-router";
import { isAuthenticated, useAuth } from "@/hooks/use-auth";
import { SignupForm } from "@/components/signup-form";

export const Route = createFileRoute('/_auth/register')({
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
  return <SignupForm />;
}
