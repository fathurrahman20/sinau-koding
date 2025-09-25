import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Button } from "../ui/button";

export default function Error({ message }: { message: string }) {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto max-w-4xl p-4 flex flex-col items-center gap-4">
      <Alert variant="destructive" className="w-full">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
      <Button onClick={() => navigate(-1)} className="cursor-pointer">
        <ArrowLeft className="mr-2 h-4 w-4 text-lg" /> Kembali
      </Button>
    </div>
  );
}
