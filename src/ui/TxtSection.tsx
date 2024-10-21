const TxtSection: React.FC<TxtSectionProps> = ({
  title,
  fromDate,
  toDate,
  company,
  location,
}: TxtSectionProps) => (
  <div className="mt-[20px] w-[50%]">
    <p>
      <b>{title},</b> {fromDate === toDate ? "" : `${fromDate} - `} {toDate}
      <br />
      <b>{company},</b> {location}
    </p>
  </div>
);

export default TxtSection;
