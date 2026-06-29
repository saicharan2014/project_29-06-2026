import React from "react";

const CommonTable = ({ theadings, tcontent, action }) => {
  return (
    <table>
      <thead>
        <tr>
          {theadings.map((obj, id) => (
            <th key={id}>{obj.label}</th>
          ))}
          {action && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {tcontent?.map((obj, id) => (
          <tr key={id}>
            {theadings.map((k, id) => (
              <td key={id}>{obj[k.key]}</td>
            ))}
            <td>
              {action && (
                <>
                  <button>Delete</button> <button>Edit</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;
