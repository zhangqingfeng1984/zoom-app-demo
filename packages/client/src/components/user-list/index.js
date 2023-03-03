export const UserList = ({ clients }) => {
  return (
    <div className="tableWrapper">
      <table width="100%" border="1">
        <thead>
          <tr>
            <th>soeid</th>
            <th>name</th>
            <th>level</th>
            <th>employee</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((o) => {
            return (
              <tr key={o.soeid}>
                <td>{o.soeid}</td>
                <td>{o.name}</td>
                <td>{o.level}</td>
                <td>{o.isEmployee}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
