import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";

export default function Error({ message }: { message: string }) {
  return (
    <main className="container mx-auto p-4 md:p-8 flex items-center justify-center min-h-[50vh]">
      <Alert variant="destructive" className="max-w-md">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Gagal Memuat Data!</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </main>
  );
}
