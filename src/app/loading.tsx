// app/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold text-center text-4xl mb-8">Загрузка...</h2>

      <div className="flex flex-col min-h-200 justify-center">
        <div className="flex items-center justify-center gap-8">
          <Skeleton className="w-[400px] h-[600px] rounded-xl" />

          <div className="flex flex-col gap-4">
            <Skeleton className="w-[300px] h-[30px]" />
            <Skeleton className="w-[200px] h-[30px]" />
            <Skeleton className="w-[400px] h-[100px]" />
            <Skeleton className="w-[200px] h-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
