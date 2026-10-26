import { useGetProductField } from "@/api/getProductField"
import { cn } from "@/lib/utils"
import { FilterTypes } from "@/types/filters"

type FilterOriginProps = {
  value: string
  setFilterOrigin: (origin: string) => void
}

const FilterOrigin = ({ value, setFilterOrigin }: FilterOriginProps) => {
  const { result, loading }: FilterTypes = useGetProductField()
  const options: string[] = result?.schema?.attributes?.origin?.enum ?? []

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold">Peso</legend>
      {loading && options.length === 0 ? (
        <p className="text-sm text-muted-foreground">Cargando opciones…</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {["", ...options].map((option) => {
            const active = value === option
            return (
              <button
                key={option || "todos"}
                type="button"
                aria-pressed={active}
                onClick={() => setFilterOrigin(option)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm transition-colors",
                  active ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary/50"
                )}
              >
                {option || "Todos"}
              </button>
            )
          })}
        </div>
      )}
    </fieldset>
  )
}

export default FilterOrigin
