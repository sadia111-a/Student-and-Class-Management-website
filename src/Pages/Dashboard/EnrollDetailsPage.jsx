const EnrollDetailsPage = ({ course }) => {
  const { title, description } = course || {};
  return (
    <div className="overflow-x-auto">
      <table className="table  w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Deadline</th>
            <th>Description</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{1}</th>
            <td>{title}</td>
            <td>12-12-23</td>
            <td className="w-96">{description}</td>
            <td>
              <button className="btn btn-ghost">Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EnrollDetailsPage;
