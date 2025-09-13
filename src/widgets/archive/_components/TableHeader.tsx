const TableHeader = () => {
  return (
    <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
      {/* <tr className="text-sm font-semibold text-normal">
        <th className="py-4 pr-8 w-1/12">created</th>
        <th className="py-4 pr-8 w-1/6 ">subject</th>
        <th className="hidden py-4 pr-8 w-1/5  md:table-cell">tags</th>
        <th className="hidden py-4 w-1/4 pr-8  lg:table-cell">desc</th>
      </tr> */}
      <tr className="text-sm font-semibold text-normal">
        <th className="py-4 pr-8 w-24 md:w-1/12">created</th>
        <th className="py-4 pr-8 w-2/3 md:w-1/6">subject</th>
        <th className="hidden py-4 pr-8 w-1/5 md:table-cell">tags</th>
        <th className="hidden py-4 w-1/4 pr-8 lg:table-cell">desc</th>
      </tr>
    </thead>
  );
};
export default TableHeader;
