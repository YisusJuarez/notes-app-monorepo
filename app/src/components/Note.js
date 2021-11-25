export const Note = ({ title, body}) => {
  return (
    <div>
      <p>
        <strong>{title}</strong><br/>
        {body}
      </p>
    </div>
  );
};

