const Memberlist = ({ members }) => {
  return (
    <div className="memberList">
      <p
        style={{
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Members List
      </p>
      <ul>
        {members.map((member, index) => {
          return (
            <li key={member.id}>
              <p>{member.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Memberlist;
