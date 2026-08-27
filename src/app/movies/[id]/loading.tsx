// app/loading.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <h2 className="font-bold text-center text-4xl mb-8">Загрузка...</h2>

      <div className="flex flex-col min-h-200 justify-center">
        <div className="flex items-center justify-center gap-8">
          <Skeleton className="w-100 h-150 rounded-xl" />

          <div className="flex flex-col gap-4">
            <Skeleton className="w-75 h-7.5" />
            <Skeleton className="w-50 h-7.5" />
            <Skeleton className="w-100 h-25" />
            <Skeleton className="w-50 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
