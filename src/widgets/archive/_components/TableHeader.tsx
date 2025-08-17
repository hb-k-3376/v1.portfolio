const TableHeader = () => {
  return (
    <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
      <tr>
        <th className="py-4 pr-8 w-1/12 text-sm font-semibold text-base">
          created
        </th>
        <th className="py-4 pr-8 w-1/6 text-sm font-semibold text-base">
          subject
        </th>
        <th className="hidden py-4 pr-8 w-1/5 text-sm font-semibold text-base md:table-cell">
          tags
        </th>
        <th className="hidden py-4 w-1/4 pr-8 text-sm font-semibold text-base lg:table-cell">
          desc
        </th>
      </tr>
    </thead>
  );
};
export default TableHeader;
