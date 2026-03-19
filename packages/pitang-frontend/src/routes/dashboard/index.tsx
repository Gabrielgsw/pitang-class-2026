import { createFileRoute,redirect } from "@tanstack/react-router";
import { useAuth, isAuthenticated } from "@/hooks/use-auth";

export const Route = createFileRoute('/dashboard/')({
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({
        to: '/dashboard',
      })
    }else{
      throw redirect({
        to: '/login',
      })
    }

    
  },
  component:RouteComponent
})

function RouteComponent() {
  return <div>Hello "/dashboard/"!</div>;
}
