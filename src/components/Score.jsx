const Score = ({ children, level }) => {
  return <div className={level ? "level" : "score"}>{children}</div>;
};
export default Score;
