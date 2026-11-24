export function SectionLabel({ num, text, center }: { num: string; text?: string; center?: boolean }) {
  return (
    <p className={`label${center ? " label-center" : ""}`}>
      <span className="label-num">{num}</span>
      {text}
    </p>
  );
}
