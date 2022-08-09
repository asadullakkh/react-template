interface Props {
  children: any;
}

const Error = (props: Props) => {
  return <div className="bg-[red]">{props.children}</div>;
};

export default Error;
