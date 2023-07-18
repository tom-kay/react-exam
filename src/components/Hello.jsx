export const Hello = (props) => {
  return <>{/* <h2>Hello, {props.name}!!</h2> */}</>;
};

export const Hello2 = ({ id, name }) => {
  return <h2 style={{ fontWeight: 500 }}>Hi!,{id && name ? name : ''}</h2>;
};

Hello.defaultProps = { name: '시니어코딩' };
