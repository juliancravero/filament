import { Skeleton } from "@/components/ui/skeleton"

const SkeletonProduct = () => (
  <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
    <Skeleton className="mb-8 h-4 w-48" />
    <div className="grid gap-8 md:grid-cols-2 lg:gap-14">
      <Skeleton className="aspect-square w-full rounded-2xl" />
      <div className="space-y-4">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-9 w-4/5" />
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-11 w-full rounded-full" />
        <Skeleton className="h-32 w-full rounded-xl" />
      </div>
    </div>
  </main>
)

export default SkeletonProduct
