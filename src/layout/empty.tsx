interface Props {
  children: any;
}

const Error = (props: Props) => {
  return (
    <div className="bg-[red]">
      <h1>It is Error Layout</h1>
      {props.children}
    </div>
  );
};

export default Error;
