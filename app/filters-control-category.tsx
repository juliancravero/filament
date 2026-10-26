import FilterOrigin from "./filter-origin"

type FiltersControlCategoryProps = {
  filterOrigin: string
  setFilterOrigin: (origin: string) => void
}

const FiltersControlCategory = ({ filterOrigin, setFilterOrigin }: FiltersControlCategoryProps) => (
  <aside className="lg:sticky lg:top-24 lg:w-60 lg:shrink-0 lg:self-start">
    <div className="rounded-xl border bg-card p-5">
      <FilterOrigin value={filterOrigin} setFilterOrigin={setFilterOrigin} />
    </div>
  </aside>
)

export default FiltersControlCategory
