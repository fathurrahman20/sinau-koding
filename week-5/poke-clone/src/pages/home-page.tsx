import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome!</h1>
      <Button onClick={() => navigate("/pokemon")}>Go to Pokemon List</Button>
    </>
  );
}
